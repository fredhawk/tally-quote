import React, { Component } from 'react';

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
      console.log(this.state.tips[3].data);
    });
  }

  render() {
    return (
      <div>
        <h1>LifeProTips</h1>
        <article className="pro-tip">Here we will have a tip</article>
        <ul>
          {this.state.tips.length === 0 ? `` : this.state.tips[3].data.title}
        </ul>
      </div>
    );
  }
}

export default LifeProTips;
