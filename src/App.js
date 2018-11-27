import React, { Component } from 'react';
import Navbar from './Componentes/Navbar.js';
import LoginBar from './Componentes/LoginBar.js';
import PainelLogado from './Componentes/PainelLogado.js';
import PainelDeslogado from './Componentes/PainelDeslogado.js';
import CriarConta from './Componentes/CriarConta.js';
const $ = window.$;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      "estaLogado": false,
      "nomeUser": "",
      "listaNomes": []
    };

    this.logado = this.logado.bind(this);
    this.deslogado = this.deslogado.bind(this);
    this.preencherLista = this.preencherLista.bind(this);
  }

  componentDidMount() {
    this.preencherLista();
  }

  preencherLista() {
    $.ajax({
             url: "https://podcre-223420.appspot.com/api/Estatisticas/listaNomes",
             type: "GET",
             success: (r) => {
               const lista = r.data;
               this.setState({"listaNomes": lista});
               this.forceUpdate();
             },
             error: () => {}
    });
  }

  logado(nome) {
    this.setState({"nomeUser": nome});
    this.setState({"estaLogado": true});
  }

  deslogado() {
    this.setState({"estaLogado": false});
  }

  render() {
    let painel = null;
    if(this.state.estaLogado)
      painel = <PainelLogado nomeUser={this.state.nomeUser} />;
    else
      painel = <PainelDeslogado listaNomes={this.state.listaNomes} />;

    return (
      <div>
        <Navbar />
        <div className="row" id="corpo">
          <LoginBar callbackLogado={this.logado} callbackDeslogado={this.deslogado} />
          {painel}
        </div>
        <CriarConta CallbackLogado={this.logado} />
      </div>
    );
  }
}

export default App;
