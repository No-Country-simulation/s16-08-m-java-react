import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const services = await prisma.petCareService.findMany({
          where: { userId: req.query.userId as string }
        });
        res.status(200).json(services);
      } catch (error) {
        console.error('Error fetching services:', error);
        res.status(500).json({ error: 'Error fetching services' });
      }
      break;

    case 'POST':
      try {
        const { userId, fecha, duration, location, price } = req.body;
        if (!userId || !fecha || !duration || !location || !price) {
          return res.status(400).json({ error: 'All fields are required' });
        }

        const newService = await prisma.petCareService.create({
          data: {
            userId,
            fecha: new Date(fecha), // Convertir a DateTime
            duration,
            location,
            price,
          },
        });
        res.status(201).json(newService);
      } catch (error) {
        console.error('Error creating service:', error);
        res.status(500).json({ error: 'Error creating service' });
      }
      break;

    case 'PUT':
      try {
        const { id, ...updateData } = req.body;
        if (!id) {
          return res.status(400).json({ error: 'ID is required' });
        }

        if (updateData.fecha) {
          updateData.fecha = new Date(updateData.fecha); // Convertir a DateTime si está presente
        }

        const updatedService = await prisma.petCareService.update({
          where: { id },
          data: { ...updateData, updatedAt: new Date() },
        });
        res.status(200).json(updatedService);
      } catch (error) {
        console.error('Error updating service:', error);
        res.status(500).json({ error: 'Error updating service' });
      }
      break;

    case 'DELETE':
      try {
        const { id } = req.body;
        if (!id) {
          return res.status(400).json({ error: 'ID is required' });
        }

        await prisma.petCareService.delete({ where: { id } });
        res.status(200).json({ message: 'Service deleted successfully' });
      } catch (error) {
        console.error('Error deleting service:', error);
        res.status(500).json({ error: 'Error deleting service' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
