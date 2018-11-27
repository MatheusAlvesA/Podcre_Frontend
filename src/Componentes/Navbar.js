import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <h2 id="tituloNavBar" className="d-none d-md-block">Podcrê<small className="text-muted" id="versionNavbar"> Alpha</small></h2>
        <button className="btn btn-outline-success ml-auto d-block" data-toggle="modal" data-target="#cadastrarModal">Cadastrar</button>
      </nav>
    );
  }
}
