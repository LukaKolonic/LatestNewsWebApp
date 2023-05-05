import React, { useState } from 'react';
import '../sass/component/searchBar.scss'
import iconSearch from '../../../assets/Search.png'
import axios from 'axios';

const SearchBar = (props) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&q=${query}&apiKey=c0e8f742b6d34094939ff8025cf611f6`
    );
    props.onSearch(response.data.articles);
  };

  return (
        <div className="search">
          <img className="iconSearch" src={iconSearch} />
          <input
            className="textSearch"
            type="text"
            placeholder="Search news"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btnSearch" onClick={handleSearch}>
            SEARCH
          </button>
        </div>
  );
};

export default SearchBar;

