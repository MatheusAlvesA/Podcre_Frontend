import React, { Component } from 'react';
const $ = window.$;

export default class SetarImagem extends Component {

  constructor(props) {
    super(props);

    this.state = {"url": "/"};

    this.buscarURLUp = this.buscarURLUp.bind(this);
  }

  componentDidMount() {
    this.buscarURLUp();
  }

  buscarURLUp() {
    $.ajax({
             url: "https://podcre-223420.appspot.com/api/setImagemPerfil",
             type: "GET",
             success: (r) => {this.setState({
               "url": r.url
             });},
             error: () => {setTimeout(this.buscarURLUp, 1000);}
          });
  }

  render() {
    return (
      <div className="modal fade" id="setarImagem" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">Atualizar imagem</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="formUpPodcast" action={this.state.url} method="post" encType="multipart/form-data">
                <div className="custom-file">
                  <input type="file" className="custom-file-input" id="arquivoPodcast" name="arquivo" />
                  <label className="custom-file-label" htmlFor="arquivoPodcast">Escolha o arquivo</label>
                </div>
                <div className="modal-footer">
                  <div className="alert alert-danger" style={{"display": "none"}} id="alertaErroCadastro" role="alert">Falha no envio</div>
                  <button type="submit" className="btn btn-primary">Upload</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
