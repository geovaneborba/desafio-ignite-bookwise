import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const categories = await prisma.category.findMany({})

  if (!categories) {
    return res.status(404).json({ error: 'Categories not found ' })
  }

  return res.json({ categories })
}
