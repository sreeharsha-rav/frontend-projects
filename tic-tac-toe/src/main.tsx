import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@/styles/global.css';

/**
 * Renders the main application component.
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  /**
   * Wraps the App component with React.StrictMode for additional checks and warnings in development mode.
   */
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
