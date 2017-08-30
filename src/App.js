import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Facebook from './facebook';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Facebook />
        </div>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
