import React, { Component } from 'react';

import './BotaoCalculadora.css';

class BotaoCalculadora extends Component {
    aoClicar = () => {
        this.props.aoClicar(this.props.valor);
    }

    render() {
        return (
            <button className='BotaoCalculadora' onClick={this.aoClicar} >
                {this.props.valor}
            </button>
        );
    }
}

export default BotaoCalculadora;