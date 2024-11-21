import { createTheme } from '@mui/material/styles';

// Definição do tema principal
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
