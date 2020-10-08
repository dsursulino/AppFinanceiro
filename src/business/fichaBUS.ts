
import { Ficha, PrismaClient } from '@prisma/client';
import { EmailService } from '../infra/emails';
import { BaseRepository } from '../repositories/base/baseRepository';
import { IRead } from '../repositories/interfaces/IRead';
import { IWrite } from '../repositories/interfaces/IWrite';
import { Repository } from '../repositories/repository';
// that class only can be extended
export class FichaBUS {

  _repository: Repository;
  constructor(_dbClient: PrismaClient) {
    this._repository = new Repository(_dbClient);

  }

  async create(item: Ficha): Promise<Ficha> {
    return new Promise<Ficha>(async (resolve, reject) => {
      const mail = new EmailService();


      item = await this._repository.FichaREP.create(item);

      const html = "Olá, </br>Para dar continuidade no processo da TMB clique no link abaixo </b>";

      const mailerRes = await mail.Send({from: item.email, html: html , subject: "TMB - Cadastro", to: "dursulino@practicar.com.br"});


      resolve(item);

    });
  }


}