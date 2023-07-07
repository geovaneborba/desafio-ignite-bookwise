import { X, Check } from 'phosphor-react'
import { Avatar } from '../../Avatar'
import { Rating } from '../../Rating'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import * as z from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  UserInfo,
  TextAreaContainer,
  ErrorText,
  FormActions,
} from '../FormAddNewRating/styles'

const ratingSchema = z.object({
  description: z
    .string()
    .min(1, 'O texto de avaliação é obrigatório!')
    .max(450, 'O texto de avaliação não deve ser maior que 450 caracteres'),
})

type RatingFormValues = z.infer<typeof ratingSchema>

interface FormUpdateRatingProps {
  rating?: {
    id: string
    rate: number
    description: string
    created_at: string
    book_id: string
    user_id: string
    user: {
      id: string
      email: string
      name: string
      avatar_url: string
      created_at: string
    }
  }
  handleCloseUpdateRating: () => void
}

export function FormUpdateRating({
  rating,
  handleCloseUpdateRating,
}: FormUpdateRatingProps) {
  const [rate, setRate] = useState(0)
  const [description, setDescription] = useState('')

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RatingFormValues>({
    resolver: zodResolver(ratingSchema),
    defaultValues: {
      description: rating?.description,
    },
  })

  const queryClient = useQueryClient()

  const handleRating = useCallback((rate: number) => {
    setRate(rate)
  }, [])

  const { mutateAsync: UpdateRating } = useMutation(
    async (data: any) => {
      return await api.put(`/ratings/update/${rating?.id}`, {
        data: {
          rate: data.rate,
          description: data.description,
        },
      })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['books'])
        queryClient.invalidateQueries(['rating-book'])
        queryClient.invalidateQueries(['latest-ratings'])
        handleCloseUpdateRating()
      },
    }
  )

  const handleUpdateRating = useCallback(
    async (data: RatingFormValues) => {
      const newRating = {
        rate,
        description: data.description,
      }

      await UpdateRating(newRating)
    },
    [UpdateRating, rate]
  )

  return (
    <Form onSubmit={handleSubmit(handleUpdateRating)}>
      <UserInfo>
        <Avatar
          size="md"
          src={rating?.user.avatar_url ?? ''}
          height={40}
          width={40}
          alt={rating?.user.name ?? ''}
        />

        <h3>{rating?.user.name}</h3>

        <Rating size={24} handleRating={handleRating} rate={rating?.rate} />
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
            handleCloseUpdateRating()
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
