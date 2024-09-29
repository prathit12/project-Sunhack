// src/pages/Home.js
import React from 'react';
import '../styles/Home.css'; // Import specific styles for the Home component

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1 className="hero-title">PDF Converter</h1>
        <p className="hero-subtitle">Convert your files quickly and easily.</p>
        <button className="cta-btn">Get Started</button>
      </header>

      <section className="features">
        <h2 className="features-title">Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Fast Conversion</h3>
            <p>Convert your files in seconds without losing quality.</p>
          </div>
          <div className="feature-card">
            <h3>Secure</h3>
            <p>Your files are processed securely and deleted after conversion.</p>
          </div>
          <div className="feature-card">
            <h3>User-Friendly</h3>
            <p>Simple and intuitive interface for hassle-free conversions.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2 className="how-it-works-title">How It Works</h2>
        <ol className="steps">
          <li>Upload your file</li>
          <li>Select your desired format</li>
          <li>Click 'Convert' and download</li>
        </ol>
      </section>
    </div>
  );
};

export default Home;
