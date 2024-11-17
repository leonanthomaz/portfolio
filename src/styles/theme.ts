import { createTheme } from '@mui/material/styles';

// Criação do tema customizado
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFEB3B', // Cor amarela
    },
    secondary: {
      main: '#F44336', // Cor secundária, um tom de vermelho para contraste
    },
    background: {
      default: '#1A1A1A', // Novo fundo mais suave (preto fosco)
      paper: '#2C2C2C', // Cor de fundo dos elementos
    },
    text: {
      primary: '#fff', // Cor do texto em branco
    },
  },
  typography: {
    fontFamily: `'Roboto', sans-serif`, // Fonte padrão
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
          backgroundColor: '#FFEB3B',
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
          color: '#FFEB3B',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1A1A1A',
          color: '#FFEB3B',
        },
      },
    },
  },
});

export default theme;
