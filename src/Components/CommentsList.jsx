import React from 'react';
import CommentCard from './CommentCard';

const CommentsList = props => {
  const { comments, changeCommentNum } = props;
  return (
    <ul className="commentsList">
      {comments.map(comment => {
        return (
          <CommentCard
            key={comment.comment_id}
            {...comment}
            changeCommentNum={changeCommentNum}
          />
        );
      })}
    </ul>
  );
};

export default CommentsList;
