import React, { Component } from 'react';
// import { randomNum } from '../helpers/helper';

const subreddit = `LifeProTips`;
const url = `http://www.reddit.com/r/${subreddit}/new/.json?limit=50`;

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
      console.log(this.state.tips[this.props.randomNumber].data.title);
    });
  }

  render() {
    return (
      <div>
        <h1>LifeProTips</h1>
        <article className="pro-tip">Here we will have a tip</article>
        <div>
          {this.state.tips[this.props.randomNumber] ? this.state.tips[this.props.randomNumber].data.title : ``}
        </div>
      </div>
    );
  }
}

export default LifeProTips;
