import React, { useState, useEffect } from 'react';
import Articles from '../component/Articles';
import Header from "../component/Header";
import SearchBar from "../component/SearchBar";
import Menu from "../component/Menu";
import axios from "axios";


function CategoryPage(props) {
    const categoryName = props.match.params.categoryName;
  
    const [articles, setArticles] = useState([]);
    const [sources, setSources] = useState([]);
  
    useEffect(() => {
      axios
        .get(`https://newsapi.org/v2/top-headlines?country=us&sortedBy=publishedAt&category=${categoryName}&apiKey=c0e8f742b6d34094939ff8025cf611f6`)
        .then((response) => {
          setArticles(response.data.articles);
        })
        .catch((error) => {
          console.error("Error retrieving articles data:", error);
        });
    }, [categoryName]);

    useEffect(() => {
      setArticles(articles.map(article => {
        setAuthorIfNull(article);
        return article;
      }));
    }, [sources]);
  
    function setAuthorIfNull(article) { 
      if(!article.author)
        article.author = "Unknown";
      return article;
  } 

    function handleGet() {
      console.log("Get clicked!");
    }
  
    function handleNoThanks() {
      console.log("No thanks clicked!");
    }

    const handleSearch = (searchResults) => {
      setArticles(searchResults.map(article => {
        setAuthorIfNull(article);
        return article;
      }));
    };
  
    return (
      <div className="appBackground">
        <Header
          title="Make MyNews your homepage"
          description="Every day discover what´s thrending on the internet!"
          onGet={handleGet}
          onNoThanks={handleNoThanks}
        />
        <p className="paragraph">
          <span className="first-two-letters">My</span>News
        </p>
        <SearchBar onSearch={handleSearch} />

        <hr className="line"></hr>
        <Menu></Menu>
        <p className="titleNews">{categoryName}</p>
        <Articles articles={articles}></Articles>
      </div>
    );
  }
  

export default CategoryPage;


  