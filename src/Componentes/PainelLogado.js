import React, { Component } from 'react';
import InfosUser from './InfosUser.js';
import PainelUparPodcast from './PainelUparPodcast.js';
const $ = window.$;

export default class PainelLogado extends Component {

  constructor(props) {
    super(props);

    this.state = {
      "nome": "",
      "email": ""
    };

    this.buscarDados = this.buscarDados.bind(this);
  }


componentDidMount() {
  this.buscarDados();
}

  buscarDados() {
    $.ajax({
             url: "https://podcre-223420.appspot.com/api/user?nome="+this.props.nomeUser,
             type: "GET",
             success: (r) => {this.setState({
               "nome": r.data.nome_display,
               "email": r.data.email
             });},
             error: () => {setTimeout(this.buscarDados, 1000);}
          });
  }


  render() {
    return (
      <div id="painelLogado" className="col-md-8">
        <InfosUser nomeUser={this.state.nome} email={this.state.email}/>
        <PainelUparPodcast nomeUser={this.state.nome} email={this.state.email}/>
      </div>
    );
  }
}
