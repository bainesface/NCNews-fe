import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@reach/router';
import VoteUpdater from './VoteUpdater';

const ArticleCard = ({
  article_id,
  title,
  votes,
  author,
  created_at,
  comment_count,
  topic
}) => {
  return (
    <li>
      <h2 className="articleTitle">
        <p className="topic">
          {`${topic}  `}
          <Link className="articleTitleLink" to={`/articles/${article_id}`}>
            {title}
          </Link>
        </p>
      </h2>
      <VoteUpdater article_id={article_id} votes={votes} />
      <h4 className="articleAuthor">By {author}</h4>
      <p className="articleDate">{new Date(created_at).toDateString()}</p>
      <p className="articleCommentCount">
        <FontAwesomeIcon icon={faComments} /> {comment_count}
      </p>
    </li>
  );
};

export default ArticleCard;
