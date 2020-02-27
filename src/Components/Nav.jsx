import React, { Component } from 'react';
import { Link } from '@reach/router';

class Nav extends Component {
  state = { topics: ['football', 'coding', 'cooking'] };
  render() {
    const { topics } = this.state;
    return (
      <nav className="topicsNav">
        <h2 className="topicsHeader">Browse</h2>
        {topics.map(topic => {
          return (
            <Link className="topicsLink" key={topic} to={`/topics/${topic}`}>
              {topic}
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default Nav;
