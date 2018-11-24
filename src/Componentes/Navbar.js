import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <h2 id="tituloNavBar" className="d-none d-md-block">Podcrê<small className="text-muted" id="versionNavbar"> Alpha</small></h2>
      </nav>
    );
  }
}
