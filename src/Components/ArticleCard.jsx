import React from 'react';

import { Link } from '@reach/router';

const ArticleCard = ({
  article_id,
  title,
  votes,
  author,
  body,
  comment_count
}) => {
  return (
    <li>
      <h1>
        <Link to={`/articles/${article_id}`}>{title}</Link>
      </h1>
      <h2>
        <span role="img" aria-label="votes">
          🗳️
        </span>{' '}
        {votes}
      </h2>
      <h3>By {author}</h3>
      <p>{body}</p>
      <p>
        <span role="img" aria-label="commentcount">
          💬{' '}
        </span>
        {comment_count} comments
      </p>
    </li>
  );
};

export default ArticleCard;
