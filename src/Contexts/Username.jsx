import React, { Component, createContext } from 'react';

export const UsernameContext = createContext();

class UsernameContextProvider extends Component {
  state = {
    user: ''
  };

  changeUser = usernameInput => {
    this.setState({ user: usernameInput });
  };

  render() {
    return (
      <UsernameContext.Provider
        value={{ ...this.state, changeUser: this.changeUser }}
      >
        {this.props.children}
      </UsernameContext.Provider>
    );
  }
}

export default UsernameContextProvider;
