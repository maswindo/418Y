import React from 'react';
import './SearchCssStyle/SearchBar.css';
import Navbar from './Navbar';
import Footer from './Footer';

import { useNavigate } from 'react-router-dom';

function SearchBar() {
  
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const searchTerm = event.target.value;
      navigate(`/SearchList?searchMovie=${encodeURIComponent(searchTerm)}`);
    }
  };
  

  return (
    <div>
      <Navbar />
      {/* Search Bar */}
      <section className="SearchBar">
        <div className="container">
          <label htmlFor="searchInput">Search Movie</label>
          <input type="search" id="searchInput" placeholder="Enter your name..." onKeyPress={handleKeyPress} />
        </div>
      </section>

      <Footer />

      </div>
  );
}

export default SearchBar;