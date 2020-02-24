import React, { Component } from 'react';

class Login extends Component {
  state = {
    username: ''
  };
  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Log In </label>
        <input
          type="text"
          placeholder="username"
          value={value}
          onChange={this.handleChange}
        ></input>
        <button className="logInButton">Log In</button>
      </form>
    );
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ username: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username } = this.state;
    this.props.showWelcomeMessage(username);
    this.setState({ username: '' });
  };
}

export default Login;
