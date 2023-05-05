import React from 'react';
import '../sass/component/article.scss'

const Article = ({ article }) => {
  const { urlToImage, category, title, author } = article;

  return (
    <div className="article">
      <img src={urlToImage} />
      <p className='category'>{category}</p>
      <div className='title'>{title}</div>
      <p className='author'>{author}</p>
    </div>
  );
};

export default Article;



