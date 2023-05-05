import React, { useState, useEffect, useRouteMatch } from "react";
import Header from "../component/Header";
import SearchBar from "../component/SearchBar";
import "../sass/component/homepage.scss";
import Menu from "../component/Menu";
import Articles from "../component/Articles";
import LatestNews from "../component/LatestNews";
import axios from "axios";

const API_URL = "https://newsapi.org/v2/top-headlines";
const API_KEY = "c0e8f742b6d34094939ff8025cf611f6";
const CATEGORY = "&category=${categoryName}";

function Homepage(props) {
  const [articles, setArticles] = useState([]);
  const [categoryName, setCategoryName] = useState(
    props?.match?.params?.categoryName || "home"
  );
  const [showButtons, setShowButtons] = useState(false);
  const [activeButton, setActiveButton] = useState("");

  useEffect(() => {
  
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&sortedby=publishedAt&apiKey=c0e8f742b6d34094939ff8025cf611f6";
    if (categoryName !== "home") {
      url += `&category=${categoryName}`;
    }
    axios
      .get(url)
      .then((response) => {
        const newArticles = response.data.articles.map((article) => {
          return {
            ...article,
            category: categoryName,
            author: article.author || "Unknown",
          };
        });
        setArticles(newArticles);
      })
      .catch((error) => {
        console.error("Error retrieving articles data:", error);
      });
  }, [categoryName]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 375) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleFeaturedClick() {
    setActiveButton("featured");
    console.log("F");
  }

  function handleLatestClick() {
    setActiveButton("latest");
    console.log("L");
  }

  function setCategory(article) {
    article.category = categoryName; 
    return article;
  }

  function setAuthorIfNull(article) {
    if (!article.author) article.author = "Unknown";
    return article;
  }

  function handleGet() {
    console.log("Get clicked!");
  }

  function handleNoThanks() {
    console.log("No thanks clicked!");
  }

  const handleSearch = (searchResults) => {
    setArticles(
      searchResults.map((article) => {
        setCategory(article);
        setAuthorIfNull(article);
        return article;
      })
    );
  };

  const handleCategoryChange = (category) => {
    setCategoryName(category);
  };

  return (
    <>
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
        <Menu onCategoryChange={handleCategoryChange}></Menu>
        <p className="titleNews">News</p>

        {showButtons && (
          <div className="buttons">
            <button
              className={`featured ${
                activeButton === "featured" ? "active" : ""
              }`}
              onClick={() => handleFeaturedClick()}
            >
              Featured
            </button>
            <button
              className={`latest ${activeButton === "latest" ? "active" : ""}`}
              onClick={() => handleLatestClick()}
            >
              Latest
            </button>
          </div>
        )}

        {showButtons && activeButton === "featured" && (
          <Articles articles={articles} showLatestNews={true}></Articles>
        )}

        {showButtons && activeButton === "latest" && (
          <div className="centered">
            <LatestNews articles={articles}></LatestNews>
          </div>
        )}

        {!showButtons && (
          <Articles articles={articles} showLatestNews={true}></Articles>
        )}
      </div>
    </>
  );
}

export default Homepage;
