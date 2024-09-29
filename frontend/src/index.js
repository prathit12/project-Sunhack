// index.js or index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new ReactDOM client import
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
