import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
const $ = window.$;

export default class PainelEscutarPodcast extends Component {

  constructor(props) {
    super(props);

    this.state = {
      "likeDado": false,
      "dislikeDado": false
    };

    this.likeDado = this.likeDado.bind(this);
    this.dislikeDado = this.dislikeDado.bind(this);
    this.enviarGeoloc = this.enviarGeoloc.bind(this);
    this.audioTocado = this.audioTocado.bind(this);
  }

  audioTocado() {
    if(navigator.geolocation)
      navigator.geolocation.getCurrentPosition(this.enviarGeoloc);
  }

  enviarGeoloc(p) {
    $.ajax({
              // BURLANDO CORS, DEBUG
             url: "https://cors-anywhere.herokuapp.com/108.61.23.245/v1/contextEntities",
             headers: {
               'Content-Type': 'application/json',
               'X-Requested-With': 'developinstance'
             },
             data: JSON.stringify({
              	"type": "GeolocsOuvintes",
              	"isPattern": "false",
              	"id": this.props.nomeUser,
              	"attributes": [
              		{"name": "latitude", "type": "float", "value": p.coords.latitude.toString()},
              		{"name": "longitude", "type": "float", "value": p.coords.longitude.toString()}
              	]
              }),
             type: "POST",
             success: () => {},
             error: () => {}
          });
  }

  likeDado() {
    if(this.state.likeDado) return;
    $("#like_"+this.props.chave).removeClass("fa-thumbs-o-up");
    $("#like_"+this.props.chave).addClass("fa-thumbs-up");
    this.setState({"likeDado": true});
    this.submeterLike();
  }

  dislikeDado() {
    if(this.state.dislikeDado) return;
    $("#dislike_"+this.props.chave).removeClass("fa-thumbs-o-down");
    $("#dislike_"+this.props.chave).addClass("fa-thumbs-down");
    this.setState({"dislikeDado": true});
    this.submeterDislike();
  }

  render() {
    return (
      <div className="col-12 painelEscutar">
        <h1>{this.props.nome}</h1>
        <p className="text-muted">{this.props.assunto}</p>
        <ReactAudioPlayer
          src={"https://podcre-223420.appspot.com/api/getFile?cod="+this.props.blob}
          autoPlay={false}
          controls={true}
          onPlay={this.audioTocado.bind(this)}
        />
      <div>
          <span id={"like_"+this.props.chave} onClick={this.likeDado.bind(this)} className="fa fa-thumbs-o-up" aria-hidden="true"> {this.props.likes}</span>
          <span id={"dislike_"+this.props.chave} onClick={this.dislikeDado.bind(this)} className="fa fa-thumbs-o-down" aria-hidden="true"> {this.props.dislikes}</span>
        </div>
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
