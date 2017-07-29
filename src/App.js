import React, { Component } from 'react';
import Counter from './containers/Counter';
import LifeProTips from './containers/LifeProTips';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Counter />
        <LifeProTips />
      </div>
    );
  }
}

export default App;
