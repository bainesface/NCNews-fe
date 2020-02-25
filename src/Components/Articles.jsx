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
    const { articles, isLoading } = this.state;
    return (
      <>
        {isLoading ? (
          <LoadingIndicator LoadingIndicator={LoadingIndicator} />
        ) : (
          <>
            <Dropdown changeSortValue={this.changeSortValue} />
            <ArticlesList articles={articles} />
          </>
        )}
      </>
    );
  }

  fetchArticles = value => {
    api.getArticles({ sort_by: value }).then(res => {
      this.setState({ articles: res });
    });
  };

  componentDidMount() {
    this.fetchArticles();
    this.setState({ isLoading: false });
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
