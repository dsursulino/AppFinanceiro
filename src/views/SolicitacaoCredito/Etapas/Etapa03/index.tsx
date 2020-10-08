import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import Send from '@material-ui/icons/Send';
import { useForm } from "react-hook-form";


import { Container } from './style';

import img_etapa from '../../../../assets/solicitacaoCredito/etapa3.png'
import EtapaContext, { iEtapa } from '../etapaContext';
import { Ficha } from '../../../../Entities/Ficha';
import { TextField } from '@material-ui/core';


const Etapa03: React.FC = () => {

  const _contexto = useContext<iEtapa>(EtapaContext);

  const { register, handleSubmit, watch, errors } = useForm<Ficha>();
  const onSubmit = (data: Ficha) => {
    _contexto.value = Object.assign(_contexto.value, data);
    _contexto.value.etapa = 4;
    _contexto.Atualizar(_contexto.value);
  };


  return (

    <Container className="h-full">

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 gap-1 justify-items-center">
          <div className="sub-titulo antialiased">Vamos lá, informe seu nome</div>
          <div className="form  md: w-2/4">
            <div className="w-full flex-col ">
              <TextField placeholder="Seu Nome" inputProps={{ 'aria-label': 'description' }} className="w-full "
                inputRef={register({ required: "Obrigatório." })}
                name="Nome"
                defaultValue={_contexto.value.nome}
                helperText={errors.nome && errors.nome.message}
              />

            </div>
            <div className="avancar_etapa flex justify-end sm:my-2 md:my-4">
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

export default Etapa03

  ;