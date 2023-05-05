import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import redSpot from '../../../assets/RedSpot.gif';
import "../sass/component/latestNews.scss";
import LatestNewsItem from './LatestNewsItem';

const LatestNews = (props) => {
  return (
    <div className="latest-news">
      <img className='red-spot' src={redSpot} />
      <h2 className='title'>Latest news</h2>
    <div className='item-container'>
    {Array.from({ length: props.articles.length }, (_, i) => i).map((index) => (
        <LatestNewsItem key={index} article={props.articles[index]}></LatestNewsItem>
      ))}      
    </div>
      
    <button className='btnNews'>
       <span className='btnNewsText'> See all news <FontAwesomeIcon icon={faChevronRight} /></span>
    </button>
    </div>
  );
};

export default LatestNews;


