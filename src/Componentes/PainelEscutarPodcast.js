import React, { Component } from 'react';

export default class PainelEscutarPodcast extends Component {
  render() {
    return (
      <div className="col-12 painelEscutar">
        <h1>{this.props.nome}</h1>
        <h4>{this.props.assunto}</h4>
      </div>
    );
  }
}
