import React, { Component } from 'react';
import * as api from '../api';
import { Link } from '@reach/router';
import ToggleContent from './ToggleContent';
import Comments from './Comments';

class ArticleById extends Component {
  state = {
    article: []
  };

  render() {
    const {
      article_id,
      title,
      author,
      created_at,
      body,
      votes,
      comment_count
    } = this.state.article;
    console.log(article_id);
    return (
      <main>
        <button>
          <Link to="/articles">Back to all Articles</Link>
        </button>
        <h2>{title}</h2>
        <h3>By {author}</h3>
        <p>{new Date(created_at).toDateString()}</p>
        <p>{body}</p>
        <p>
          {' '}
          <span role="img" aria-label="votes">
            🗳️
          </span>{' '}
          {votes}
        </p>{' '}
        <p>
          {' '}
          <span role="img" aria-label="commentcount">
            💬{'  '}
          </span>
          {comment_count} comments
        </p>
        <ToggleContent>
          <Comments article_id={article_id} />
        </ToggleContent>
      </main>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;
    api.getArticle(article_id).then(res => {
      this.setState({ article: res });
    });
  }
}

export default ArticleById;
