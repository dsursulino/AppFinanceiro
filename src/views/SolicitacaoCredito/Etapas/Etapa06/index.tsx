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


const Etapa06: React.FC = () => {

  const _contexto = useContext<iEtapa>(EtapaContext);
  const [_endereco, setEndereco] = useState<Endereco>(_contexto.value.endereco);
  const { setValue, register, handleSubmit, errors, reset } = useForm<Endereco>();
  const onSubmit = (data: Endereco) => {
    _contexto.value.endereco = Object.assign(_contexto.value.endereco, data);
    _contexto.value.etapa = 7;
    _contexto.Atualizar(_contexto.value);
  };

  useEffect(() => {

    CepService.buscarEndereco(_contexto.value.cep.replace('-', ''))
      .then(data => {

        _contexto.value.endereco = data;
        reset(data);
        setEndereco(_contexto.value.endereco);
        setValue("logradouro", _contexto.value.endereco.logradouro);
        setValue("localidade", _contexto.value.endereco.localidade);
        setValue("uf", _contexto.value.endereco.uf);
        setValue("numero", _contexto.value.endereco.numero);

      })
      .catch(erro => {
        alert(erro);
        console.error(erro);

      });

  }, [_contexto, reset]);


  return (

    <Container className="h-full">



      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 gap-1 justify-items-center">
          <div className="sub-titulo antialiased text-2xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl">{_contexto.value.nome} muito bom, agora complete seu endereço.</div>
          <div className="form w-full sm:w-auto md:w-full lg:w-32 xl:w-3/4">

            <div className="grid gap-4 justify-items-auto  grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
              <div className=" flex ">
                <TextField placeholder="Logradouro"

                  inputRef={register({
                    required: "Obrigatório."
                  })}

                  name="logradouro"
                  label="Endereço"
                  className="w-full"
                  defaultValue={_endereco?.logradouro}
                  InputLabelProps={{ shrink: true }}
                  helperText={errors.logradouro && errors.logradouro.message}
                />
              </div>
              <div className=" flex">
                <TextField placeholder="Número"
                  inputRef={register({
                    required: "Obrigatório."
                  })}
                  name="numero"
                  label="Número"
                  className="w-full"
                  defaultValue={_endereco?.numero}
                  helperText={errors.numero && errors.numero.message}
                />

              </div>
              <div className=" flex">  <TextField placeholder="Cidade"
                inputRef={register({
                  required: "Obrigatório."
                })}
                name="localidade"
                label="Cidade"
                className="w-full"
                defaultValue={_endereco?.localidade}
                InputLabelProps={{ shrink: true }}
                helperText={errors.localidade && errors.localidade.message}
              />
              </div>
              <div className=" flex">  <TextField placeholder="UF"
                    inputRef={register({
                      required: "Obrigatório."
                    })}
                    name="uf"
                    label="UF"
                    className="w-full"
                    defaultValue={_endereco?.uf}
                    InputLabelProps={{ shrink: true }}
                    helperText={errors.uf && errors.uf.message}
                  /></div>
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

export default Etapa06
  ;