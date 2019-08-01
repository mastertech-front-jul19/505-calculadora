import React from 'react';
import TempoStyle from './TempoStyle';

class Tempo extends React.Component {
  render() {
    return (
      <div>
        <h1 style={TempoStyle.numero}>00</h1>
      </div>
    );
  }
}

export default Tempo;
