import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    let botao = <button className="btn btn-outline-success ml-auto d-block" data-toggle="modal" data-target="#cadastrarModal">Cadastrar</button>;
    if(this.props.logado === true)
      botao = <button className="btn btn-outline-success ml-auto d-block" data-toggle="modal" data-target="#setarImagem">imagem perfil</button>;
    return (
      <nav className="navbar navbar-dark bg-dark">
        <h2 id="tituloNavBar" className="d-none d-md-block">Podcrê<small className="text-muted" id="versionNavbar"> Alpha</small></h2>
        {botao}
      </nav>
    );
  }
}
