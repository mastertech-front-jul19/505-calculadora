import React from 'react';
import ControleStyle from './ControleStyle';

import Botao from '../Botao/Botao';

class Controle extends React.Component {
  render() {
    return (
      <div>
        <Botao texto="-" />
        <Botao texto="Start" />
        <Botao texto="Reset" />
        <Botao texto="+" />
      </div>
    );
  }
}

export default Controle;
