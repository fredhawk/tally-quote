import React, { Component } from 'react';
import Counter from './Counter';
import LifeProTips from './LifeProTips';
import { randomNum } from '../helpers/helper';
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
  }

  getRandomNumber() {
    const newNum = randomNum();
    this.setState({
      num: newNum
    });
  }
  render() {
    return (
      <div className="App">
        <Counter getRandNum={() => this.getRandomNumber()} />
        <LifeProTips randomNumber={this.state.num} />
      </div>
    );
  }
}

export default App;
