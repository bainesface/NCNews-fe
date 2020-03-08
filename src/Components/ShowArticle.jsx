import React from 'react';

const ShowArticle = props => {
  const { title, author, created_at, body } = props.article;

  return (
    <div className="singleArticle">
      <h2 className="singleArticleHeader">{title}</h2>
      <h3>By {author}</h3>
      <p>{new Date(created_at).toDateString()}</p>
      <p className="singleArticleBody">{body}</p>
    </div>
  );
};

export default ShowArticle;
