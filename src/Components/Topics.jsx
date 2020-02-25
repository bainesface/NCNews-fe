import React, { Component } from 'react';
import * as api from '../api';
import ArticlesList from './ArticlesList';

class Topics extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    return (
      <div>
        <ArticlesList articles={articles} />
      </div>
    );
  }

  fetchArticlesByTopic = () => {
    const { topic } = this.props;

    api.getArticles({ topic }).then(res => {
      this.setState({ articles: res });
    });
  };

  componentDidMount() {
    this.fetchArticlesByTopic();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.uri !== this.props.uri) {
      this.fetchArticlesByTopic();
    }
  }
}

export default Topics;
