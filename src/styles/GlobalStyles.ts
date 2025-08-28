// styles/GlobalStyles.ts
import { styled } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 700,
  marginBottom: '20px',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  color: theme.palette.primary.main,
  borderBottom: `3px solid ${theme.palette.primary.main}`,
  paddingBottom: '10px',
  textAlign: 'center', // 👈 todos os títulos centralizados por padrão
  width: '100%',       // ocupa a linha toda
  display: 'block',    // força comportamento previsível

  [theme.breakpoints.down('xl')]: {
    fontSize: '1.5rem',
  },

  [theme.breakpoints.down('md')]: {
    fontSize: '1.25rem',
  },
}));

export const SectionContainer = styled('section')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // centraliza o conteúdo
  textAlign: 'center',

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1200px',   // 👈 aqui sim tu controla a largura global
  margin: '0 auto',
  padding: theme.spacing(0, 3),

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 2),
  },
}));
