import axios from 'axios';

export class ProdutoService {


  static async listarProdutos() {
    const request = axios.get<any[]>('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');

    return (await request).data;
  }



}