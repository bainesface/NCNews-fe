import React, { Component } from 'react';
import * as api from '../api';

class AddComment extends Component {
  state = {
    comment: '',
    username: 'jessjelly'
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Leave a comment{' '}
          <input
            required
            type="text"
            placeholder="comment here ..."
            value={this.state.comment}
            onChange={this.handleTyping}
          />
        </label>
        <button>Submit</button>
      </form>
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
