import { alpha, Box, Button, Typography } from "@mui/material";
import styled from "styled-components";


export const ContentSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(5),
  marginTop: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    textAlign: 'left',
    alignItems: 'flex-start',
    gap: theme.spacing(8),
  },
}));

// Componente estilizado para a imagem
export const ProfileImage = styled('img')(({ theme }) => ({
  width: 200,
  height: 200,
  borderRadius: '50%',
  objectFit: 'cover',
  border: `4px solid ${alpha(theme.palette.primary.main, 0.4)}`,
  boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.2)}`,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

// Componente estilizado para o texto
export const AboutText = styled(Typography)(({ theme }) => ({
  lineHeight: 1.8,
  maxWidth: '800px',
  color: theme.palette.text.primary,
  fontWeight: 400,
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

// Componente estilizado para o botão
export const ContactButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: '12px 28px',
  fontSize: '1rem',
  fontWeight: 600,
  borderRadius: '8px',
  background: theme.palette.primary.main,
  color: theme.palette.getContrastText(theme.palette.primary.main),
  boxShadow: `0 8px 30px ${alpha(theme.palette.primary.main, 0.3)}`,
  transition: 'all 0.3s ease',
  textTransform: 'none',
  fontFamily: "'Poppins', sans-serif",
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.5)}`,
    background: theme.palette.primary.dark,
  },
}));