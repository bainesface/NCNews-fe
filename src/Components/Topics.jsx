import React, { Component } from 'react';
import * as api from '../api';
import ArticlesList from './ArticlesList';
import ErrorPage from './ErrorPage';
import Dropdown from './Dropdown';
import LoadingIndicator from './LoadingIndicator';

class Topics extends Component {
  state = {
    articles: [],
    sortValue: '',
    err: null,
    isLoading: true
  };
  render() {
    const { articles, err, sortValue, isLoading } = this.state;

    if (err) return <ErrorPage err={err.response} />;
    return (
      <>
        {isLoading ? (
          <LoadingIndicator LoadingIndicator={LoadingIndicator} />
        ) : (
          <div>
            <Dropdown
              changeSortValue={this.changeSortValue}
              sortValue={sortValue}
            />
            <ArticlesList articles={articles} />
          </div>
        )}
      </>
    );
  }

  fetchArticlesByTopic = value => {
    const { topic } = this.props;
    api
      .getArticles(value, topic)
      .then(res => {
        this.setState({ articles: res, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  componentDidMount() {
    this.fetchArticlesByTopic();
  }

  componentDidUpdate(prevProps, prevState) {
    const { sortValue } = this.state;
    if (prevProps.uri !== this.props.uri) {
      this.fetchArticlesByTopic();
    }
    if (prevState.sortValue !== sortValue) {
      this.fetchArticlesByTopic(sortValue);
    }
  }

  changeSortValue = value => {
    this.setState({ sortValue: value });
  };
}

export default Topics;
