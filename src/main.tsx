// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'; // MUI ThemeProvider
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as StyledThemeProvider } from 'styled-components'; // styled-components ThemeProvider
import theme from './styles/theme';
import { App } from './App';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* ThemeProvider do MUI */}
    <MUIThemeProvider theme={theme}>
      {/* ThemeProvider do styled-components */}
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <App />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </StyledThemeProvider>
    </MUIThemeProvider>
  </React.StrictMode>
);
