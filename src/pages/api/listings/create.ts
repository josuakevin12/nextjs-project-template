import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { title, description, image, price, rating, location } = req.body
      const newListing = await prisma.listing.create({
        data: {
          title,
          description,
          image,
          price: parseFloat(price),
          rating: parseFloat(rating),
          location,
        },
      })
      res.status(201).json(newListing)
    } catch (error) {
      res.status(500).json({ error: 'Failed to create listing' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
