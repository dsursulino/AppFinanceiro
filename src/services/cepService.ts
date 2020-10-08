import axios from 'axios';


export  class  CepService  {


  static  async buscarEndereco(cep: string) {

    const request = axios.get('https://viacep.com.br/ws/'+cep+'/json');

    return (await request).data;
  }


}