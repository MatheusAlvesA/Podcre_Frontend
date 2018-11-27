import React, { Component } from 'react';
const $ = window.$;

export default class CriarConta extends Component {

  registrar() {
    const dados = {
    	"nome": $("#nomeUser").val(),
    	"display": $("#nomeDisplay").val(),
    	"email": $("#emailUser").val(),
    	"senha": $("#senhaUser").val()
    };
    $.ajax({
             url: "https://podcre-223420.appspot.com/api/user",
             type: "POST",
             data: JSON.stringify(dados),
             success: (r) => {window.location.reload();},
             error: () => {
               $("#alertaErroCadastro").css("display", "block");
               setTimeout(()=>{$("#alertaErroCadastro").css("display", "none");}, 2000);
             }
          });
  }

  render() {
    return (
      <div className="modal fade" id="cadastrarModal" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">Cadastrar-se</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="formUpPodcast">
                <div className="form-group">
                  <label htmlFor="nomeUser">Nome de usuário</label>
                  <input type="text" className="form-control" id="nomeUser" placeholder="Nome" />
                </div>
                <div className="form-group">
                  <label htmlFor="nomeDisplay">Nome de display</label>
                  <input type="text" className="form-control" id="nomeDisplay" placeholder="Display" />
                </div>
                <div className="form-group">
                  <label htmlFor="senhaUser">Senha</label>
                  <input type="password" className="form-control" id="senhaUser" placeholder="Escolha uma senha" />
                </div>
                <div className="form-group">
                  <label htmlFor="emailUser">E-Mail</label>
                  <input type="text" className="form-control" id="emailUser" placeholder="email" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <div className="alert alert-danger" style={{"display": "none"}} id="alertaErroCadastro" role="alert">Falha no cadastro</div>
              <button type="button" onClick={this.registrar.bind(this)} className="btn btn-primary">Cadastrar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
