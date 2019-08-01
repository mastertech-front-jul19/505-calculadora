import React from 'react';
import ControleStyle from './ControleStyle';

import Botao from '../Botao/Botao';

class Controle extends React.Component {
  render() {
    return (
      <div>
        <Botao />
        <Botao />
        <Botao />
        <Botao />
      </div>
    );
  }
}

export default Controle;
