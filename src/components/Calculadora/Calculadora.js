import React, { Component } from 'react';

import './Calculadora.css';

import Visor from './Visor/Visor';
import BotaoCalculadora from './BotaoCalculadora/BotaoCalculadora';

class Calculadora extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            visor: ' ',
            primeiroNumero: '',
            segundoNumero: '',
            operacao: ''
        }
    }
    
    atualizarVisor = (valor) => {
        this.setState({visor: valor});
    }
    
    cliqueBotaoNumerico = (valor) => {
        let novoEstado = this.state;
        
        if (!novoEstado.operacao) {
            if (novoEstado.primeiroNumero.includes('.') && valor === '.') {
                valor = '';
            }
            novoEstado.primeiroNumero += valor;
            novoEstado.visor = novoEstado.primeiroNumero;        
        }
        else {
            if (novoEstado.segundoNumero.includes('.') && valor === '.') {
                valor = '';
            }
            novoEstado.segundoNumero += valor;
            novoEstado.visor = novoEstado.segundoNumero;        
        }
        
        this.setState(novoEstado);
    }
    
    cliqueBotaoFuncao = (valor) => {
        this.setState({operacao: valor});
        this.atualizarVisor(valor);
    }
    
    executar = () => {
        const { operacao } = this.state;
        const primeiroNumero = Number(this.state.primeiroNumero);
        const segundoNumero = Number(this.state.segundoNumero);
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
            primeiroNumero: resultado,
            segundoNumero: '',
            operacao: ''
        });
    }
    
    gerarBotoesNumericos = () => {
        let botoes = [];
        
        for (let i = 9; i >= 0; i --) {
            botoes.push(
                <BotaoCalculadora valor={String(i)} aoClicar={this.cliqueBotaoNumerico} />
            );
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
                    <BotaoCalculadora valor={'.'} aoClicar={this.cliqueBotaoNumerico} />
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