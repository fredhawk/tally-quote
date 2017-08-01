import React, { Component } from 'react';
import './Counter.css';

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
    this.props.getRandNum();
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
    return (
      <section className="Counter">
        <h1 className="Counter-title">
          Counter {this.props.country}
        </h1>
        <label htmlFor="counter" className="Counter-increment-label">
          Increase by
        </label>
        <input className="Counter-increment-input" name="counter" type="number" min="1" value={this.state.increment} placeholder={this.state.increment} onChange={event => this.setIncrement(event)} />
        <div className="Counter-btns">
          <button className="Counter-btn-increase Counter-btn" onClick={() => this.handleIncrement()}>
            +
          </button>
          <button className="Counter-btn-decrease Counter-btn" onClick={() => this.handleDecrement()}>
            -
          </button>
        </div>
        <div className="Counter-result">
          Total <span>{this.state.tally}</span>
        </div>
      </section>
    );
  }
}

export default Counter;
