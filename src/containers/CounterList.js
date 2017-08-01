import React, { Component } from 'react';
import Counter from './Counter';
import './CounterList.css';

class CounterList extends Component {
  render() {
    return (
      <section className="CounterList">
        <div className="CounterList-counters">
          <Counter getRandNum={this.props.getRandomNumber} country="DK" />
          <Counter getRandNum={this.props.getRandomNumber} country="NO" />
          <Counter getRandNum={this.props.getRandomNumber} country="SE" />
        </div>
        <button className="CounterList-btn__reset">Reset counters</button>
      </section>
    );
  }
}

export default CounterList;
