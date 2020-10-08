import React, { useContext, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import { useForm, Controller } from "react-hook-form";
import MaskedInput from 'react-text-mask'

import { Container } from './style';

import img_etapa from '../../../../assets/solicitacaoCredito/etapa3.png'
import EtapaContext, { iEtapa } from '../etapaContext';
import { Ficha } from '../../../../Entities/Ficha';
import { TextField } from '@material-ui/core';
import Galeria from './galeria/galeria';



function CelularMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}

    />
  );
}

const Etapa08: React.FC = () => {

  const _contexto = useContext<iEtapa>(EtapaContext);
  const { setValue, register, handleSubmit, errors, reset } = useForm<Ficha>();

  const onSubmit = (data: Ficha) => {
    _contexto.value = Object.assign(_contexto.value, data);
    _contexto.value.etapa = 8;
    _contexto.Atualizar(_contexto.value);
  };

  useEffect(() => {

  }, [_contexto, reset]);


  return (
   <Galeria></Galeria>
  );
}

export default Etapa08;