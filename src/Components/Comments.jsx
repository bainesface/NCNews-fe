import React, { Component } from 'react';
import * as api from '../api';
import CommentsList from './CommentsList';

import LoadingIndicator from './LoadingIndicator';

class Comments extends Component {
  state = {
    comments: [],
    isLoading: true
  };
  render() {
    const { comments, isLoading } = this.state;
    const { changeCommentNum } = this.props;

    return (
      <div className="comments">
        {isLoading ? (
          <LoadingIndicator LoadingIndicator={LoadingIndicator} />
        ) : (
          <>
            <CommentsList
              comments={comments}
              changeCommentNum={changeCommentNum}
            />
          </>
        )}
      </div>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;
    api.getComments(article_id).then(res => {
      this.setState({ comments: res, isLoading: false });
    });
  }

  showComment = () => {
    const { newComment } = this.props;
    this.setState(currentState => {
      return { comments: [newComment, ...currentState.comments] };
    });
  };
}

export default Comments;
