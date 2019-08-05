import React from 'react';
import AppStyle from './AppStyle';

import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Contador from './components/Contador/Contador';
import Calculadora from './components/Calculadora/Calculadora';

class App extends React.Component {
  render() {
    return (
      <div style={AppStyle.app}>
        <Header />

        <Switch>
          <Route path='/contador' component={Contador}/>
          <Route path='/calculadora' component={Calculadora}/>
        </Switch>
      </div>
    );
  }
}

export default App;
