import React, { Component } from 'react';

export default class InfosUser extends Component {

  render() {
    return (
      <div id="infosUser">
        <h1>{this.props.nomeUser}</h1>
        <h6>{this.props.email}</h6>
      </div>
    );
  }
}
