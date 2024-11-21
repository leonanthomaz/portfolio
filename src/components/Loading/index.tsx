// src/components/Loading.tsx
import { CircularProgress, Box } from '@mui/material';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(5px)',
        animation: `${fadeIn} 1s ease-in-out`,
      }}
    >
      <CircularProgress color="primary" sx={{ animation: `${fadeIn} 1s ease-in-out` }} />
    </Box>
  );
};

export default Loading;
