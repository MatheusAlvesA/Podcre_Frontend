import React, { Component } from 'react';
const $ = window.$;

export default class SmallFormLogin extends Component {

  constructor() {
    super();

    this.state = {
      "nome": "",
      "senha": ""
    };
  }

  submeter() {
    $.ajax({
             url: "https://podcre-223420.appspot.com/api/Login",
             data: JSON.stringify(this.state),
             type: "POST",
             success: this.sucesso.bind(this),
             error: this.erro.bind(this)
          });
  }

  sucesso(r) {
    if(this.props.callbackSucesso !== undefined && this.props.callbackSucesso !== null)
      this.props.callbackSucesso(this.state.nome);
  }

  erro(r) {
    $("#mensagemErro").css("display", "block");
    setTimeout(()=>{$("#mensagemErro").css("display", "none");}, 2000);

    if(this.props.callbackErro !== undefined && this.props.callbackErro !== null)
      this.props.callbackErro(r);
  }

  watcher() {
    this.setState({"nome": $("#inputNome").val()});
    this.setState({"senha": $("#inputSenha").val()});
  }

  render() {
    return (
      <div>
        <br />
        <form id="formLogin">
          <div className="form-group">
              <label htmlFor="inputNome">Login</label>
              <input type="text" onChange={this.watcher.bind(this)} className="form-control" id="inputNome" placeholder="Nome de usuário" />
          </div>
          <div className="form-group">
            <label htmlFor="inputSenha">Senha</label>
            <input type="password" onChange={this.watcher.bind(this)} className="form-control" id="inputSenha" placeholder="Senha" />
          </div>
        </form>
        <div className="row">
          <button onClick={this.submeter.bind(this)} className="btn btn-primary offset-6 col-5">Logar</button>
        </div>
        <div className="row" id="mensagemErro" style={{"display": "none", "marginTop": "5px"}}>
          <div className="alert alert-danger col-10 offset-1" role="alert">Falha no login</div>
        </div>
      </div>
    );
  }
}
