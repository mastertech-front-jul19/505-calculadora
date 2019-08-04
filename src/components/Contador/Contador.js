import React, {Component} from "react";
import ContadorStyle from "./ContadorStyle";

import Tempo from './Tempo/Tempo';
import Controle from './Controle/Controle';

class Contador extends Component {
    constructor(props){
        super(props);
        this.state = {
          tempo: 0,
          contando: false
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
        this.setState({
          contando: true
        });
      }
    
      pararContador = () => {
        clearInterval(this.intervalo);
        this.intervalo = null;
        this.setState({
          contando: false
        });
      }
    
      render() {
        let funcoes = {
          start: this.state.contando ? this.pararContador : this.start,
          zerar: this.zerar,
          mais: this.state.contando ? null : this.incrementar,
          menos: this.state.contando ? null : this.decrementar
        };
    
        return (
          <div style={ContadorStyle.app}>
            <Tempo valor={this.state.tempo}/>
            <Controle 
              {...funcoes}
              contando={this.state.contando}
            />
          </div>
        );
      }
}

export default Contador;