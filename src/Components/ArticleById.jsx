import React, { Component } from 'react';
import * as api from '../api';
import { Link } from '@reach/router';
import ToggleContent from './ToggleContent';
import Comments from './Comments';
import ErrorPage from './ErrorPage';
import VoteUpdater from './VoteUpdater';
import LoadingIndicator from './LoadingIndicator';
import AddComment from './AddComment';

class ArticleById extends Component {
  state = {
    article: {},
    isLoading: true,
    err: null,
    newComment: null,
    newCommentNum: 0
  };

  render() {
    const { article, err, isLoading, newComment, newCommentNum } = this.state;

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
            </div>
            <AddComment
              article_id={article.article_id}
              addNewComment={this.addNewComment}
            />
            <ToggleContent
              comment_count={article.comment_count}
              newCommentNum={newCommentNum}
            >
              <Comments
                article_id={article.article_id}
                newComment={newComment}
                changeCommentNum={this.changeCommentNum}
              />
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

  addNewComment = comment => {
    this.setState({ newComment: comment, newCommentNum: 1 });
  };

  changeCommentNum = num => {
    this.setState({ newCommentNum: num });
  };
}
export default ArticleById;
