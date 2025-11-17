import React, { useState } from 'react';
import '../App.css';
import './Contact.css';

function Upload() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    year: '',
    category: '',
    description: '',
    pdfFile: null
  });

  const handleChange = (e) => {
    if (e.target.name === 'pdfFile') {
      setFormData({
        ...formData,
        pdfFile: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle file upload here
    alert('Book upload feature coming soon! For now, please add books manually through the backend.');
    setFormData({
      title: '',
      author: '',
      year: '',
      category: '',
      description: '',
      pdfFile: null
    });
  };

  return (
    <div className="App">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      
      <main className="main-content" style={{ marginTop: '100px' }}>
        <div className="page-container">
          <h1 className="page-title">Upload Book</h1>
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="page-subtitle">Share Your Book</h2>
              <p className="page-text">
                Upload your favorite book to share with the EBOOK VERSE community. 
                Make sure you have the rights to share the content.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📄</span>
                  <span>PDF format only</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✅</span>
                  <span>Public domain or authorized content</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📚</span>
                  <span>All categories welcome</span>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Book Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="year">Year Published</label>
                <input
                  type="text"
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="">Select Category</option>
                  <option value="Classic Fiction">Classic Fiction</option>
                  <option value="Philosophy">Philosophy</option>
                  <option value="Science">Science</option>
                  <option value="History">History</option>
                  <option value="Self-Help">Self-Help</option>
                  <option value="Biography/Autobiography">Biography/Autobiography</option>
                  <option value="Poetry">Poetry</option>
                  <option value="Children's Literature">Children's Literature</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="form-textarea"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="pdfFile">PDF File</label>
                <input
                  type="file"
                  id="pdfFile"
                  name="pdfFile"
                  accept=".pdf"
                  onChange={handleChange}
                  required
                  className="form-input"
                  style={{ padding: '0.5rem' }}
                />
              </div>
              <button type="submit" className="submit-button">
                Upload Book
              </button>
            </form>
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 EBOOK VERSE. Powered by MERN Stack</p>
      </footer>
    </div>
  );
}

export default Upload;

