import React, { Component } from 'react';

import './Calculadora.css';

import Visor from './Visor/Visor';
import BotaoCalculadora from './BotaoCalculadora/BotaoCalculadora';

class Calculadora extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            visor: ' ',
            primeiroNumero: 0,
            segundoNumero: 0,
            operacao: ''
        }
    }
    
    atualizarVisor = (valor) => {
        this.setState({visor: valor});
    }
    
    cliqueBotaoNumerico = (valor) => {
        let novoEstado = this.state;
        
        if (!this.state.operacao) {
            novoEstado.primeiroNumero = valor;
        }
        else {
            novoEstado.segundoNumero = valor;
        }
        
        this.setState(novoEstado);
        this.atualizarVisor(valor);
    }
    
    cliqueBotaoFuncao = (valor) => {
        this.setState({operacao: valor});
        this.atualizarVisor(valor);
    }
    
    executar = () => {
        const { primeiroNumero, segundoNumero, operacao } = this.state;
        let resultado = 0;
        
        if (operacao === '+') {
            resultado = primeiroNumero + segundoNumero;
        }
        else if (operacao === '-') {
            resultado = primeiroNumero - segundoNumero;
        }
        else if (operacao === 'x') {
            resultado = primeiroNumero * segundoNumero;
        }
        else if (operacao === '÷') {
            resultado = primeiroNumero / segundoNumero;
        }
        
        this.atualizarVisor(resultado);
        this.setState({
            primeiroNumero: 0,
            segundoNumero: 0,
            operacao: ''
        })
    }
    
    gerarBotoesNumericos = () => {
        let botoes = [];
        
        for (let i = 9; i >= 0; i --) {
            botoes.push(<BotaoCalculadora valor={i} aoClicar={this.cliqueBotaoNumerico} />);
        }
        
        return botoes;
    }
    
    render() {
        return (
            <section className='Calculadora'>
            <Visor valor={this.state.visor} />
            <section className='botoes'>
                <div className='input'>
                    {this.gerarBotoesNumericos()}
                </div>
                <div className='funcao'>
                    <BotaoCalculadora valor={'+'} aoClicar={this.cliqueBotaoFuncao} />
                    <BotaoCalculadora valor={'-'} aoClicar={this.cliqueBotaoFuncao} />
                    <BotaoCalculadora valor={'x'} aoClicar={this.cliqueBotaoFuncao} />
                    <BotaoCalculadora valor={'÷'} aoClicar={this.cliqueBotaoFuncao} />
                    <BotaoCalculadora valor={'='} aoClicar={this.executar} />
                </div>
            </section>
            </section>
            );
        }
    }
    
    export default Calculadora;