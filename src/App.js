import React, { Component } from 'react';
import Navbar from './Componentes/Navbar.js';
import LoginBar from './Componentes/LoginBar.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.logado = this.logado.bind(this);
    this.deslogado = this.deslogado.bind(this);
  }

  logado(nome) {
    console.log(nome);
  }

  deslogado() {
    console.log("[DESLOGADO]");
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="row" id="corpo">
          <LoginBar callbackLogado={this.logado} callbackDeslogado={this.deslogado} />
        </div>
      </div>
    );
  }
}

export default App;
