import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-glow">EBOOK</span>
          <span className="logo-accent">VERSE</span>
        </Link>

        <div className="navbar-center">
          <Link 
            to="/" 
            className={`nav-link-center ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link-center ${isActive('/about') ? 'active' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link-center ${isActive('/contact') ? 'active' : ''}`}
          >
            Contact Us
          </Link>
          <Link 
            to="/upload" 
            className={`nav-link-center ${isActive('/upload') ? 'active' : ''}`}
          >
            Upload Book
          </Link>
        </div>

        <div className="navbar-right">
          <Link 
            to="/login" 
            className={`nav-link-right ${isActive('/login') ? 'active' : ''}`}
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className={`nav-link-right register-btn ${isActive('/register') ? 'active' : ''}`}
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

