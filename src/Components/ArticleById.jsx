import React, { Component } from 'react';
import * as api from '../api';
import { Link } from '@reach/router';
import ToggleContent from './ToggleContent';
import Comments from './Comments';

class ArticleById extends Component {
  state = {
    article: {}
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
    return (
      <main>
        <button>
          <Link to="/articles">Back to All Articles</Link>
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
          {votes} {'  '}
          <button onClick={this.increaseVotes}>Vote for article</button>
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

  fetchArticle = () => {
    const { article_id } = this.props;
    api.getArticle(article_id).then(res => {
      this.setState({ article: res });
    });
  };

  componentDidMount() {
    this.fetchArticle();
  }

  increaseVotes = () => {
    const { votes } = this.state.article;
    const { article_id } = this.props;
    this.setState(currentState => {
      return {
        article: { ...currentState.article, votes: votes + 1 }
      };
    });
    api.addArticleVote(1, article_id);
  };
}
export default ArticleById;
