import React, { Component } from 'react';
import SmallFormLogin from './SmallFormLogin.js';

export default class LoginBar extends Component {
  render() {
    return (
      <div id="barraLogin" className="col-md-2">
        <SmallFormLogin />
      </div>
    );
  }
}
