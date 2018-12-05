import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    let botao = <button className="btn btn-outline-success ml-auto d-block" data-toggle="modal" data-target="#cadastrarModal">Cadastrar</button>;
    if(this.props.logado === true)
      botao = null;
    return (
      <nav className="navbar navbar-dark bg-dark">
        <h2 id="tituloNavBar">Podcrê<small className="text-muted" id="versionNavbar"> Alpha</small></h2>
        {botao}
      </nav>
    );
  }
}
