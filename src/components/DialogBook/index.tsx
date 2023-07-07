import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { DialogRatingCard } from './DialogRatingCard'
import { FormAddNewRating } from '../Form'
import { signIn, useSession } from 'next-auth/react'
import { DialogBookCard } from './DialogBookCard'
import { DialogSignIn } from '../DialogSIgnIn'
import { FormUpdateRating } from '../Form/FormUpdateRating'
import { Overlay, Content, Ratings, Rate, Trigger } from './styles'

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

interface Categories {
  book_id: string
  categoryId: string
  category: {
    id: string
    name: string
  }
}

interface Book {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: string
  avgRating: number
  categories: Categories[]
  ratings: Ratings[]
}

interface BookData {
  book: Book
}

interface DialogBookProps {
  bookId: string
  children: ReactNode
}

export function DialogBook({ bookId, children }: DialogBookProps) {
  const [open, setOpen] = useState(false)
  const [storedBookId, setStoredBookId] = useState<string | null>(null)
  const [isOpenAddNewRating, setIsOpenAddNewRating] = useState(false)
  const [isOpenUpdateRating, setIsOpenUpdateRating] = useState(false)

  const session = useSession()
  const isAuthenticated = session.status

  const { data } = useQuery(
    ['rating-book', bookId],
    async () => {
      const response = await api.get(`/books/${storedBookId ?? bookId}`)

      return (response.data as BookData) || []
    },
    {
      enabled: !!open,
    }
  )

  const handleOpenAddNewRating = useCallback(() => {
    setIsOpenAddNewRating(true)
  }, [])

  const handleOpenUpdateRating = useCallback(() => {
    setIsOpenUpdateRating(true)
  }, [])

  const handleSignIn = useCallback(
    async (provider: string) => {
      await signIn(provider, { callbackUrl: '/explorer' })
      handleOpenAddNewRating()

      // Salvo o estado do dialog no localStorage
      localStorage.setItem(
        '@book-wise:dialog-book-state-1.0.0',
        JSON.stringify(open)
      )

      // Salvo o id do livro no localStorage
      localStorage.setItem(
        '@book-wise:bookId-state-1.0.0',
        JSON.stringify(bookId)
      )

      // Salva o estado card de adicionar uma nova avaliação no localStorage
      localStorage.setItem(
        '@book-wise:open-add-new-rating-state-1.0.0',
        JSON.stringify(isOpenAddNewRating)
      )
    },
    [bookId, handleOpenAddNewRating, isOpenAddNewRating, open]
  )

  const handleCloseAddNewRating = useCallback(() => {
    setIsOpenAddNewRating(false)
  }, [])

  const handleCloseUpdateRating = useCallback(() => {
    setIsOpenUpdateRating(false)
  }, [])

  useEffect(() => {
    const storedDialogState = localStorage.getItem(
      '@book-wise:dialog-book-state-1.0.0'
    )
    const storedBookId = localStorage.getItem('@book-wise:bookId-state-1.0.0')
    const storedOpenAddNewRating = localStorage.getItem(
      '@book-wise:open-add-new-rating-state-1.0.0'
    )

    if (storedDialogState && storedBookId && storedOpenAddNewRating) {
      setOpen(JSON.parse(storedDialogState))
      setStoredBookId(JSON.parse(storedBookId))
      setIsOpenAddNewRating(JSON.parse(storedOpenAddNewRating ?? ''))

      localStorage.removeItem('@book-wise:dialog-book-state-1.0.0')
      localStorage.removeItem('@book-wise:bookId-state-1.0.0')
      localStorage.removeItem('@book-wise:open-add-new-rating-state-1.0.0')
    }
  }, [])

  const bookAlreadyRated = data?.book.ratings.find(
    (rating) => rating.user_id === session.data?.user.id
  )

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Trigger>{children}</Trigger>

      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Close>
            <X size={24} />
          </Dialog.Close>

          <DialogBookCard book={data?.book} />

          <Rate>
            <h3>Avaliações</h3>

            {isAuthenticated === 'unauthenticated' ? (
              <DialogSignIn
                handleOpenAddNewRating={handleOpenAddNewRating}
                handleSignIn={handleSignIn}
              />
            ) : bookAlreadyRated ? (
              <button onClick={handleOpenUpdateRating}>
                Editar sua avaliação
              </button>
            ) : (
              <button onClick={handleOpenAddNewRating}>Avaliar</button>
            )}
          </Rate>

          <Ratings>
            {isOpenAddNewRating && isAuthenticated === 'authenticated' && (
              <FormAddNewRating
                bookId={data?.book.id}
                handleCloseAddNewRating={handleCloseAddNewRating}
              />
            )}

            {isOpenUpdateRating && isAuthenticated === 'authenticated' && (
              <FormUpdateRating
                rating={bookAlreadyRated}
                handleCloseUpdateRating={handleCloseUpdateRating}
              />
            )}

            {data?.book?.ratings?.map((rating) => (
              <DialogRatingCard rating={rating} key={rating.id} />
            ))}
          </Ratings>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
