
// /pages/api/movies.js
import { PrismaClient } from '@prisma/client';
import {FichaBUS} from '../../src/business/fichaBUS'


const prisma = new PrismaClient();

export default async function (req, res) {

  const fichaBUS =  new FichaBUS(prisma);
  if (req.method === 'POST') {

    const { body } = req;
    const ficha = await fichaBUS.create(JSON.parse(body));
    res.json(ficha);
  }
  if (req.method === 'GET') {

    const movie = await prisma.ficha.findMany();
    res.json(movie);
  }
}