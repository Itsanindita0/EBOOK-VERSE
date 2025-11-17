import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getFavorites } from '../utils/favorites';
import '../App.css';
import BookCard from '../components/BookCard';

function Favorites() {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFavoriteBooks();
    
    // Listen for custom event when favorites change
    const handleFavoriteChange = () => {
      fetchFavoriteBooks();
    };
    window.addEventListener('favoritesChanged', handleFavoriteChange);
    
    // Also listen for storage changes (for cross-tab updates)
    const handleStorageChange = (e) => {
      if (e.key === 'bookLibraryFavorites') {
        fetchFavoriteBooks();
      }
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('favoritesChanged', handleFavoriteChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const fetchFavoriteBooks = async () => {
    try {
      const favoriteIds = getFavorites();
      
      if (favoriteIds.length === 0) {
        setFavoriteBooks([]);
        setLoading(false);
        return;
      }

      // Fetch all books and filter by favorites
      const response = await axios.get('/api/books');
      const allBooks = response.data;
      const favorites = allBooks.filter(book => favoriteIds.includes(book._id));
      
      setFavoriteBooks(favorites);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching favorite books:', error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      
      <header className="app-header" style={{ marginTop: '80px' }}>
        <div className="header-content">
          <h1 className="main-title">
            <span className="title-glow">MY</span>
            <span className="title-accent">FAVORITES</span>
          </h1>
          <p className="subtitle">Your Collection of Beloved Books</p>
        </div>
      </header>

      <main className="main-content">
        {loading ? (
          <div className="loading-container">
            <div className="loader"></div>
            <p>Loading favorites...</p>
          </div>
        ) : (
          <>
            <div className="results-info">
              <span className="results-count">
                {favoriteBooks.length} {favoriteBooks.length === 1 ? 'Favorite Book' : 'Favorite Books'}
              </span>
            </div>
            {favoriteBooks.length > 0 ? (
              <div className="books-grid">
                {favoriteBooks.map(book => (
                  <BookCard key={book._id} book={book} />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <div className="no-results-icon">❤️</div>
                <p>No favorite books yet. Click the heart icon on any book to add it to your favorites!</p>
              </div>
            )}
          </>
        )}
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 EBOOK VERSE. Powered by MERN Stack</p>
      </footer>
    </div>
  );
}

export default Favorites;

