import React from 'react';
import BotaoStyle from './BotaoStyle';

class Botao extends React.Component {
  render() {
    return (
      <button style={BotaoStyle.botao}>TEXTO</button>
    );
  }
}

export default Botao;
