import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../auth/[...nextauth]'

interface Books {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: Date
  ratings: {
    id: string
    rate: number
    description: string
    created_at: Date
    book_id: string
    user_id: string
  }[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const categoryId = req.query.category as string
  const search = req.query.search as string

  let books: Books[] = []

  books = await prisma.book.findMany({
    include: {
      ratings: true,
    },
  })

  if (!books) {
    return res.status(404).json({ error: 'Books not found' })
  }

  if (search) {
    books = await prisma.book.findMany({
      where: {
        OR: [
          {
            name: {
              contains: search,
              mode: 'insensitive',
            },
          },
          {
            author: {
              contains: search,
              mode: 'insensitive',
            },
          },
        ],
      },
      include: {
        ratings: true,
      },
    })

    if (!books) {
      return res.status(404).json({ error: 'Books not found' })
    }
  }

  if (categoryId) {
    books = await prisma.book.findMany({
      where: {
        categories: {
          some: { categoryId },
        },
      },
      include: {
        ratings: true,
      },
    })

    if (!books) {
      return res.status(404).json({ error: 'Books not found' })
    }
  }

  const booksAvgRating = await prisma.rating.groupBy({
    by: ['book_id'],
    _avg: {
      rate: true,
    },
  })

  let userBooksIdsAlreadyRead: string[] = []

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res)
  )

  if (session) {
    const userBooksAlreadyRead = await prisma.book.findMany({
      where: {
        ratings: {
          some: {
            user_id: String(session?.user?.id),
          },
        },
      },
    })

    userBooksIdsAlreadyRead = userBooksAlreadyRead?.map((book) => book?.id)
  }

  const booksWithAvgRating = books.map((book) => {
    const bookAvgRating = booksAvgRating.find(
      (avgRating) => avgRating.book_id === book.id
    )
    const { ratings, ...bookInfo } = book

    return {
      ...bookInfo,
      ratings: ratings.length,
      avg_rating: bookAvgRating?._avg.rate,
      alreadyRead: userBooksIdsAlreadyRead.includes(book.id),
    }
  })

  return res.json({ books: booksWithAvgRating })
}
