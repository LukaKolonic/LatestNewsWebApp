import React, { useState, useEffect } from "react";
import Article from "./Article";
import '../sass/component/articles.scss'
import LatestNews from "./LatestNews";


const Articles = (props) => {
    return (
      <div className="article-list">
        {props.articles.slice(0, 16).map((article, index) => ( 
          <Article key={index} article={article} />
        ))}  
        {props.showLatestNews ? <LatestNews articles={props.articles}></LatestNews> : null}   
      </div>
    );
  }

export default Articles;








