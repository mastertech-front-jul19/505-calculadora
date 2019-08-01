import React from 'react';
import AppStyle from './AppStyle';

import Tempo from './components/Tempo/Tempo';
import Controle from './components/Controle/Controle';


class App extends React.Component {
  render() {
    return (
      <div style={AppStyle.app}>
        <Tempo />
        <Controle />
      </div>
    );
  }
}

export default App;
