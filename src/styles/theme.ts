import { createTheme, alpha } from '@mui/material/styles';

// Definição do tema principal
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFEB3B',
      light: '#FFF59D',
      dark: '#FBC02D',
      contrastText: '#121212',
    },
    secondary: {
      main: '#ffffff',
      light: '#f5f5f5',
      dark: '#e0e0e0',
      contrastText: '#121212',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#ffffff',
      secondary: '#B0B0B0',
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        body: {
          backgroundColor: '#121212',
          color: '#ffffff',
          fontFamily: `'Roboto', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: `'Roboto', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
        },
        '@media (max-width: 600px)': {
          body: {
            fontSize: '14px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          fontWeight: 600,
          padding: '8px 24px',
          transition: 'all 0.3s ease',
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            backgroundColor: '#FFEB3B',
            color: '#121212',
            '&:hover': {
              backgroundColor: '#FBC02D',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(255, 235, 59, 0.3)',
            },
          },
        },
      ],
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: alpha('#121212', 0.95),
          backdropFilter: 'blur(10px)',
          color: '#FFEB3B',
          boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1E1E1E',
          color: '#FFEB3B',
          borderRight: `1px solid ${alpha('#FFEB3B', 0.1)}`,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;