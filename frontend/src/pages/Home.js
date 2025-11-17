import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';

function Home() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
    fetchCategories();
  }, []);

  useEffect(() => {
    filterBooks();
  }, [books, selectedCategory, searchQuery]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('/api/books');
      setBooks(response.data);
      setFilteredBooks(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching books:', error);
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/books/categories/list');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const filterBooks = () => {
    let filtered = [...books];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(book => book.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.description.toLowerCase().includes(query)
      );
    }

    setFilteredBooks(filtered);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      
      <header className="app-header" style={{ marginTop: '80px' }}>
        <div className="header-content">
          <h1 className="main-title">
            <span className="title-glow">EBOOK</span>
            <span className="title-accent">VERSE</span>
          </h1>
          <p className="subtitle">Explore Timeless Classics in a Digital Universe</p>
        </div>
      </header>

      <main className="main-content">
        <div className="controls-container">
          <SearchBar onSearchChange={handleSearchChange} />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {loading ? (
          <div className="loading-container">
            <div className="loader"></div>
            <p>Loading books...</p>
          </div>
        ) : (
          <>
            <div className="results-info">
              <span className="results-count">
                {filteredBooks.length} {filteredBooks.length === 1 ? 'Book' : 'Books'} Found
              </span>
            </div>
            <div className="books-grid">
              {filteredBooks.length > 0 ? (
                filteredBooks.map(book => (
                  <BookCard key={book._id} book={book} />
                ))
              ) : (
                <div className="no-results">
                  <div className="no-results-icon">📚</div>
                  <p>No books found matching your criteria</p>
                </div>
              )}
            </div>
          </>
        )}
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 EBOOK VERSE. Powered by MERN Stack</p>
      </footer>
    </div>
  );
}

export default Home;

