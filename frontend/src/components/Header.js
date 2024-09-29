// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css'; // Import Header-specific styles

const Header = () => {
  return (
    <header className="header">
      <div className='header-content'>
      <div className="logo">
          <span className="logo-primary">PDF</span>
          <span className="logo-secondary">Converter</span>
        </div>
        <nav className="nav">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/features" className="nav-link">Features</NavLink>
          <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
        </nav>
        <button className="cta-btn">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
