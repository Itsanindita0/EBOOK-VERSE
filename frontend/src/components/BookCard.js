import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isFavorite, toggleFavorite } from '../utils/favorites';
import './BookCard.css';

const BookCard = ({ book }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFavorite(isFavorite(book._id));
  }, [book._id]);

  const handleReadBook = () => {
    navigate(`/book/${book._id}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    const newFavoriteState = toggleFavorite(book._id);
    setFavorite(newFavoriteState);
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event('favoritesChanged'));
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Classic Fiction': '#00ffff',
      'Philosophy': '#ff00ff',
      'Science': '#00ff00',
      'History': '#ffaa00',
      'Self-Help': '#ff0066',
      'Biography/Autobiography': '#00aaff',
      'Poetry': '#aa00ff',
      "Children's Literature": '#ffcc00'
    };
    return colors[category] || '#00ffff';
  };

  return (
    <div
      className="book-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ '--category-color': getCategoryColor(book.category) }}
    >
      <div className="book-card-inner">
        <div className="book-card-header">
          <div className="book-category-badge">
            {book.category}
          </div>
          <div className="book-header-right">
            <button
              className={`favorite-button ${favorite ? 'active' : ''}`}
              onClick={handleFavoriteClick}
              title={favorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              <svg className="favorite-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={favorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <div className="book-year">{book.year}</div>
          </div>
        </div>
        
        <div className="book-card-body">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">by {book.author}</p>
          <p className="book-description">{book.description}</p>
        </div>

        <div className="book-card-footer">
          <div className="book-card-buttons">
            <button
              className="read-button"
              onClick={handleReadBook}
            >
              <span className="read-button-text">Read Book</span>
              <svg className="read-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </button>
            <a
              href={`http://localhost:5000${encodeURI(book.pdfUrl)}`}
              download
              className="download-button"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="download-button-text">Download PDF</span>
              <svg className="download-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

        <div className="book-card-glow"></div>
      </div>
    </div>
  );
};

export default BookCard;

