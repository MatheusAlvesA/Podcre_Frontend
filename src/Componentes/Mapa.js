import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const $ = window.$;

export default class Mapa extends Component {

  constructor(props) {
    super(props);

    this.state = {
      "listaPontos": []
    };

    this.requisitarPontos = this.requisitarPontos.bind(this);
  }

  componentDidMount() {
    this.requisitarPontos();
  }

  requisitarPontos() {
    $.ajax({
             url: "https://podcre-223420.appspot.com/api/Geoloc?nome="+this.props.nome,
             type: "GET",
             success: (r) => {
               this.setState({
                 "listaPontos": r.data.map((p) => {
                                                    let parsed = p.split(", ");
                                                    return {"lat": Number(parsed[0]), "lng": Number(parsed[1])};
                                                  })
                });},
             error: () => {}
          });
  }

  render() {
    const lista = [];
    for(let x = 0; x < this.state.listaPontos.length; x++) {
      lista.push(<Ponto key={x} {...this.state.listaPontos[x]} />);
    }

    return (
      <div style={{ height: '100vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDu0SHdChKTWlE0do-KImsvfBpwIHLp_u0' }}
          defaultCenter={{lat: 0, lng: 0}}
          defaultZoom={1}
        >
          {lista}
        </GoogleMapReact>
      </div>
    );
  }
}

const Ponto = () => <div style={{
  position: 'absolute',
  width: 10,
  height: 10,
  left: -10 / 2,
  top: -10 / 2,
  borderRadius: 10,
  backgroundColor: '#0074D9'
}}></div>;
