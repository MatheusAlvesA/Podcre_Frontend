import React, { Component } from 'react';
import Navbar from './Componentes/Navbar.js';
import LoginBar from './Componentes/LoginBar.js';
import PainelLogado from './Componentes/PainelLogado.js';
import PainelDeslogado from './Componentes/PainelDeslogado.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      "estaLogado": false,
      "nomeUser": ""
    };

    this.logado = this.logado.bind(this);
    this.deslogado = this.deslogado.bind(this);
  }

  logado(nome) {
    this.setState({"nomeUser": nome});
    this.setState({"estaLogado": true});
  }

  deslogado() {
    this.setState({"estaLogado": false});
  }

  render() {
    let painel = <PainelDeslogado nomeUser="jovemnerd" />
    if(this.state.estaLogado)
      painel = <PainelLogado nomeUser={this.state.nomeUser} />
    return (
      <div>
        <Navbar />
        <div className="row" id="corpo">
          <LoginBar callbackLogado={this.logado} callbackDeslogado={this.deslogado} />
          {painel}
        </div>
      </div>
    );
  }
}

export default App;
