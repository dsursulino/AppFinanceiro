// import all interfaces
import { PrismaClient } from '@prisma/client';
import { FichaREP } from './fichaREP';
// that class only can be extended
export class Repository {

  dbClient: PrismaClient;
  FichaREP: FichaREP;

  constructor(_dbClient: PrismaClient) {
    this.dbClient = _dbClient;

    this.FichaREP = new FichaREP(this.dbClient);

  }



}