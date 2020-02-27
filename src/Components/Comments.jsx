import React, { Component } from 'react';
import * as api from '../api';
import CommentsList from './CommentsList';
import AddComment from './AddComment';
import LoadingIndicator from './LoadingIndicator';

class Comments extends Component {
  state = {
    comments: [],
    isLoading: true
  };
  render() {
    const { comments, isLoading } = this.state;
    const { article_id } = this.props;
    return (
      <div className="comments">
        {isLoading ? (
          <LoadingIndicator LoadingIndicator={LoadingIndicator} />
        ) : (
          <>
            <AddComment
              article_id={article_id}
              showComment={this.showComment}
            />
            <CommentsList comments={comments} />
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

  showComment = comment => {
    this.setState(currentState => {
      return { comments: [comment, ...currentState.comments] };
    });
  };
}

export default Comments;
