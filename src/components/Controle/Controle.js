import React from 'react';
import ControleStyle from './ControleStyle';

import Botao from '../Botao/Botao';

class Controle extends React.Component {
  render() {
    return (
      <div>
        <Botao clique={this.props.menos} texto="-" />
        <Botao clique={this.props.start} texto="Start" />
        <Botao clique={this.props.zerar} texto="Reset" />
        <Botao clique={this.props.mais} texto="+" />
      </div>
    );
  }
}

export default Controle;
