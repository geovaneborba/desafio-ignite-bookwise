import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const books = await prisma.book.findMany({
    orderBy: {
      ratings: {
        _count: 'desc',
      },
    },
    include: {
      ratings: true,
    },
    take: 4,
  })

  if (!books) {
    return res.status(404).json({
      error: 'Books not found',
    })
  }

  const booksAvgRating = await prisma.rating.groupBy({
    by: ['book_id'],
    where: {
      book_id: {
        in: books.map((book) => book.id),
      },
    },
    _avg: {
      rate: true,
    },
  })

  const booksWithAvgRating = books
    .map((book) => {
      const bookAvgRating = booksAvgRating.find(
        (avgRating) => avgRating.book_id === book.id
      )

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { ratings, ...bookInfo } = book

      return {
        ...bookInfo,
        avg_rating: bookAvgRating?._avg.rate,
      }
    })
    .sort((a, b) =>
      a.avg_rating && b.avg_rating ? b.avg_rating - a.avg_rating : 0
    )

  return res.json({
    books: booksWithAvgRating,
  })
}
