import React, { Component } from 'react';
import Navbar from './Componentes/Navbar.js';
import LoginBar from './Componentes/LoginBar.js';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="row" id="corpo">
          <LoginBar />
        </div>
      </div>
    );
  }
}

export default App;
