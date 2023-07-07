import { X, Check } from 'phosphor-react'
import { Avatar } from '../Avatar'
import { Rating } from '../Rating'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import { useSession } from 'next-auth/react'
import * as z from 'zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  UserInfo,
  TextAreaContainer,
  ErrorText,
  FormActions,
} from './FormAddNewRating/styles'

const ratingSchema = z.object({
  description: z
    .string()
    .min(1, 'O texto de avaliação é obrigatório!')
    .max(450, 'O texto de avaliação não deve ser maior que 450 caracteres'),
})

type RatingFormValues = z.infer<typeof ratingSchema>

interface FormAddNewRatingProps {
  bookId?: string
  handleCloseAddNewRating: () => void
}

export function FormAddNewRating({
  bookId,
  handleCloseAddNewRating,
}: FormAddNewRatingProps) {
  const [rate, setRate] = useState(0)
  const [description, setDescription] = useState('')

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RatingFormValues>({
    resolver: zodResolver(ratingSchema),
  })

  const session = useSession()
  const queryClient = useQueryClient()

  const handleRating = useCallback((rate: number) => {
    setRate(rate)
  }, [])

  const { mutateAsync: AddNewRating } = useMutation(
    async (data: any) => {
      return await api.post('/ratings/create', {
        data: {
          rate: data.rate,
          description: data.description,
          user_id: session.data?.user.id,
          book_id: bookId,
        },
      })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['books'])
        queryClient.invalidateQueries(['rating-book'])
        handleCloseAddNewRating()
      },
    }
  )

  const handleAddNewRating = useCallback(
    async (data: RatingFormValues) => {
      const newRating = {
        rate,
        description: data.description,
      }

      await AddNewRating(newRating)
    },
    [AddNewRating, rate]
  )

  return (
    <Form onSubmit={handleSubmit(handleAddNewRating)}>
      <UserInfo>
        <Avatar
          size="md"
          src={session.data?.user.avatar_url ?? ''}
          height={40}
          width={40}
          alt={session.data?.user.name ?? ''}
        />

        <h3>{session.data?.user.name}</h3>

        <Rating size={24} handleRating={handleRating} />
      </UserInfo>

      <TextAreaContainer>
        <textarea
          {...register('description')}
          onChange={(e) => {
            if (description.length < 450) {
              setDescription(e.target.value)
            }
          }}
          maxLength={450}
          name="description"
          id="description"
          placeholder="Escreva sua avaliação"
        />
        <span>{description.length}/450</span>
      </TextAreaContainer>

      {errors.description && errors.description.message ? (
        <ErrorText>{errors.description.message}</ErrorText>
      ) : (
        ''
      )}

      <FormActions>
        <button
          onClick={() => {
            handleCloseAddNewRating()
          }}
        >
          <X size={24} />
        </button>
        <button type="submit">
          <Check size={24} />
        </button>
      </FormActions>
    </Form>
  )
}
