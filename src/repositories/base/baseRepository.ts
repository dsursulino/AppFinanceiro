
import { PrismaClient } from '@prisma/client';

export  class BaseRepository  {

  constructor() {

  }

  dbClient: PrismaClient;
}