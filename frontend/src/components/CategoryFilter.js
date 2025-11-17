import React from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  const allCategories = ['All', ...categories];

  return (
    <div className="category-filter-container">
      <div className="category-filter-wrapper">
        {allCategories.map(category => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            <span className="category-button-text">{category}</span>
            {selectedCategory === category && (
              <span className="category-button-glow"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;

