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

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Loading = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(5px)',
        animation: `${isVisible ? fadeIn : fadeOut} 1s ease-in-out`,
      }}
    >
      <CircularProgress color="primary" sx={{ animation: `${isVisible ? fadeIn : fadeOut} 1s ease-in-out` }} />
    </Box>
  );
};

export default Loading;
