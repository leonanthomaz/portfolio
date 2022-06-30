import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeContextProvider } from './contexts/Theme';
import { HooksContextProvider } from './contexts/Hooks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <HooksContextProvider>
        <App />
      </HooksContextProvider>
    </ThemeContextProvider>  
  </React.StrictMode>
);
