import Image from 'next/image'
import { Rating } from '../Rating'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { DialogBook } from '../DialogBook'
import { Book, BookCard, ProfileRatedBooksContainer } from './styles'

interface ProfileRatedBooks {
  ratings?: {
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

export function ProfileRatedBooks({ ratings }: ProfileRatedBooks) {
  return (
    <ProfileRatedBooksContainer>
      {ratings?.map((rating) => (
        <div key={rating.id}>
          <span>
            Há{' '}
            {formatDistanceToNow(new Date(rating.created_at), {
              locale: ptBR,
            })}
          </span>
          <DialogBook bookId={rating.book.id}>
            <BookCard>
              <Book>
                <Image
                  src={rating.book.cover_url}
                  width={98}
                  height={134}
                  alt={rating.book.name}
                />

                <div>
                  <h3>{rating.book.name}</h3>
                  <h4>{rating.book.author}</h4>

                  <Rating rate={rating.rate} disabled />
                </div>
              </Book>
              <p>{rating.book.summary}</p>
            </BookCard>
          </DialogBook>
        </div>
      ))}
    </ProfileRatedBooksContainer>
  )
}
