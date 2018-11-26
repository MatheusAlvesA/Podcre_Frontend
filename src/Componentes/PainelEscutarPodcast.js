import React, { Component } from 'react';
const audiojs = window.audiojs;
const $ = window.$;

export default class PainelEscutarPodcast extends Component {

  componentDidMount() {
    audiojs.events.ready(function() {
      audiojs.createAll();
    });
  }

  likeDado() {
    $("#like_"+this.props.chave).removeClass("fa-thumbs-o-up");
    $("#like_"+this.props.chave).addClass("fa-thumbs-up");
    this.submeterLike();
  }

  dislikeDado() {
    $("#dislike_"+this.props.chave).removeClass("fa-thumbs-o-down");
    $("#dislike_"+this.props.chave).addClass("fa-thumbs-down");
    this.submeterDislike();
  }

  render() {
    return (
      <div className="col-12 painelEscutar">
        <h1>{this.props.nome}</h1>
        <p className="text-muted">{this.props.assunto}</p>
        <audio src={"https://podcre-223420.appspot.com/api/getFile?cod="+this.props.blob} preload="auto" />
        <span id={"like_"+this.props.chave} onClick={this.likeDado.bind(this)} className="fa fa-thumbs-o-up" aria-hidden="true" style={{"position": "absolute", "left": "500px", "bottom": "10px", "cursor": "pointer"}}> {this.props.likes}</span>
        <span id={"dislike_"+this.props.chave} onClick={this.dislikeDado.bind(this)} className="fa fa-thumbs-o-down" aria-hidden="true" style={{"position": "absolute", "left": "550px", "bottom": "10px", "cursor": "pointer"}}> {this.props.dislikes}</span>
      </div>
    );
  }

  submeterLike() {
    $.ajax({
             url: "https://podcre-223420.appspot.com/api/contar?qual=like&cod="+this.props.chave,
             type: "GET",
             success: () => {},
             error: () => {}
          });
  }

  submeterDislike() {
    $.ajax({
             url: "https://podcre-223420.appspot.com/api/contar?qual=dislike&cod="+this.props.chave,
             type: "GET",
             success: () => {},
             error: () => {}
          });
  }
}
