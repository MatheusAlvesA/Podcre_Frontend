import React, { Component } from 'react';
import InfosUser from './InfosUser.js';
import PainelUparPodcast from './PainelUparPodcast.js';
import PainelEscutarPodcast from './PainelEscutarPodcast.js';
const $ = window.$;

export default class PainelLogado extends Component {

  constructor(props) {
    super(props);

    this.state = {
      "nome": "",
      "email": "",
      "listaPodcasts": []
    };

    this.buscarDados = this.buscarDados.bind(this);
  }

  componentDidMount() {
    this.buscarDados();
    this.buscarDadosPodcasts();
  }

  buscarDados() {
    $.ajax({
             url: "https://podcre-223420.appspot.com/api/user?nome="+this.props.nomeUser,
             type: "GET",
             success: (r) => {this.setState({
               "nome": r.data.nome_display,
               "email": r.data.email
             });},
             error: () => {setTimeout(this.buscarDados, 1000);}
          });
  }

  buscarDadosPodcasts() {
    $.ajax({
             url: "https://podcre-223420.appspot.com/api/getPodcasts?nome="+this.props.nomeUser,
             type: "GET",
             success: (r) => {this.setState({"listaPodcasts": r.data});},
             error: () => {setTimeout(this.buscarDados, 1000);}
          });
  }

  toggle() {
    if($("#painelPodcastsLogado").css("display") === "none")
      $("#painelPodcastsLogado").css("display", "block");
    else
      $("#painelPodcastsLogado").css("display", "none");
  }

  render() {

    const lista = this.state.listaPodcasts.map(
                    (epi) => {
                      return <PainelEscutarPodcast
                                nomeUser={epi.nome}
                                nome={epi.nome}
                                assunto={epi.assunto}
                                likes={epi.n_likes}
                                dislikes={epi.n_dislikes}
                                blob={epi.key_blob}
                                chave={epi.chave}

                                key={epi.chave}
                              />;
                    });

    return (
      <div id="painelLogado" className="col-md-8">
        <InfosUser nomeUser={this.state.nome} email={this.state.email}/>
        <PainelUparPodcast nomeUser={this.props.nomeUser} email={this.state.email}/>
        <div className="row" style={{"marginTop": "10px"}}>
            <div className="col-9">
              <h3>Seus podcasts:</h3>
            </div>
            <div className="col-3">
              <button onClick={this.toggle} type="button" className="btn btn-outline-info">Mostrar</button>
            </div>
        </div>
        <div className="row" id="painelPodcastsLogado" style={{"display": "none"}}>
          {lista}
        </div>
      </div>
    );
  }
}
