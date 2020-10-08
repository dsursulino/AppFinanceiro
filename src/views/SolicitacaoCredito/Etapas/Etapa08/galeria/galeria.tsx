import React, { useCallback, useContext, useEffect, useState } from 'react';
import Send from '@material-ui/icons/Send';
import { useForm } from "react-hook-form";

import EtapaContext, { iEtapa } from '../../etapaContext';
import { url } from 'inspector';
import { GaleriaDiv } from './galeria.style';
import { ProdutoCard } from '../produto/produto';
import { Produto } from '../../../../../Entities/Produto';
import { ProdutoService } from '../../../../../services/produtoService';
import { useEventCallback } from '@material-ui/core';
import { TrendingUpRounded } from '@material-ui/icons';



const Galeria: React.FC = () => {
  const _contexto = useContext<iEtapa>(EtapaContext);
  let [listProdutos, setListProdutos] = useState<Produto[]>(new Array());

  const add_click = function (produto: Produto) {

    const _produto = listProdutos.find(t=> t.id = produto.id);

    _produto.Selecionado = true;

    alert('Produto Adicionado');

    const newValue: Produto[] = Object.assign({}, listProdutos);
    setListProdutos(_contexto.produtos);

  };

  const getListaProdutos = function () {

    let _listProdutos = listProdutos.map(value => {

      return <ProdutoCard key={value.id} produto={value} selecionado={value.Selecionado} add_click={add_click} ></ProdutoCard>;
    });

    return _listProdutos;
  }
  useEffect(() => {
    console.log('chamou');
    ProdutoService.listarProdutos()
      .then(data => {

        let produtos = data.map(value => {
          let produto = new Produto();
          produto.id = value.id;
          produto.Nome = value.name;
          produto.Valor = value.price;
          produto.Imagem = value.image_link;
          return produto;
        });


        _contexto.produtos = produtos;

        setListProdutos(produtos);

      })
      .catch(error => { });
  }, [_contexto, listProdutos]);



  return (


    <GaleriaDiv className="w-full">
      <h3 className="text-gray-600 text-2xl font-medium">Produtos</h3>
      <div id="containerProdutos" className="containerProdutos  overflow-auto">
        <div className=" grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-6 p-4">

          {getListaProdutos()}

        </div>
      </div>
    </GaleriaDiv>

  );
}

export default Galeria;