import React from 'react';
import AppStyle from './AppStyle';
import Contador from './components/Contador/Contador';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div style={AppStyle.app}>
       <Contador/>
      </div>
    );
  }
}

export default App;
