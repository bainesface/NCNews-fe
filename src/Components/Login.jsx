import React, { Component } from 'react';
import * as api from '../api';
import WelcomeMessage from './WelcomeMessage';

class Login extends Component {
  state = {
    user: { name: 'Jess Jelly' },
    username: '',
    err: null
  };
  render() {
    const { username, user, err } = this.state;
    return (
      <>
        <form className="login" onSubmit={this.handleSubmit}>
          <label>Log In </label>
          <br></br>
          <input
            className="loginInput"
            type="text"
            placeholder="username"
            value={username}
            onChange={this.handleChange}
          ></input>
          <br></br>
          <button className="loginButton">Log In</button>
          <span>
            <button className="logoutButton" onClick={this.logOut}>
              Log Out
            </button>
          </span>
          {user && <WelcomeMessage name={user.name} />}
        </form>{' '}
        {err && <p>Invalid Username</p>}
      </>
    );
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ username: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username } = this.state;
    this.fetchUser(username);
  };

  fetchUser = () => {
    const { username } = this.state;
    api
      .getUser(username)
      .then(res => {
        this.setState({ user: res, username: '' });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  logOut = () => {
    this.setState({ username: '', user: null });
  };
}

export default Login;
