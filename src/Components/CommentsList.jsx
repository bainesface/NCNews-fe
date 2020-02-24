import React from 'react';
import CommentCard from './CommentCard';

const CommentsList = props => {
  const { comments } = props;
  return (
    <ul className="commentsList">
      {comments.map(comment => {
        return <CommentCard key={comment.comment_id} {...comment} />;
      })}
    </ul>
  );
};

export default CommentsList;
