import React from 'react';
import AppStyle from './AppStyle';

import Tempo from './components/Tempo/Tempo';
import Controle from './components/Controle/Controle';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tempo: 0
    };
    this.intervalo = null;
  }

  incrementar = () => {
    this.setState({
      tempo: this.state.tempo + 1
    });
  }

  decrementar = () => {
    if(this.state.tempo > 0){
      this.setState({
        tempo: this.state.tempo - 1
      });
    }
    else{
      this.pararContador();
    }
  }

  zerar = () => {
    this.pararContador();
    this.setState({
      tempo: 0
    });
  }

  start = () => {
    if(!this.intervalo){
      this.intervalo = setInterval(this.decrementar, 1000);
    }
  }

  pararContador = () => {
    clearInterval(this.intervalo);
    this.intervalo = null;
  }

  render() {
    return (
      <div style={AppStyle.app}>
        <Tempo valor={this.state.tempo}/>
        <Controle start={this.start} zerar={this.zerar} mais={this.incrementar} menos={this.decrementar} />
      </div>
    );
  }
}

export default App;
