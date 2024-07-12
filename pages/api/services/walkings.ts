import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userId, fecha, duration, location, price } = req.body;

    try {
        const walkingService = await prisma.walkingService.create({
            data: {
                userId,
                fecha,
                duration,
                location,
                price,
              
        },
      });
      res.status(201).json(walkingService);
    } catch (error) {
      res.status(500).json({ error: 'Error creating walking service' });
    }
  } else if (req.method === 'GET') {
    try {
      const walkings = await prisma.walkingService.findMany();
      res.status(200).json(walkings);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching walking services' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
