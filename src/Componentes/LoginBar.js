import React, { Component } from 'react';
import SmallFormLogin from './SmallFormLogin.js';
import SmallPainelLogin from './SmallPainelLogin.js';
const $ = window.$;

export default class LoginBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      "logado": false,
      "nome": ""
    };

    this.setLogado = this.setLogado.bind(this);
    this.checarLogado = this.checarLogado.bind(this);

  }

  componentDidMount() {
    this.checarLogado();
  }

  loginFeito(nome) {
    this.setState({"nome": nome});
    this.setLogado(true);
  }

  checarLogado() {
    $.ajax({
             url: "https://podcre-223420.appspot.com/api/Login",
             type: "GET",
             success: (r) => {this.setState({"nome": r.nome});this.setLogado(true);},
             error: (r) => {this.setLogado(false);}
          });
  }

  setLogado(esta) {
    if(esta) {
      this.setState({"logado": true});
      if(this.props.callbackLogado !== undefined && this.props.callbackLogado !== null)
        this.props.callbackLogado(this.state.nome);
    }
    else {
      this.setState({"logado": false});
      if(this.props.callbackDeslogado !== undefined && this.props.callbackDeslogado !== null)
        this.props.callbackDeslogado();
    }
  }

  render() {

    let seletor = <SmallFormLogin callbackSucesso={this.loginFeito.bind(this)} />;
    if(this.state.logado) seletor = <SmallPainelLogin nome="jovemnerd" callbackLogout={() => {this.setLogado(false);}} />;

    return (
      <div id="barraLogin" className="col-md-2">
        {seletor}
      </div>
    );
  }
}
