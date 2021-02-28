import React, { Component } from "react";
//import './../../App.css'

import './Contato.css'

class Contato extends Component {
  render() {
    return (
      <div className="Form">
        <h1>Contato</h1>
        <div className="MainForm">
        <img className="img" src="https://bonsdrinks.netlify.app/static/media/contact-pic.689e126c.jpg" alt="contato"></img>
          <form className="Inputs">
            <label htmlFor="name">Nome:</label>
            <input name="name" type="text" />

            <label htmlFor="email">E-mail:</label>
            <input name="email" type="text" />

            <label htmlFor="message">Mensagem:</label>
            <textarea name="message" rows="10" />

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Contato;