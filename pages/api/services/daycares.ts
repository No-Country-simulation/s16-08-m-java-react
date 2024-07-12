import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userId, date, duration, price } = req.body;

    try {
      const daycareService = await prisma.daycareService.create({
        data: {
          userId,
          fecha: new Date(date),
          duration,
          price,
        },
      });
      res.status(201).json(daycareService);
    } catch (error) {
      res.status(500).json({ error: 'Error creating daycare service' });
    }
  } else if (req.method === 'GET') {
    try {
      const daycares = await prisma.daycareService.findMany();
      res.status(200).json(daycares);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching daycare services' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
