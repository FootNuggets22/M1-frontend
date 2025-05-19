import React from 'react';
import './Content.css';
import heroImage from '../assets/tinaFromTurners.jpg'; // Adjust as needed

function Content() {
  console.log('Content component loaded');

  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h1>Turners<br />Car Service</h1>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Content;

