import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const services = await prisma.petCareService.findMany();
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
            fecha: new Date(fecha),
            duration,
            location,
            price,
            createdAt: new Date(),
            updatedAt: new Date(),
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
          const { id, ids, ...updateData } = req.body;
  
          // Modificar un solo servicio
          if (id) {
            const updatedService = await prisma.petCareService.update({
              where: { id },
              data: {
                ...updateData,
                updatedAt: new Date(),
              },
            });
            return res.status(200).json(updatedService);
          }
  
          // Modificar múltiples servicios
          if (ids && Array.isArray(ids)) {
            const updatedServices = await prisma.petCareService.updateMany({
              where: {
                id: {
                  in: ids,
                },
              },
              data: {
                ...updateData,
                updatedAt: new Date(),
              },
            });
            return res.status(200).json(updatedServices);
          }
  
          // Si ni id ni ids están presentes en la solicitud
          return res.status(400).json({ error: 'ID or IDs are required' });
        } catch (error) {
          console.error('Error updating service:', error);
          return res.status(500).json({ error: 'Error updating service' });
        }
    
      case 'DELETE':
  // Delete a pet care service
  try {
    const { id } = req.body;

    // Validate required service ID
    if (!id) {
      return res.status(400).json({ error: 'Service ID is required' });
    }

    await prisma.petCareService.delete({
      where: { id },
    });
    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting service:', error); // Log specific error details
    res.status(500).json({ error: 'Error deleting service' });
  }
  break;
   
  }
}