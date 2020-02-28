import React, { Component } from 'react';
import * as api from '../api';
import { Link } from '@reach/router';
import ToggleContent from './ToggleContent';
import Comments from './Comments';
import ErrorPage from './ErrorPage';
import VoteUpdater from './VoteUpdater';
import LoadingIndicator from './LoadingIndicator';

class ArticleById extends Component {
  state = {
    article: {},
    isLoading: true,
    err: null
  };

  render() {
    const { article, err, isLoading } = this.state;

    if (err) return <ErrorPage err={err.response} />;

    return (
      <>
        {isLoading ? (
          <LoadingIndicator LoadingIndicator={LoadingIndicator} />
        ) : (
          <main>
            <button className="backButton">
              <Link className="backButtonLink" to="/">
                Back to All Articles
              </Link>
            </button>
            <div className="singleArticle">
              <h2 className="singleArticleHeader">{article.title}</h2>
              <h3>By {article.author}</h3>
              <p>{new Date(article.created_at).toDateString()}</p>
              <p className="singleArticleBody">{article.body}</p>

              <VoteUpdater
                article_id={article.article_id}
                votes={article.votes}
              />

              <p>
                {' '}
                <span role="img" aria-label="commentcount">
                  💬{'  '}
                </span>
                {article.comment_count} comments
              </p>
            </div>
            <ToggleContent>
              <Comments article_id={article.article_id} />
            </ToggleContent>
          </main>
        )}
      </>
    );
  }

  fetchArticle = () => {
    const { article_id } = this.props;
    api
      .getArticle(article_id)
      .then(res => {
        this.setState({ article: res, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  componentDidMount() {
    this.fetchArticle();
  }
}
export default ArticleById;
