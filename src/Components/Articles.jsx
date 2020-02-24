import React, { Component } from 'react';
import ArticlesList from './ArticlesList';
import Dropdown from './Dropdown';
import * as api from '../api';

class Articles extends Component {
  state = {
    articles: [],
    sortValue: ''
  };
  render() {
    const { articles } = this.state;
    return (
      <div>
        <Dropdown changeSortValue={this.changeSortValue} />
        <ArticlesList articles={articles} />
      </div>
    );
  }

  componentDidMount() {
    api.getArticles().then(res => {
      this.setState({ articles: res });
    });
  }

  changeSortValue = value => {
    console.log(value);
  };
}

export default Articles;
