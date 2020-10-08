import React, { useContext, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import Send from '@material-ui/icons/Send';
import { useForm, Controller } from "react-hook-form";
import MaskedInput from 'react-text-mask'

import { Container } from './style';

import img_etapa from '../../../../assets/solicitacaoCredito/etapa3.png'
import EtapaContext, { iEtapa } from '../etapaContext';
import { Ficha } from '../../../../Entities/Ficha';
import { CepService } from '../../../../services/cepService';
import { Endereco } from '../../../../Entities/Endereco';
import TextField from '@material-ui/core/TextField/TextField';
import MaterialUIInput from "@material-ui/core/Input";



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

const Etapa07: React.FC = () => {

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

    <Container className="h-full">


      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 gap-1 justify-items-center">
        <div className="sub-titulo antialiased text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">{_contexto.value.nome}, agora informe seu número de celular.</div>
          <div className="form  md: w-2/4">
            <div className="w-full flex-col ">
            <TextField placeholder="(DD) 99999-9999"

inputRef={register({
  required: "Obrigatório.",
  pattern: {
    value: /^(\(11\) [9][0-9]{4}-[0-9]{4})|(\(1[2-9]\) [5-9][0-9]{3}-[0-9]{4})|(\([2-9][1-9]\) [5-9][0-9]{3}-[0-9]{4})$/,
    message: "Celular inválido."
  }
})}

name="Celular"
label="Celular"
className="w-full"
InputProps={{
  inputComponent: CelularMaskCustom,
}}

defaultValue={_contexto?.value?.celular}
helperText={errors.celular && errors.celular.message}
/>



            </div>
            <div className="avancar_etapa flex justify-end my-4 sm:my-2 md:my-4">
              <Button
                variant="contained"
                className="botao"
                type="submit"
              >
                Avançar
              <Send className="ml-4" />
              </Button>
            </div>

          </div>




        </div>

      </form>



    </Container>


  );
}

export default Etapa07;