import React, { Component } from 'react';
import logo from './vlogo.png';
import './app.css';
import Catalog from './catalog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Vegantopia</h1>
        </header>
        <p className="App-intro">
          Where all your vegan dreams come true.
        </p>
        <h4><Catalog /></h4>
      </div>
    );
  }
}

export default App;
