import React, { Component } from 'react';
import Login from './Login';
import { Link } from '@reach/router';

class Header extends Component {
  state = {
    username: ''
  };
  render() {
    const { username } = this.state;
    return (
      <header className="App-header">
        <h1>
          <Link to="/articles">NC News</Link>
        </h1>
        <Login showWelcomeMessage={this.showWelcomeMessage} />
        {username !== '' && <p>Welcome {username}</p>}
      </header>
    );
  }

  showWelcomeMessage = username => {
    this.setState({ username });
  };
}

export default Header;
