import { Endereco } from "./Endereco";
export class Ficha {

  constructor() {
    this.etapa = 1;
  }


  id: number;
  etapa: number;
  token?: string;
  email?: string;
  nome?: string;
  cpf?:string;
  cep?:string;
  endereco?:any;
  celular?:string;

}