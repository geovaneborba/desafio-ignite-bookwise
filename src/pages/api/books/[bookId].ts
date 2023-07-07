import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const bookId = req.query.bookId as string

  if (!bookId) {
    return res.status(400).json({ error: 'Missing required parameter' })
  }

  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
    include: {
      categories: {
        include: {
          category: true,
        },
      },
      ratings: {
        include: {
          user: true,
        },
        orderBy: {
          created_at: 'desc',
        },
      },
    },
  })

  if (!book) {
    return res.status(404).json({ error: 'Book not found' })
  }

  const booksAvgRating = await prisma.rating.groupBy({
    by: ['book_id'],
    where: {
      book_id: bookId,
    },
    _avg: {
      rate: true,
    },
  })

  const bookWithAvgRating = {
    ...book,
    avgRating: booksAvgRating[0]?._avg.rate ?? 0,
  }

  return res.json({ book: bookWithAvgRating })
}
