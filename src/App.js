import React from 'react';
import AppStyle from './AppStyle';

import { Switch, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Contador from './components/Contador/Contador';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={AppStyle.app}>
        <Header />

        <Switch>
          <Route path="/contador" component={Contador}/>
        </Switch>
      </div>
    );
  }
}

export default App;
