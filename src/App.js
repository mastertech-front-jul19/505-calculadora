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
  }

  incrementar = () => {
    this.setState({
      tempo: this.state.tempo + 1
    });
  }

  decrementar = () => {
    this.setState({
      tempo: this.state.tempo - 1
    });
  }

  render() {
    return (
      <div style={AppStyle.app}>
        <Tempo valor={this.state.tempo}/>
        <Controle mais={this.incrementar} menos={this.decrementar} />
      </div>
    );
  }
}

export default App;
