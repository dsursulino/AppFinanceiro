// import all interfaces
import { IWrite } from './interfaces/IWrite';
import { IRead } from './interfaces/IRead';
import { Ficha, PrismaClient } from '@prisma/client';
import { BaseRepository } from './base/baseRepository';
// that class only can be extended
export  class FichaREP extends BaseRepository implements IWrite<Ficha>, IRead<Ficha> {

  constructor(dbClient: PrismaClient) {
    super();
    this.dbClient = dbClient;
  }

  create(item: Ficha): Promise<any> {
    return this.dbClient.ficha.create({
      data: item
    });
  }

  update( item: Ficha): Promise<any> {
    return this.dbClient.ficha.update({
      where: { id: item.id },
      data: item
    });
  }
  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  find(item: Ficha): Promise<Ficha[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<Ficha> {
    throw new Error('Method not implemented.');
  }

}