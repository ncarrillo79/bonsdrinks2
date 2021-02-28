import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="Menu">
          <nav className="NavMenu">
            <ul>
              <li>Drinks</li>
              <li>Sobre nós</li>
              <li className="Header-logo">Bons Drinks</li>
              <li>Noso time</li>
              <li>Contato</li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
