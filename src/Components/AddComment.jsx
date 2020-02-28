import React, { Component } from 'react';
import * as api from '../api';
// import UsernameContextConsumer from '../Contexts/Username';

class AddComment extends Component {
  state = {
    comment: '',
    username: 'jessjelly'
  };
  render() {
    const { username } = this.state;
    return (
      // <UsernameContextConsumer>
      <>
        {username ? (
          <form className="commentForm" onSubmit={this.handleSubmit}>
            <label className="commentLabel">
              Leave a comment{' '}
              <input
                className="commentInput"
                required
                type="text"
                placeholder="comment here ..."
                value={this.state.comment}
                onChange={this.handleTyping}
              />
            </label>
            <button className="button">Submit</button>
          </form>
        ) : (
          <p> Log in to leave a comment</p>
        )}
      </>
      // </UsernameContextConsumer>
    );
  }

  handleTyping = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    const { article_id, showComment } = this.props;
    const { username, comment } = this.state;

    const commentToPost = {
      username: username,
      body: comment
    };
    event.preventDefault();
    api.postComment(commentToPost, article_id).then(({ data }) => {
      showComment(data.comment);
    });
    this.setState({ comment: '' });
  };
}

export default AddComment;
