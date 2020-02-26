import React, { Component } from 'react';
import { Link } from '@reach/router';

class Nav extends Component {
  state = { topics: ['football', 'coding', 'cooking'] };
  render() {
    const { topics } = this.state;
    return (
      <nav className="topicsNav">
        {topics.map(topic => {
          return (
            <Link key={topic} to={`/topics/${topic}`}>
              {topic}
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default Nav;
