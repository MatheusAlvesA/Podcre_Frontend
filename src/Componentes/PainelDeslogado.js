import React, { Component } from 'react';
import PainelEscutarPodcast from './PainelEscutarPodcast.js';
const $ = window.$;

export default class PainelDeslogado extends Component {

  constructor(props) {
    super(props);

    this.state = {
      "lista": []
    };

    this.buscarDados = this.buscarDados.bind(this);
  }


componentDidMount() {
  this.buscarDados();
}

  buscarDados() {
    $.ajax({
             url: "https://podcre-223420.appspot.com/api/getPodcasts?nome="+this.props.nomeUser,
             type: "GET",
             success: (r) => {this.setState({
               "lista": r.data
             });},
             error: () => {setTimeout(this.buscarDados, 1000);}
          });
  }

  render() {

    const lista = this.state.lista.map(
                    (epi) => {
                      return <PainelEscutarPodcast
                                nomeUser={this.props.nomeUser}
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
        <h1>Principais podcast</h1>
        <div className="row">
          {lista}
        </div>
      </div>
    );
  }
}
