import { prisma } from '@/lib/prisma'
import { findMostFrequentCategory } from '@/utils/find-most-frequent-category'
import { NextApiRequest, NextApiResponse } from 'next'

interface RatedBooks {
  id: string
  rate: number
  description: string
  created_at: Date
  book: {
    id: string
    name: string
    author: string
    summary: string
    cover_url: string
    created_at: Date
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const userId = req.query.id as string
  const search = req.query.search as string

  if (!userId) {
    return res.status(400).json({ error: 'Missing required parameter' })
  }

  let ratedBooks: RatedBooks[] = []

  if (search) {
    ratedBooks = await prisma.rating.findMany({
      where: {
        user: {
          id: userId,
        },
        book: {
          name: {
            contains: search,
            mode: 'insensitive',
          },
        },
      },
      include: {
        book: true,
      },
    })
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      ratings: {
        include: {
          book: {
            include: {
              categories: {
                include: {
                  category: true,
                },
              },
            },
          },
          user: true,
        },
        orderBy: {
          created_at: 'desc',
        },
      },
    },
  })

  if (!user) {
    return res.status(404).json({ error: 'User not found' })
  }

  // total de páginas lidas
  const totalPagesRead = user?.ratings.reduce(
    (total, rating) => total + rating.book.total_pages,
    0
  )

  // total de avaliações
  const totalRating = user?.ratings.length

  // total de autores lidos
  const totalReadAuthors = [
    ...new Set(user?.ratings.map((item) => item.book.author)),
  ].length

  // categoria mais lida
  const categories = user?.ratings?.flatMap((rating) =>
    rating?.book?.categories?.flatMap((category) => category?.category?.name)
  )

  const mostReadCategory = findMostFrequentCategory(categories)

  let ratings = []

  ratings = ratedBooks.length !== 0 ? ratedBooks : user.ratings

  return res.json({
    id: user.id,
    name: user.name,
    created_at: user.created_at,
    avatar_url: user.avatar_url,
    ratings,
    totalPagesRead,
    totalRating,
    totalReadAuthors,
    mostReadCategory,
  })
}
