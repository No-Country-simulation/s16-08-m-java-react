import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error']
});

// Añadir console.log para verificar las propiedades del cliente de Prisma
console.log(Object.keys(prisma));

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      try {
        const todo = req.body;
        const createdTodo = await prisma.todo.create({ data: todo });
        res.status(201).json(createdTodo);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    case 'GET':
      try {
        const todos = await prisma.todo.findMany();
        res.status(200).json(todos);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
