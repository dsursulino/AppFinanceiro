import React from 'react';
import Head from 'next/head';
import Header from '../src/components/Header';
import Etapas from '../src/views/SolicitacaoCredito/Etapas';

const SolicitacaoCredito: React.FC = () => {
  return (
    <>
      <Head>
        <title>TMB Service Education</title>
      </Head>

        <Header></Header>
        <Etapas></Etapas>

    </>

  );
}

export default SolicitacaoCredito;