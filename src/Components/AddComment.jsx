import React, { Component } from 'react';
import * as api from '../api';
import { UsernameContext } from '../Contexts/Username';

class AddComment extends Component {
  static contextType = UsernameContext;

  state = {
    comment: ''
  };

  render() {
    const { user } = this.context;

    return (
      <div className="form">
        {user ? (
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
      </div>
    );
  }

  handleTyping = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    const { article_id, addNewComment } = this.props;
    const { comment } = this.state;
    const { user } = this.context;

    const commentToPost = {
      username: user,
      body: comment
    };
    event.preventDefault();
    api.postComment(commentToPost, article_id).then(({ data }) => {
      addNewComment(data.comment);
    });
    this.setState({ comment: '' });
  };
}

export default AddComment;
