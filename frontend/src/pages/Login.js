import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Contact.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login here
    alert('Login feature coming soon!');
  };

  return (
    <div className="App">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      
      <main className="main-content" style={{ marginTop: '100px' }}>
        <div className="page-container" style={{ maxWidth: '500px' }}>
          <h1 className="page-title">Login</h1>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <button type="submit" className="submit-button" style={{ width: '100%' }}>
              Login
            </button>
            <p className="page-text" style={{ textAlign: 'center', marginTop: '1rem' }}>
              Don't have an account? <Link to="/register" style={{ color: '#00ffff' }}>Register here</Link>
            </p>
          </form>
        </div>
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 EBOOK VERSE. Powered by MERN Stack</p>
      </footer>
    </div>
  );
}

export default Login;

