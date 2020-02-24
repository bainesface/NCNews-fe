import React, { Component } from 'react';
import * as api from '../api';
import CommentsList from './CommentsList';

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments } = this.state;
    return <CommentsList comments={comments} />;
  }

  componentDidMount() {
    const { article_id } = this.props;
    api.getComments(article_id).then(res => {
      this.setState({ comments: res });
    });
  }
}

export default Comments;
