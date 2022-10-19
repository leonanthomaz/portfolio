import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import { PortfolioProvider } from './app/sharing/context/portfolio';
import { ThemeContextProvider } from './app/sharing/context/theme';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <PortfolioProvider>
        <Router>
          <App />
        </Router>
      </PortfolioProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
