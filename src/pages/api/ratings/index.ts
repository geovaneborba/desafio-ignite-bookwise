import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../auth/[...nextauth]'

type Rating = {
  rate: number
  created_at: Date
  book: {
    name: string
    author: string
    cover_url: string
    summary: string
  }
} | null

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res)
  )

  let lastRead: Rating | null = null

  if (session) {
    lastRead = await prisma.rating.findFirst({
      where: {
        user: {
          id: String(session.user.id),
        },
      },
      select: {
        rate: true,
        created_at: true,
        description: true,
        book: {
          select: {
            name: true,
            author: true,
            cover_url: true,
            summary: true,
          },
        },
      },
    })
  }

  const ratings = await prisma.rating.findMany({
    orderBy: {
      created_at: 'desc',
    },
    include: {
      book: true,
      user: true,
    },
    take: 10,
  })

  return res.status(200).json({ ratings, lastRead })
}
