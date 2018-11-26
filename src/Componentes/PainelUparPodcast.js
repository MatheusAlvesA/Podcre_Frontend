import React, { Component } from 'react';
const $ = window.$;

export default class PainelUparPodcast extends Component {

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
             url: "https://podcre-223420.appspot.com/api/upPodcast",
             type: "GET",
             success: (r) => {this.setState({
               "url": r.url
             });},
             error: () => {setTimeout(this.buscarURLUp, 1000);}
          });
  }

  toggle() {
    if($("#formUpPodcast").css("display") === "none")
      $("#formUpPodcast").css("display", "block");
    else
      $("#formUpPodcast").css("display", "none");
  }

  setNome() {
    let nome = $("#nomePodcast").val();
    this.setCookie("nome", nome);
  }

  setAssunto() {
    let assunto = $("#assuntoPodcast").val();
    this.setCookie("assunto", assunto);
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
        <form id="formUpPodcast" style={{"display": "none"}} action={this.state.url} method="post" encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="nomePodcast">Nome do episódio</label>
            <input type="text" onChange={this.setNome.bind(this)} className="form-control" id="nomePodcast" placeholder="Nome" />
          </div>
          <div className="form-group">
            <label htmlFor="assuntoPodcast">Assunto do episódio</label>
            <input type="text" onChange={this.setAssunto.bind(this)} className="form-control" id="assuntoPodcast" placeholder="Assunto" />
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

  setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (30*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
  }

  getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)===' ') c = c.substring(1);
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }
}
