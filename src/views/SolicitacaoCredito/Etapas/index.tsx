import React, { useCallback, useContext, useState } from 'react';
import Etapa01 from './Etapa01';
import Etapa02 from './Etapa02';
import { Container } from './style';
import { Ficha } from '../../../Entities/Ficha';
import EtapaContext, { iEtapa } from './etapaContext';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Etapa03 from './Etapa03';
import Etapa04 from './Etapa04';
import Etapa05 from './Etapa05';
import Etapa06 from './Etapa06';
import Etapa07 from './Etapa07';
import Etapa08 from './Etapa08';
import { ContentEtapas } from '../../../components/Etapas/contentEtapas';

import img_etapa_01 from '../../../assets/solicitacaoCredito/etapa1.png'
import img_etapa_02 from '../../../assets/solicitacaoCredito/email.png'
import img_etapa_03 from '../../../assets/solicitacaoCredito/etapa3.png'
import { FichaService } from '../../../services/fichaService';

import { uid, suid } from 'rand-token';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'
    },
    secondary: {
      main: '#E92A2A',
    },
    error: {
      light: '#e5a0a0',
      main: '#CD5C5C',
      dark: '#992c2c',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff',
      hint: '#ffffff'
    },



  },
  overrides: {
    MuiInput: {

      underline: {
        borderColor: "white",//background color of whole input
        '&:hover:not($disabled):after': {
          borderColor: 'orange',//its when its hover and input is focused
        },
        '&:hover:not($disabled):before': {
          borderColor: 'yellow',//its when you hover and input is not foucused
        },
        '&:after': {
          borderColor: 'blue',//when input is focused, Its just for example. Its better to set this one using primary color
        },
        '&:before': {
          borderColor: 'white!important',// when input is not touched
        },
      },
    },
  },
});


const Etapas: React.FC = () => {

  const _contexto = useContext<iEtapa>(EtapaContext);

  const [_ficha, setFicha] = useState<Ficha>(_contexto.value);

  const atualizar = function (value: Ficha) {
    const newValue: Ficha = Object.assign({}, value);
    newValue.token = uid(12).toString();
    FichaService.Criar(newValue).then(data =>{
      console.log(data);
      setFicha(data);

    });

  };

  const getEtapa = function (index: number) {
    if (index == 1)
      return <Etapa01></Etapa01>;
    if (index == 2)
      return <Etapa02></Etapa02>;
    if (index == 3)
      return <Etapa03></Etapa03>;
    if (index == 4)
      return <Etapa04></Etapa04>;
    if (index == 5)
      return <Etapa05></Etapa05>;
    if (index == 6)
      return <Etapa06></Etapa06>;
    if (index == 7)
      return <Etapa07></Etapa07>;
    if (index == 8)
      return <Etapa08></Etapa08>;
  };
  const getImagem = function (index: number) {
    if (index == 1)
      return img_etapa_01;
    if (index == 2)
      return img_etapa_02;
    if (index == 3)
      return img_etapa_03;
    if (index == 4)
      return img_etapa_03;
    if (index == 5)
      return img_etapa_03;
    if (index == 6)
      return img_etapa_03;
    if (index == 7)
      return img_etapa_03;
    if (index == 8)
      return img_etapa_03;
  };
  return (
    <MuiThemeProvider theme={theme}>
      <EtapaContext.Provider value={{ value: _ficha, Atualizar: atualizar }}>
        <Container id="etapas" >

          <EtapaContext.Consumer>
            {(context) =>
              <ContentEtapas imagem={getImagem(context.value.etapa)}>
                {getEtapa(context.value.etapa)}
              </ContentEtapas>


            }


          </EtapaContext.Consumer>
        </Container>


      </EtapaContext.Provider>
    </MuiThemeProvider>
  );
}

export default Etapas;