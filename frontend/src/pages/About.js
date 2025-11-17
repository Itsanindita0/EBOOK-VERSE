import React from 'react';
import '../App.css';

function About() {
  return (
    <div className="App">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      
      <main className="main-content" style={{ marginTop: '100px' }}>
        <div className="page-container">
          <h1 className="page-title">About EBOOK VERSE</h1>
          <div className="page-content">
            <p className="page-text">
              EBOOK VERSE is a futuristic digital library platform created by Anindita Biswas, that brings together timeless classics 
              and modern literature in one immersive reading experience. Our mission is to make great books 
              accessible to everyone, anywhere, anytime.
            </p>
            <p className="page-text">
              Built with cutting-edge technology and a passion for literature, EBOOK VERSE offers a 
              seamless way to discover, read, and manage your favorite books. Whether you're exploring 
              classic fiction, diving into philosophy, or seeking inspiration from self-help books, 
              we've curated a collection that spans genres and eras.
            </p>
            <h2 className="page-subtitle">Features</h2>
            <ul className="feature-list">
              <li>📚 Extensive collection of classic and modern books</li>
              <li>🔍 Advanced search and category filtering</li>
              <li>❤️ Personal favorites collection</li>
              <li>📖 In-app PDF reader</li>
              <li>⬇️ Download books for offline reading</li>
              <li>🎨 Futuristic, user-friendly interface</li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 EBOOK VERSE. Powered by MERN Stack</p>
      </footer>
    </div>
  );
}

export default About;

