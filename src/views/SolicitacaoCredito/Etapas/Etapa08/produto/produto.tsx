import React, { Component, ReactNode, useCallback, useContext, useState } from 'react';
import Send from '@material-ui/icons/Send';
import { useForm } from "react-hook-form";

import EtapaContext, { iEtapa } from '../../etapaContext';
import { url } from 'inspector';
import { Produto } from '../../../../../Entities/Produto';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Done from '@material-ui/icons/Done';


type Props = {
  produto: Produto,
  selecionado: boolean,
  add_click(value: Produto):void
}




export class ProdutoCard extends Component<Props> {


  render() {
    var sectionStyle = {

      backgroundImage: "url(" + this.props.produto.Imagem + ")"
    };


    return (

      <div className="w-full bg-white max-w-sm mx-auto rounded-md shadow-lg overflow-hidden ">
        <div className="flex items-end justify-end h-56 w-full bg-cover"   style={sectionStyle}   >

          <button className="p-2 rounded-full bg-blue-600 text-white mx-2 -mb-3 hover:bg-blue-500 focus:outline-none focus:bg-blue-500" onClick={()=> this.props.add_click(this.props.produto)}>
            {
              this.props.selecionado ? <Done /> : <AddShoppingCart />
            }
          </button>
        </div>
        <div className="px-5 py-3">
          <h3 className="text-gray-700 uppercase">{this.props.produto?.Nome}</h3>
          <span className="text-gray-500 mt-2">{this.props.produto?.Valor}</span>
        </div>
      </div>

    );
  }
};
