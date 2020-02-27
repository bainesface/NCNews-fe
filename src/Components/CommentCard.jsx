import React, { Component } from 'react';
import * as api from '../api';
import VoteUpdater from './VoteUpdater';

class CommentCard extends Component {
  state = {
    commentDeleted: false,
    username: 'jessjelly',
    votes: 0
  };
  render() {
    const { author, created_at, body, comment_id } = this.props;
    const { commentDeleted, votes, username } = this.state;

    return (
      <>
        {commentDeleted ? (
          <p>Comment has been deleted</p>
        ) : (
          <li className="comment">
            <p>{body}</p>
            <p>By {author}</p>
            <p>{new Date(created_at).toDateString()}</p>
            <VoteUpdater votes={votes} comment_id={comment_id} />
            {username !== author ? (
              <p>Log in to delete your comment</p>
            ) : (
              <button className="button " onClick={this.removeComment}>
                Delete Comment
              </button>
            )}
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

  componentDidMount() {
    this.setState({ votes: this.props.votes });
  }
}

export default CommentCard;
