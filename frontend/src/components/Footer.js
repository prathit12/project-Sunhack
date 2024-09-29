// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css'; // Import Footer-specific styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} PDF Converter. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/terms" className="footer-link">Terms of Service</a>
          <a href="/contact" className="footer-link">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
