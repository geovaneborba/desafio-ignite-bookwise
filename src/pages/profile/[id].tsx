import { ReactElement, useState } from 'react'
import { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { CaretLeft, MagnifyingGlass, User } from 'phosphor-react'
import { ProfileRatedBooks } from '@/components/ProfileRatedBooks'
import { ProfileBio } from '@/components/ProfileBio'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  ProfileContainer,
  RatedBooksContainer,
} from '@/components/ProfilePage/styles'

const searchFormSchema = z.object({
  search: z.string(),
})

type FormInputValues = z.infer<typeof searchFormSchema>

interface ProfileData {
  id: string
  name: string
  avatar_url: string
  created_at: string
  totalPagesRead: number
  totalRating: number
  totalReadAuthors: number
  mostReadCategory: string
  ratings: {
    id: string
    rate: number
    created_at: Date
    book: {
      id: string
      name: string
      author: string
      summary: string
      cover_url: string
    }
  }[]
}

const ProfilePage: NextPageWithLayout = () => {
  const [search, setSearch] = useState('')
  const { handleSubmit, register } = useForm<FormInputValues>({
    resolver: zodResolver(searchFormSchema),
  })
  const { data: session } = useSession()
  const route = useRouter()
  const userId = route.query.id
  const isMyProfile = userId === session?.user.id

  const { data: user } = useQuery<ProfileData>(
    ['profile', userId, search],
    async () => {
      const response = await api.get('/profile', {
        params: {
          id: userId,
          search,
        },
      })

      return response.data
    },
    {
      enabled: !!userId,
    }
  )

  async function handleSearch(data: FormInputValues) {
    const { search } = data

    setSearch(search)
  }

  return (
    <ProfileContainer>
      {isMyProfile ? (
        <h1>
          <User size="32" />
          Perfil
        </h1>
      ) : (
        <Link href={'/'}>
          <CaretLeft size={20} />
          Voltar
        </Link>
      )}

      <RatedBooksContainer>
        <div>
          <form onSubmit={handleSubmit(handleSearch)}>
            <div>
              <input
                {...register('search')}
                type="text"
                name="search"
                id="search"
                placeholder="Buscar livro avaliado"
              />
              <button type="submit">
                <MagnifyingGlass size={20} />
              </button>
            </div>
          </form>

          <ProfileRatedBooks ratings={user?.ratings} />
        </div>

        <ProfileBio user={user} />
      </RatedBooksContainer>
    </ProfileContainer>
  )
}

ProfilePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Profile">{page}</DefaultLayout>
}

export default ProfilePage
