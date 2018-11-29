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
    for(let x = 0; x < this.props.listaNomes.length; x++)
      this.buscarDados(this.props.listaNomes[x]);
  }

  componentWillReceiveProps(nextProps) {
      for(let x = 0; x < this.props.listaNomes.length; x++)
        this.buscarDados(this.props.listaNomes[x]);
  }

  buscarDados(nome) {
    $.ajax({
             url: "https://podcre-223420.appspot.com/api/getPodcasts?nome="+nome,
             type: "GET",
             success: (r) => {
               const nova = {"nome": nome, "lista": r.data};
               const lista = this.state.lista.slice();
               lista.push(nova);
               this.setState({
                 "lista": lista
                });},
             error: () => {setTimeout(this.buscarDados, 1000);}
          });
  }

  render() {
    const listaExterna = [];
    for(let x = 0; x < this.state.lista.length; x++) {
      const lista = this.state.lista[x].lista.map(
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
      if(lista.length > 0) {
        listaExterna.push(
          <div className="row" key={x}>
            <div className="col-12" style={{"textAlign": "right", "marginTop": "20px"}}>
              <h4>{this.state.lista[x].nome}</h4>
            </div>
            {lista}
          </div>
        );
      }
    }
    return (
      <div id="painelDeslogado" className="col-md-8">
        <h1>Principais podcasts</h1><hr />
        {listaExterna}
      </div>
    );
  }
}
