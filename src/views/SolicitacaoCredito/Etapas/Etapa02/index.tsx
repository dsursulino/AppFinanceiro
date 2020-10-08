import React, { useCallback, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import Send from '@material-ui/icons/Send';


import { Container } from './style';

import img_email from '../../../../assets/solicitacaoCredito/email.png'
import { Ficha } from '../../../../Entities/Ficha';
import EtapaContext, { iEtapa } from '../etapaContext';


const Etapa02: React.FC = () => {
  const _contexto = useContext<iEtapa>(EtapaContext);

  const avancar_etapa = function () {
    _contexto.value.etapa = 3;
    _contexto.Atualizar(_contexto.value);

  };

  return (


    <Container className="h-full">

<div className="" onClick={()=> avancar_etapa()} >
          <div className="sub-titulo antialiased text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Acabei de te enviar um link por e-mail!</div>
          <div className="mensagem subpixel-antialiased my-8 text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Dá uma olhadinha lá, clique no link e vamos juntos finalizar o seu cadastro!</div>

        </div>
    </Container>


  );
}

export default Etapa02;