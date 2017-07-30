import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increment: 1,
      tally: 0
    };
  }
  setIncrement(event) {
    this.setState({
      increment: event.target.value
    });
  }
  handleIncrement() {
    // console.log(`Clicked`);
    // this.props.getRandNum();
    this.setState(prevState => ({
      tally: prevState.tally * 1 + this.state.increment * 1
    }));
  }
  handleDecrement() {
    if (this.state.tally <= 0 || this.state.tally * 1 - this.state.increment * 1 <= 0) {
      this.setState({
        tally: 0
      });
      return;
    }
    this.setState(prevState => ({
      tally: prevState.tally * 1 - this.state.increment * 1
    }));
  }
  render() {
    console.log(`Counters props`, this.props);
    return (
      <div>
        <h1>Counter</h1>
        <input type="number" min="1" value={this.state.increment} placeholder={this.state.increment} onChange={event => this.setIncrement(event)} />
        <button onClick={() => this.handleIncrement()}>increment</button>
        <button onClick={() => this.handleDecrement()}>decrement</button>
        <div>
          Total {this.state.tally}
        </div>
      </div>
    );
  }
}

export default Counter;
