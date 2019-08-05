import React, { Component } from "react";
import HeaderStyle from "./HeaderStyle";

import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header style={HeaderStyle.app}>
                <Link to="/" style={HeaderStyle.link}>MasterTools</Link>

                <div style={HeaderStyle.navigationDiv}>
                    <Link to="/contador" style={HeaderStyle.link}>Contador</Link>
                    <Link to="/calculadora" style={HeaderStyle.link}>Calculadora</Link>
                </div>
            </header>
        )
    }
}

export default Header;