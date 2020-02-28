import React, { Component } from 'react';
import ArticlesList from './ArticlesList';
import DropdownSort from './DropdownSort';
import * as api from '../api';
import LoadingIndicator from './LoadingIndicator';
import DropdownOrder from './DropdownOrder';

class Articles extends Component {
  state = {
    articles: [],
    sortValue: 'created_at',
    orderValue: 'desc',
    isLoading: true
  };
  render() {
    const { articles, isLoading, sortValue, orderValue } = this.state;
    return (
      <>
        {isLoading ? (
          <LoadingIndicator LoadingIndicator={LoadingIndicator} />
        ) : (
          <>
            <DropdownSort
              changeSortValue={this.changeSortValue}
              sortValue={sortValue}
            />
            <DropdownOrder
              changeOrderValue={this.changeOrderValue}
              orderValue={orderValue}
            />

            <ArticlesList articles={articles} />
          </>
        )}
      </>
    );
  }

  fetchArticles = (sortValue, orderValue) => {
    api
      .getArticles(sortValue, orderValue)
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
    const { sortValue, orderValue } = this.state;
    if (
      prevState.sortValue !== sortValue ||
      prevState.orderValue !== orderValue
    ) {
      this.fetchArticles(sortValue, orderValue);
    }
  }

  changeSortValue = value => {
    this.setState({ sortValue: value });
  };

  changeOrderValue = value => {
    this.setState({ orderValue: value });
  };
}

export default Articles;
