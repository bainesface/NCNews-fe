import React, { Component } from 'react';
import * as api from '../api';
import WelcomeMessage from './WelcomeMessage';
import { UsernameContext } from '../Contexts/Username';
import { Link } from '@reach/router';

class Login extends Component {
  static contextType = UsernameContext;

  state = {
    user: null,
    usernameInput: '',
    err: null,
    loggedIn: false
  };

  render() {
    const { usernameInput, user, err, loggedIn } = this.state;

    return (
      <>
        <form className="login" onSubmit={this.handleSubmit}>
          {loggedIn === false ? (
            <>
              {' '}
              <label>Log In </label>
              <br></br>
              <input
                className="loginInput"
                type="text"
                required
                placeholder="username"
                value={usernameInput}
                onChange={this.handleChange}
              ></input>
              <br></br>
              <button className="loginButton">Log In </button>
            </>
          ) : (
            <button className="logoutButton" onClick={this.logOut}>
              <Link className="logoutLink" to="/">
                {' '}
                LogOut
              </Link>
            </button>
          )}

          {err && <p>Invalid Username</p>}
          {user && <WelcomeMessage name={user.name} username={user.username} />}
        </form>{' '}
      </>
    );
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ usernameInput: value });
  };

  handleSubmit = event => {
    const { changeUser } = this.context;
    event.preventDefault();
    const { usernameInput } = this.state;
    this.fetchUser(usernameInput);
    changeUser(usernameInput);
  };

  fetchUser = () => {
    const { usernameInput } = this.state;

    if (usernameInput !== '') {
      api
        .getUser(usernameInput)
        .then(res => {
          this.setState({
            user: res,
            err: null,
            usernameInput: '',
            loggedIn: true
          });
        })
        .catch(err => {
          this.setState({ err, user: null });
        });
    }
  };

  logOut = () => {
    const { changeUser } = this.context;
    this.setState({ usernameInput: '', user: null, loggedIn: false });
    changeUser('');
  };
}

export default Login;
