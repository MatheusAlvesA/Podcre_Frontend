import React, { Component } from 'react';
import Navbar from './Componentes/Navbar.js';
import LoginBar from './Componentes/LoginBar.js';
import PainelLogado from './Componentes/PainelLogado.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      "nomeUser": ""
    };

    this.logado = this.logado.bind(this);
    this.deslogado = this.deslogado.bind(this);
  }

  logado(nome) {
    console.log(nome);
    this.setState({"nomeUser": nome});
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
          <PainelLogado nomeUser={this.state.nomeUser} />
        </div>
      </div>
    );
  }
}

export default App;
