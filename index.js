import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { Router } from 'react-router-dom';

// Create a root.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Initial render
root.render(
      <App />
);
