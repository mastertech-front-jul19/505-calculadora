import React from 'react';
import AppStyle from './AppStyle';

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
        <Contador />
      </div>
    );
  }
}

export default App;
