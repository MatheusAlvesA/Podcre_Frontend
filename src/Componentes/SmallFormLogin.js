import React, { Component } from 'react';

export default class SmallFormLogin extends Component {
  render() {
    return (
      <div>
        <br />
        <form id="formLogin">
          <div className="form-group">
              <label htmlFor="inputEmail">Login</label>
              <input type="text" className="form-control" id="inputEmail" placeholder="Nome de usuário" />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Senha</label>
            <input type="password" className="form-control" id="inputSenha" placeholder="Senha" />
          </div>
        </form>
        <div className="row">
          <button className="btn btn-primary offset-6 col-5">Logar</button>
        </div>
      </div>
    );
  }
}
