import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@/styles/global.css';

/**
 * This is the entry point of the application.
 * It renders the App component into the root element.
 * The root element is the div with the id of 'root'.
 * The App component is wrapped in a React.StrictMode component.
 * The React.StrictMode component is a tool for highlighting potential problems in an application.
 * It does this by running the application in development mode and performing additional checks and warnings.
 * @see https://reactjs.org/docs/strict-mode.html
 * @see https://reactjs.org/docs/react-dom.html#createRoot 
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
