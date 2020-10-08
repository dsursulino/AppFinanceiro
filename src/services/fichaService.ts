import axios from 'axios';
import { Ficha } from '../Entities/Ficha';


export  class  FichaService  {


  static  async buscarficha() {

    const request = axios.get('/api/ficha');

    return (await request).data;
  }

  static  async Criar(item: Ficha) {

    const request = fetch('http://localhost:3000/api/ficha', {
      method: 'POST',
      body: JSON.stringify(item)
    });

    return  (await request).json();
/*
    const request = axios.post('http://localhost:3000/api/ficha', JSON.stringify(item));

    return (await request).data;*/
  }

}