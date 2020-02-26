import React, { Component } from 'react';
import Login from './Login';
import { Link } from '@reach/router';

class Header extends Component {
  state = {
    username: ''
  };

  render() {
    return (
      <header className="header">
        <h1 className="h1">
          <Link to="/">NC News</Link>
        </h1>
        <Login showWelcomeMessage={this.showWelcomeMessage} />
      </header>
    );
  }
}

export default Header;
