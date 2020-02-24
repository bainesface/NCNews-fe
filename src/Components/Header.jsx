import React, { Component } from 'react';
import Login from './Login';

class Header extends Component {
  state = {
    username: ''
  };
  render() {
    const { username } = this.state;
    return (
      <header className="App-header">
        <h1>NC News</h1>
        <Login showWelcomeMessage={this.showWelcomeMessage} />
        {username !== '' && <p>Welcome {username}</p>}
      </header>
    );
  }

  showWelcomeMessage = username => {
    console.log(username);
    this.setState({ username });
  };
}

export default Header;
