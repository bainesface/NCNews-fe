import React from 'react';

import { Link } from '@reach/router';
import VoteUpdater from './VoteUpdater';

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
      <VoteUpdater article_id={article_id} votes={votes} />
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
