import Image from 'next/image'
import { ReactElement, useCallback, useState } from 'react'
import { NextPageWithLayout } from './_app'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { Binoculars, MagnifyingGlass } from 'phosphor-react'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { DialogBook } from '@/components/DialogBook'
import { Rating } from '@/components/Rating/'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  BookCard,
  CategoryItem,
  ExplorerPageContainer,
} from '@/components/ExplorerPage/styles'

interface Categories {
  categories: {
    id: string
    name: string
  }[]
}

interface Books {
  books: {
    id: string
    name: string
    author: string
    summary: string
    cover_url: string
    total_pages: number
    created_at: string
    ratings: number
    avg_rating: number
    alreadyRead: boolean
  }[]
}

const searchBookSchema = z.object({
  search: z.string(),
})

type SearchForm = z.infer<typeof searchBookSchema>

const ExplorerPage: NextPageWithLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [search, setSearch] = useState('')

  const { register, handleSubmit } = useForm<SearchForm>({
    resolver: zodResolver(searchBookSchema),
  })

  const handleSelectedCategory = useCallback((category: string) => {
    setSelectedCategory(category)
  }, [])

  const { data: categoriesData } = useQuery(['categories'], async () => {
    const response = await api.get('/categories')

    return (response.data as Categories) || []
  })

  const { data: booksData } = useQuery(
    ['books', selectedCategory, search],
    async () => {
      const response = await api.get('/books', {
        params: {
          category: selectedCategory,
          search,
        },
      })

      return (response.data as Books) || []
    }
  )

  async function handleSearch(data: SearchForm) {
    const { search } = data
    setSelectedCategory('')

    setSearch(search)
  }

  return (
    <ExplorerPageContainer>
      <header>
        <h2>
          <Binoculars size={32} />
          Explorar
        </h2>

        <form onSubmit={handleSubmit(handleSearch)}>
          <div>
            <input
              {...register('search')}
              type="text"
              name="search"
              id="search"
              placeholder="Buscar livro ou autor"
            />
            <button type="submit">
              <MagnifyingGlass size={20} />
            </button>
          </div>
        </form>
      </header>

      <ul>
        <CategoryItem
          isActive={selectedCategory === ''}
          onClick={() => handleSelectedCategory('')}
        >
          All
        </CategoryItem>
        {categoriesData?.categories.map((category) => (
          <CategoryItem
            key={category.id}
            onClick={() => handleSelectedCategory(category.id)}
          >
            {category.name}
          </CategoryItem>
        ))}
      </ul>

      <div>
        {booksData?.books?.length === 0 && (
          <p>Nenhum livro ou autor encontrado!</p>
        )}
        {booksData?.books?.map((book) => (
          <DialogBook bookId={book.id} key={book.id}>
            <BookCard>
              {book.alreadyRead && <span>Lido</span>}

              <Image
                src={book.cover_url}
                alt={book.name}
                width={108}
                height={152}
              />
              <div>
                <h3>{book.name}</h3>
                <h4>{book.author}</h4>

                <Rating disabled rate={book.avg_rating} />
              </div>
            </BookCard>
          </DialogBook>
        ))}
      </div>
    </ExplorerPageContainer>
  )
}

ExplorerPage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Explorer">{page}</DefaultLayout>
}

export default ExplorerPage
