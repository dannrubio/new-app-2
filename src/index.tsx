import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/App.css';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root container #root not found');
}

const root = createRoot(container); // React 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);