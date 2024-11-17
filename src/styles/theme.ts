import styled, { createGlobalStyle } from 'styled-components';
import { createTheme } from '@mui/material/styles';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #121212;
    color: #ffffff;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
  }
`;

export const Title = styled.div`
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #FFB300;
  border-bottom: 3px solid #FFB300;
  padding-bottom: 10px;
  display: inline-block;
  text-align: left;
  width: 100%;

  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFB300',
    },
    secondary: {
      main: '#F44336',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#fff',
      secondary: '#B0B0B0',
    },
  },
  typography: {
    fontFamily: `'Roboto', sans-serif`,
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          backgroundColor: '#FFB300',
          color: '#121212',
          padding: '8px 16px',
          '&:hover': {
            backgroundColor: '#FF9800',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#121212',
          color: '#FFB300',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1E1E1E',
          color: '#FFB300',
        },
      },
    },
  },
});

export default theme;
