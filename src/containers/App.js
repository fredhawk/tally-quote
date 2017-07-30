import React, { Component } from 'react';
import Counter from './Counter';
import LifeProTips from './LifeProTips';
import { randomNum } from '../helpers/helper';
import logo from '../assets/logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
  }

  componentDidMount() {
    this.getRandomNumber();
    // this.setState({
    //   num: randomNum()
    // });
    console.log(`Component did mount`, this.state.num);
  }

  getRandomNumber() {
    console.log(`get a random number`);
    const newNum = randomNum();
    console.log(`newNum`, newNum);
    this.setState({
      num: newNum
    });
    // console.log(`this got called`, this.state.num);
  }
  render() {
    console.log(`this.state inside App.js`, this.state);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Counter getRandNum={() => this.getRandomNumber()} />
        <LifeProTips randomNumber={this.state.num} />
      </div>
    );
  }
}

export default App;
