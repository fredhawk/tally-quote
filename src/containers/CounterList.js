import React, { Component } from 'react';
import Counter from './Counter';
import './CounterList.css';

class CounterList extends Component {
  render() {
    return (
      <section className="CounterList">
        <div className="CounterList-counters">
          <Counter getRandNum={this.props.getRandNum} country="DK" />
          <Counter getRandNum={this.props.getRandNum} country="NO" />
          <Counter getRandNum={this.props.getRandNum} country="SE" />
        </div>
      </section>
    );
  }
}

export default CounterList;
