import React, { useCallback, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import Send from '@material-ui/icons/Send';
import { useForm } from "react-hook-form";

import { Container } from './style';

import img_etapa_01 from '../../../../assets/solicitacaoCredito/etapa1.png'
import EtapaContext, { iEtapa } from '../etapaContext';
import { Ficha } from '../../../../Entities/Ficha';
import { TextField } from '@material-ui/core';



const Etapa01: React.FC = () => {

  const _contexto = useContext<iEtapa>(EtapaContext);

  const { register, handleSubmit, watch, errors } = useForm<Ficha>();
  const onSubmit = (data: Ficha) => {
    _contexto.value = Object.assign(_contexto.value, data);
    _contexto.value.etapa = 2;
    _contexto.Atualizar(_contexto.value);
  };




  return (

    <Container className="h-full grid grid-cols-1 justify-items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-4/4">
        <div className="w-full ">
          <div className="antialiased ">
            <div className="bem-vindo antialiased text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl">Bem-vindx à TMB</div>
            <div className="label-email antialiased text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Informe seu e-mail</div>
          </div>
          <div className="form sm:w-full md:w-2/4 my-8">
            <div className="w-full flex-col ">


              <TextField className="w-full "
                color="primary"
                inputRef={register({
                  required: "Obrigatório.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Endereço de e-mail inválido."
                  }
                })}
                name="email"
                defaultValue={_contexto.value.email}

                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />

                    </InputAdornment>
                  ),
                }}
                helperText={errors.email && errors.email.message}
              />

            </div>
            <div className="criarConta flex justify-end my-4 sm:my-2 md:my-4">
              <Button
                variant="contained"
                className="botao"
                type="submit"

              >
                Criar sua conta
              <Send className="ml-4" />
              </Button>
            </div>

          </div>




        </div>

      </form>



    </Container>


  );
}

export default Etapa01;