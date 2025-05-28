import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // For JWT, logout can be handled client-side by deleting the token.
    // Optionally, implement token blacklist here.
    res.status(200).json({ message: 'Logged out successfully' })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
