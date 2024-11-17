// src/components/Loading.tsx
import { CircularProgress, Box } from '@mui/material';
import { keyframes } from '@emotion/react';

// Animação de fade-in
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Componente de loading com animação de transição
const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Fundo escuro com transparência
        backdropFilter: 'blur(5px)', // Efeito de desfoque no fundo
        animation: `${fadeIn} 1s ease-in-out`, // Animação de fade-in
      }}
    >
      <CircularProgress color="primary" sx={{ animation: `${fadeIn} 1s ease-in-out` }} />
    </Box>
  );
};

export default Loading;
