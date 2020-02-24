import React from 'react';

import { Link } from '@reach/router';

const ArticleCard = ({
  article_id,
  title,
  votes,
  author,
  created_at,
  comment_count
}) => {
  return (
    <li>
      <h2 className="articleTitle">
        <Link to={`/articles/${article_id}`}>{title}</Link>
      </h2>
      <h3 className="articleVotes">
        <span role="img" aria-label="votes">
          🗳️
        </span>{' '}
        {votes}
      </h3>
      <h4 className="articleAuthor">By {author}</h4>
      <p className="articleDate">{new Date(created_at).toDateString()}</p>
      <p className="articleCommentCount">
        <span role="img" aria-label="commentcount">
          💬{' '}
        </span>
        {comment_count} comments
      </p>
    </li>
  );
};

export default ArticleCard;
