import React, { Component } from 'react';
const $ = window.$;

export default class SmallPainelLogin extends Component {

  constructor(props) {
    super(props);

    this.state = {
      "nome": "Carregando...",
      "urlImg": ""
    };

    this.getDados();
  }

  logout() {
    $.ajax({
             url: "https://podcre-223420.appspot.com/api/Login",
             type: "DELETE",
             success: this.props.callbackLogout,
             error: () => {}
          });
  }

  getDados() {
    $.ajax({
             url: "https://podcre-223420.appspot.com/api/user?nome="+this.props.nome,
             type: "GET",
             headers: { 'token-id': 'frontend_podcre' },
             success: this.preencher.bind(this),
             error: () => {}
          });
  }

  preencher(dados) {
    dados = dados.data;
    this.setState({"nome": this.props.nome});
    this.setState({"urlImg": "https://podcre-223420.appspot.com/api/getFile?cod="+dados.imagem_blob});
  }

  render() {
    return (
      <div style={{"marginTop": "10px"}}>
        <img src={this.state.urlImg} style={{"width": "50%", "cursor": "pointer"}} className="img-thumbnail" alt="Imagem de perfil" data-toggle="modal" data-target="#setarImagem" />
        <h4>{this.state.nome}</h4>
        <div className="row">
          <button onClick={this.logout.bind(this)} className="btn btn-outline-danger offset-6 col-5">Logout</button>
        </div>
      </div>
    );
  }
}
