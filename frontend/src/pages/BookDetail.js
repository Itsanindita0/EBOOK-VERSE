import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BookDetail.css';

function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pdfError, setPdfError] = useState(false);

  useEffect(() => {
    fetchBook();
  }, [id]);

  const fetchBook = async () => {
    try {
      const response = await axios.get(`/api/books/${id}`);
      setBook(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching book:', error);
      setError('Book not found');
      setLoading(false);
    }
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

  const handleBackClick = () => {
    navigate('/');
  };

  const handlePdfError = () => {
    setPdfError(true);
  };

  if (loading) {
    return (
      <div className="book-detail-page">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="loading-container">
          <div className="loader"></div>
          <p>Loading book...</p>
        </div>
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="book-detail-page">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="error-container">
          <p>{error || 'Book not found'}</p>
          <button onClick={handleBackClick} className="back-button">Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="book-detail-page" style={{ '--category-color': getCategoryColor(book.category) }}>
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <header className="book-detail-header" style={{ marginTop: '80px' }}>
        <button onClick={handleBackClick} className="back-button-header">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <span>Back to Library</span>
        </button>
        <div className="book-detail-info">
          <div className="book-detail-category">{book.category}</div>
          <h1 className="book-detail-title">{book.title}</h1>
          <p className="book-detail-author">by {book.author}</p>
          <p className="book-detail-year">Published: {book.year}</p>
          <p className="book-detail-description">{book.description}</p>
        </div>
      </header>

      <main className="book-detail-main">
        <div className="pdf-viewer-container">
          {pdfError ? (
            <div className="pdf-error">
              <div className="pdf-error-icon">⚠️</div>
              <h3>PDF Cannot Be Displayed</h3>
              <p>This PDF may have restrictions or CORS limitations.</p>
              <a 
                href={`http://localhost:5000${encodeURI(book.pdfUrl)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="pdf-external-link"
              >
                Open PDF in New Tab
              </a>
            </div>
          ) : (
            <iframe
              src={`http://localhost:5000${encodeURI(book.pdfUrl)}#view=FitH`}
              className="pdf-iframe"
              title={`${book.title} PDF`}
              onError={handlePdfError}
              allow="fullscreen"
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default BookDetail;

