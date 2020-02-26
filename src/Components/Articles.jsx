import React, { Component } from 'react';
import ArticlesList from './ArticlesList';
import Dropdown from './Dropdown';
import * as api from '../api';
import LoadingIndicator from './LoadingIndicator';

class Articles extends Component {
  state = {
    articles: [],
    sortValue: '',
    isLoading: true
  };
  render() {
    const { articles, isLoading, sortValue } = this.state;
    return (
      <>
        {isLoading ? (
          <LoadingIndicator LoadingIndicator={LoadingIndicator} />
        ) : (
          <>
            <Dropdown
              changeSortValue={this.changeSortValue}
              sortValue={sortValue}
            />
            <ArticlesList articles={articles} />
          </>
        )}
      </>
    );
  }

  fetchArticles = value => {
    api
      .getArticles(value)
      .then(res => {
        this.setState({ articles: res, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { sortValue } = this.state;
    if (prevState.sortValue !== sortValue) {
      this.fetchArticles(sortValue);
    }
  }

  changeSortValue = value => {
    this.setState({ sortValue: value });
  };
}

export default Articles;
