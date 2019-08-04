import React, { Component } from "react";
import HeaderStyle from "./HeaderStyle";

class Header extends Component {
    render() {
        return (
            <header style={HeaderStyle.app}>
                <h2>MasterTools</h2>
            </header>
        )
    }
}

export default Header;