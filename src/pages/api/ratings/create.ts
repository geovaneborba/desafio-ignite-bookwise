import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import * as z from 'zod'

const ratingSchema = z.object({
  rate: z.number().min(0).max(5),
  description: z.string().min(1),
  user_id: z.string().min(1),
  book_id: z.string().min(1),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const result = await ratingSchema.safeParseAsync(req.body.data)

  if (!result.success) {
    return res.status(400).json({})
  } else {
    await prisma.rating.create({
      data: {
        rate: result.data.rate,
        description: result.data.description,
        user_id: result.data.user_id,
        book_id: result.data.book_id,
      },
    })

    return res.status(201).json({})
  }
}
