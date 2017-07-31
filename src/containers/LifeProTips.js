import React, { Component } from 'react';
import './LifeProTips.css';

const subreddit = `LifeProTips`;
const url = `http://www.reddit.com/r/${subreddit}/hot/.json?limit=200`;

class LifeProTips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tips: []
    };
  }

  componentDidMount() {
    fetch(url).then(response => response.json()).then(data => {
      this.setState({
        tips: data.data.children
      });
    });
  }

  render() {
    return (
      <section className="LPT">
        <h1 className="LPT-title">LifeProTips</h1>
        <article className="LPT-tip">
          <p className="LPT-text">
            {this.state.tips[this.props.randomNumber] ? this.state.tips[this.props.randomNumber].data.title : ``}
          </p>
        </article>
      </section>
    );
  }
}

export default LifeProTips;
