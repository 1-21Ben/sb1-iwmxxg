import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Legal from './pages/Legal.tsx';
import './index.css';
import { initEmailJS } from './utils/emailConfig';

// Initialize EmailJS
initEmailJS();

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mentionslégales" element={<Legal />} />
      </Routes>
    </Router>
  </React.StrictMode>
);