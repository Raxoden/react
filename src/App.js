import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Andres from './components/Andres';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Andres nombre="juan"  />
       <Andres nombre="amanda" isActive  />
      </div>
    );
  }
}

export default App;
