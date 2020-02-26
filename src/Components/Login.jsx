import React, { Component } from 'react';
import * as api from '../api';
import ErrorPage from './ErrorPage';
import WelcomeMessage from './WelcomeMessage';

class Login extends Component {
  state = {
    user: null,
    username: '',
    err: null
  };
  render() {
    const { username, user, err } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Log In </label>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={this.handleChange}
          ></input>
          <button className="logInButton">Log In</button>
        </form>
        <button onClick={this.logOut}>Log Out</button>
        {user && <WelcomeMessage name={user.name} />}

        {err && <ErrorPage err={err.response} />}
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
