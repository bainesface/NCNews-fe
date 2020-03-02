import React, { Component } from 'react';
import * as api from '../api';
import ArticlesList from './ArticlesList';
import ErrorPage from './ErrorPage';
import DropdownSort from './DropdownSort';
import DropdownOrder from './DropdownOrder';
import LoadingIndicator from './LoadingIndicator';

class UserPage extends Component {
  state = {
    articles: [],
    sortValue: 'created_at',
    orderValue: 'desc',
    err: null,
    isLoading: true
  };

  render() {
    const { articles, err, sortValue, isLoading, orderValue } = this.state;

    if (err) return <ErrorPage err={err.response} />;
    return (
      <>
        {isLoading ? (
          <LoadingIndicator LoadingIndicator={LoadingIndicator} />
        ) : (
          <div>
            <DropdownSort
              changeSortValue={this.changeSortValue}
              sortValue={sortValue}
            />
            <DropdownOrder
              changeOrderValue={this.changeOrderValue}
              orderValue={orderValue}
            />
            <ArticlesList articles={articles} />
          </div>
        )}
      </>
    );
  }

  fetchArticlesByUser = (sortValue, orderValue) => {
    const { topic, username } = this.props;

    api
      .getArticles(sortValue, orderValue, topic, username)
      .then(res => {
        this.setState({ articles: res, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  componentDidMount() {
    this.fetchArticlesByUser();
  }

  componentDidUpdate(prevProps, prevState) {
    const { sortValue, orderValue } = this.state;
    if (prevProps.uri !== this.props.uri) {
      this.fetchArticlesByUser();
    }
    if (
      prevState.sortValue !== sortValue ||
      prevState.orderValue !== orderValue
    ) {
      this.fetchArticlesByUser(sortValue, orderValue);
    }
  }

  changeSortValue = value => {
    this.setState({ sortValue: value });
  };

  changeOrderValue = value => {
    this.setState({ orderValue: value });
  };
}

export default UserPage;
