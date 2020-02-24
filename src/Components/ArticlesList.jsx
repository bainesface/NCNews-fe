import ArticleCard from './ArticleCard';
import React from 'react';

const ArticlesList = props => {
  const { articles } = props;
  return (
    <ul className="articlesList">
      {articles.map(article => {
        return <ArticleCard key={article.article_id} {...article} />;
      })}
    </ul>
  );
};

export default ArticlesList;
