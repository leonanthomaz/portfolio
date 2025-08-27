import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

// Componente Title usando MUI styled
export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 700,
  marginBottom: '20px',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  color: theme.palette.primary.main,
  borderBottom: `3px solid ${theme.palette.primary.main}`,
  paddingBottom: '10px',
  display: 'inline-block',
  textAlign: 'left',
  width: '100%',

  [theme.breakpoints.down('xl')]: {
    fontSize: '1.5rem',
  },

  [theme.breakpoints.down('md')]: {
    fontSize: '1.25rem',
    textAlign: 'center',
  },
})) as typeof Typography;

// Você pode adicionar outros componentes estilizados aqui conforme necessário
export const SectionContainer = styled('section')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

export const ContentBox = styled('div')(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: theme.spacing(0, 3),
  
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 2),
  },
}));