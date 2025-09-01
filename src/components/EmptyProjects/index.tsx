// components/EmptyProjects.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { AiOutlineRobot } from 'react-icons/ai';
import { useTheme } from '@mui/material/styles';

export const EmptyProjects: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '50vh',
      color: theme.palette.text.secondary,
      gap: theme.spacing(2),
      gridColumn: '1 / -1',
    }}>
      <AiOutlineRobot size={70} color={theme.palette.primary.main} />
      <Typography variant="h6">
        Seção em construção.
      </Typography>
      <Typography variant="body1">
        Volte em breve para conferir meus projetos!
      </Typography>
    </Box>
  );
};