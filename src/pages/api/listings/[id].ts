import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method === 'PUT') {
    try {
      const { title, description, image, price, rating, location } = req.body
      const updatedListing = await prisma.listing.update({
        where: { id: Number(id) },
        data: {
          title,
          description,
          image,
          price: parseFloat(price),
          rating: parseFloat(rating),
          location,
        },
      })
      res.status(200).json(updatedListing)
    } catch (error) {
      res.status(500).json({ error: 'Failed to update listing' })
    }
  } else if (req.method === 'DELETE') {
    try {
      await prisma.listing.delete({
        where: { id: Number(id) },
      })
      res.status(204).end()
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete listing' })
    }
  } else {
    res.setHeader('Allow', ['PUT', 'DELETE'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
