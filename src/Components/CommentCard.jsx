import React, { Component } from 'react';
import * as api from '../api';

class CommentCard extends Component {
  state = {
    commentDeleted: false,
    username: 'jessjelly',
    votes: 0
  };
  render() {
    const { author, created_at, body } = this.props;
    const { commentDeleted, votes } = this.state;
    return (
      <>
        {commentDeleted ? (
          <p>Comment has been deleted</p>
        ) : (
          <li>
            <p>{body}</p>
            <p>By {author}</p>
            <p>{new Date(created_at).toDateString()}</p>
            <p>
              {' '}
              <span role="img" aria-label="votes">
                🗳️
              </span>{' '}
              {votes}{' '}
              <button onClick={this.increaseVotes}>Vote for comment</button>
            </p>
            <button onClick={this.removeComment}>Delete Comment</button>
          </li>
        )}
      </>
    );
  }

  removeComment = event => {
    const { comment_id, author } = this.props;
    const { username } = this.state;
    if (author === username) {
      api.deleteComment(comment_id).then(() => {
        this.setState({ commentDeleted: true });
      });
    }
  };

  increaseVotes = () => {
    const { votes } = this.state;
    const { comment_id } = this.props;
    this.setState(currentState => {
      return { ...currentState, votes: votes + 1 };
    });
    api.addCommentVote(1, comment_id);
  };
}

export default CommentCard;
