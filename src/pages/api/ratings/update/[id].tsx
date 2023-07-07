import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import * as z from 'zod'

const ratingSchema = z.object({
  rate: z.number().min(0).max(5),
  description: z.string(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'PUT') {
    return res.status(405).end()
  }

  const id = req.query.id as string

  if (!id) {
    return res.status(400).json({
      error: 'Missing required parameter',
    })
  }

  const result = await ratingSchema.safeParseAsync(req.body.data)

  if (!result.success) {
    return res.status(400).json({})
  } else {
    await prisma.rating.update({
      where: {
        id,
      },
      data: {
        rate: result.data.rate,
        description: result.data.description,
        created_at: new Date(),
      },
    })

    return res.status(200).json({})
  }
}
