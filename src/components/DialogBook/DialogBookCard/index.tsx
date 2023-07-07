import Image from 'next/image'
import { Rating } from '../../Rating'
import { BookmarkSimple, BookOpen } from 'phosphor-react'
import {
  Book,
  BookCategory,
  BookInfo,
  BookPage,
  DialogBookCardContainer,
} from './styles'

interface Categories {
  book_id: string
  categoryId: string
  category: {
    id: string
    name: string
  }
}

interface Ratings {
  id: string
  rate: 4
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

interface DialogBookCardProps {
  book?: {
    id: string
    name: string
    author: string
    summary: string
    cover_url: string
    total_pages: number
    created_at: string
    categories: Categories[]
    ratings: Ratings[]
    avgRating: number
  }
}

export function DialogBookCard({ book }: DialogBookCardProps) {
  return (
    <DialogBookCardContainer>
      <Book>
        <Image
          src={book?.cover_url ?? ''}
          alt={book?.name ?? ''}
          height={242}
          width={172}
        />
        <div>
          <h3>{book?.name}</h3>
          <h4>{book?.author}</h4>

          <Rating rate={book?.avgRating} disabled={true} />
          <span>{book?.ratings.length ?? 0} avaliações</span>
        </div>
      </Book>

      <BookInfo>
        <BookCategory>
          <BookmarkSimple size={24} />
          <div>
            <h3>Categoria</h3>
            <h4>
              {book?.categories
                .map((item, index) => {
                  if (index !== 0) {
                    return item.category.name
                      .charAt(0)
                      .toLocaleLowerCase()
                      .concat(item.category.name.slice(1))
                  }
                  return item.category.name
                })
                .join(', ')}
            </h4>
          </div>
        </BookCategory>

        <BookPage>
          <BookOpen size={24} />
          <div>
            <h3>Páginas</h3>
            <h4>{book?.total_pages}</h4>
          </div>
        </BookPage>
      </BookInfo>
    </DialogBookCardContainer>
  )
}
