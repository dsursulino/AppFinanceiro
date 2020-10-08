import React, { createContext } from 'react';
import { Ficha } from '../../../Entities/Ficha';
import { Produto } from '../../../Entities/Produto';



export interface iEtapa{
  value:Ficha,
  produtos?:Produto[],
  Atualizar(value: Ficha):void
};

const etapaState:iEtapa = {
  value: new Ficha(),
  produtos: new Array(),
  Atualizar: null
};

const EtapaContext = createContext<iEtapa>(etapaState);


export default EtapaContext;