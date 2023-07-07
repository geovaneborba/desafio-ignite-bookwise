import Link from 'next/link'
import { formatDate } from '@/utils/format-date'
import { Avatar } from '../../Avatar'
import { Rating } from '../../Rating'
import { DialogRatingCardContainer, UserInfo } from './styles'

interface DialogRatingCardProps {
  rating?: {
    id: string
    rate: number
    description: string
    created_at: string
    user: {
      id: string
      avatar_url: string
      name: string
    }
  }
}

export function DialogRatingCard({ rating }: DialogRatingCardProps) {
  return (
    <DialogRatingCardContainer key={rating?.id}>
      <Link href={`/profile/${rating?.user.id}`}>
        <Avatar
          src={rating?.user.avatar_url ?? ''}
          size="md"
          height={40}
          width={40}
          alt={rating?.user.name ?? ''}
        />

        <UserInfo>
          <h3>{rating?.user.name}</h3>
          <span>{formatDate(new Date(rating?.created_at ?? ''))}</span>
        </UserInfo>
        <Rating disabled rate={rating?.rate} />
      </Link>

      <p>{rating?.description}</p>
    </DialogRatingCardContainer>
  )
}
