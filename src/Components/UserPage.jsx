import React, { Component } from 'react';
import { UsernameContext } from '../Contexts/Username';
import AddArticle from './AddArticle';
import * as api from '../api';

class UserPage extends Component {
  static contextType = UsernameContext;
  state = {
    userDetails: {},
    isLoading: true
  };
  render() {
    const { user } = this.context;
    const { avatar_url, name } = this.state.userDetails;

    return (
      <div>
        {user ? (
          <>
            {' '}
            <div className="user">
              {' '}
              <img className="avatar" src={avatar_url} alt={name} />
            </div>
            <AddArticle />{' '}
          </>
        ) : (
          <p>Log in to add an article</p>
        )}
      </div>
    );
  }

  fetchUser = () => {
    const { user } = this.context;

    user &&
      api
        .getUser(user)
        .then(res => {
          this.setState({
            userDetails: res,
            err: null,
            loggedIn: true
          });
        })
        .catch(err => {
          this.setState({ err, user: null });
        });
  };

  componentDidMount() {
    this.fetchUser();
  }
}

export default UserPage;
