import React from 'react';

const CommentCard = ({ author, votes, created_at, body }) => {
  return (
    <li>
      <p>{body}</p>
      <p>By {author}</p>
      <p>{new Date(created_at).toDateString()}</p>
      <p>
        {' '}
        <span role="img" aria-label="votes">
          🗳️
        </span>{' '}
        {votes}
      </p>
    </li>
  );
};

export default CommentCard;
