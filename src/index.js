import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import { PortfolioProvider } from './app/sharing/context/portfolio';
import { ThemeContextProvider } from './app/sharing/context/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <PortfolioProvider>
        <App />
      </PortfolioProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
