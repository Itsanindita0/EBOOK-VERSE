import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearchChange }) => {
  const handleChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <div className="search-input-wrapper">
        <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <input
          type="text"
          className="search-input"
          placeholder="Search by title, author, or description..."
          onChange={handleChange}
        />
        <div className="search-glow"></div>
      </div>
    </div>
  );
};

export default SearchBar;

