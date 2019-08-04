import React, { Component } from 'react';

import './Visor.css';

class Visor extends Component {
    render() {
        return (
            <div className='Visor'>
                <p>{this.props.valor}</p>
            </div>
        );
    }
}

export default Visor;