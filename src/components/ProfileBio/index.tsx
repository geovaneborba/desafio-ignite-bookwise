import { BookOpen, Books, BookmarkSimple, UserList } from 'phosphor-react'
import { Avatar } from '../Avatar'
import { getYearFromDate } from '@/utils/get-year-from-date'
import { ProfileBioContainer, User, UserStats, UserStatItem } from './styles'

interface ProfileBioProps {
  user?: {
    id: string
    name: string
    avatar_url: string
    created_at: string
    totalPagesRead: number
    totalRating: number
    totalReadAuthors: number
    mostReadCategory: string
  }
}

export function ProfileBio({ user }: ProfileBioProps) {
  return (
    <ProfileBioContainer>
      <User>
        <Avatar
          size="lg"
          src={user?.avatar_url ?? ''}
          height={72}
          width={72}
          alt={user?.name ?? ''}
        />

        <h3>{user?.name}</h3>
        <span>membro desde {getYearFromDate(user?.created_at ?? '')}</span>
      </User>

      <UserStats>
        <UserStatItem>
          <BookOpen size={32} />
          <div>
            <span>{user?.totalPagesRead}</span>
            <h3>Páginas lidas</h3>
          </div>
        </UserStatItem>

        <UserStatItem>
          <Books size={32} />
          <div>
            <span>{user?.totalRating}</span>
            <h3>Livros avaliados</h3>
          </div>
        </UserStatItem>

        <UserStatItem>
          <UserList size={32} />
          <div>
            <span>{user?.totalReadAuthors}</span>
            <h3>Autores lidos</h3>
          </div>
        </UserStatItem>

        <UserStatItem>
          <BookmarkSimple size={32} />
          <div>
            <span>{user?.mostReadCategory}</span>
            <h3>Categoria mais lida</h3>
          </div>
        </UserStatItem>
      </UserStats>
    </ProfileBioContainer>
  )
}
