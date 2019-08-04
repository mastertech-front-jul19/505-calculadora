import React, { Component } from "react";
import HeaderStyle from "./HeaderStyle";

import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header style={HeaderStyle.app}>
                <Link to="/">MasterTools</Link>

                <Link to="/contador">Contador</Link>
            </header>
        )
    }
}

export default Header;