import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import Send from '@material-ui/icons/Send';
import { useForm } from "react-hook-form";
import MaskedInput from 'react-text-mask'

import { Container } from './style';

import img_etapa from '../../../../assets/solicitacaoCredito/etapa3.png'
import EtapaContext, { iEtapa } from '../etapaContext';
import { Ficha } from '../../../../Entities/Ficha';
import { TextField } from '@material-ui/core';

function CEPMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}

    />
  );
}

const Etapa05: React.FC = () => {

  const _contexto = useContext<iEtapa>(EtapaContext);

  const { register, handleSubmit, watch, errors } = useForm<Ficha>();
  const onSubmit = (data: Ficha) => {
    _contexto.value = Object.assign(_contexto.value, data);
    _contexto.value.etapa = 6;
    _contexto.Atualizar(_contexto.value);
  };


  return (

    <Container className="h-full">


      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 gap-1 justify-items-center">
        <div className="sub-titulo antialiased text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">{_contexto.value.nome}, agora informe seu CEP</div>
          <div className="form  md: w-2/4">
            <div className="w-full flex-col ">
            <TextField placeholder="Informe seu CEP" inputProps={{ 'aria-label': 'description' }}
                    inputRef={register({
                      required: "Obrigatório.",
                      pattern: {
                        value: /[0-9]{5}-[\d]{3}/,
                        message: "CEP inválido."
                      }
                    })}
                    name="CEP"
                    className="w-full"

                    InputProps={{
                      inputComponent: CEPMaskCustom,
                    }}

                    defaultValue={_contexto.value.cep}
                    helperText={errors.cep && errors.cep.message}
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

export default Etapa05
  ;