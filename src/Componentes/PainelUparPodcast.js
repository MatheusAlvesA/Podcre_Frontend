import React, { Component } from 'react';
const $ = window.$;

export default class PainelUparPodcast extends Component {

  toggle() {
    if($("#formUpPodcast").css("display") === "none")
      $("#formUpPodcast").css("display", "block");
    else
      $("#formUpPodcast").css("display", "none");
  }

  render() {
    return (
      <div id="upPodcast">
        <div className="row">
          <div className="col-9">
            <h3>Faça upload de um episódio:</h3>
          </div>
          <div className="col-3">
            <button onClick={this.toggle} type="button" className="btn btn-outline-info">Upload</button>
          </div>
        </div>
        <form id="formUpPodcast" style={{"display": "none"}}>
          <div className="form-group">
            <label htmlFor="nomePodcast">Nome do episódio</label>
            <input type="text" className="form-control" id="nomePodcast" placeholder="Nome" />
          </div>
          <div className="form-group">
            <label htmlFor="assuntoPodcast">Assunto do episódio</label>
            <input type="text" className="form-control" id="assuntoPodcast" placeholder="Assunto" />
          </div>
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="arquivoPodcast" name="arquivo" />
            <label className="custom-file-label" htmlFor="arquivoPodcast">Escolha o arquivo</label>
          </div>
          <div style={{"width": "100%", "marginTop": "10px"}}>
            <input type="submit" className="btn btn-success ml-auto d-block" value="enviar" />
          </div>
        </form>
      </div>
    );
  }
}
