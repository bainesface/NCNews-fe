import React, { Component } from 'react';
import * as api from '../api';
import VoteUpdater from './VoteUpdater';
import { UsernameContext } from '../Contexts/Username';

class CommentCard extends Component {
  static contextType = UsernameContext;

  state = {
    commentDeleted: false,
    votes: 0
  };
  render() {
    const { author, created_at, body, comment_id } = this.props;
    const { commentDeleted, votes } = this.state;
    const { user } = this.context;

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
            {user !== author ? (
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
    const { comment_id, author, changeCommentNum } = this.props;

    const { user } = this.context;
    if (author === user) {
      api
        .deleteComment(comment_id)
        .then(() => {
          this.setState({ commentDeleted: true });
        })
        .then(() => {
          changeCommentNum(-1);
        });
    }
  };

  componentDidMount() {
    this.setState({ votes: this.props.votes });
  }
}

export default CommentCard;
