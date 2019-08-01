import React from 'react';
import TempoStyle from './TempoStyle';

class Tempo extends React.Component {
  render() {
    return (
      <div>
        <h1 style={TempoStyle.numero}>{this.props.valor}</h1>
      </div>
    );
  }
}

export default Tempo;
