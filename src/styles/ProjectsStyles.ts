// styles/ProjectsStyles.ts
import { Box, alpha, styled } from '@mui/material';
import { Chip } from '@mui/material';
import { CardMedia } from '@mui/material';

export const ProjectsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
  justifyContent: 'center',
  alignItems: 'stretch',
  gap: theme.spacing(4),
  width: '100%',
  maxWidth: 1300,
  marginTop: theme.spacing(4),
  padding: theme.spacing(0, 2),
  
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: theme.spacing(3),
  },
  
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(2.5),
    padding: theme.spacing(0, 1),
  },
}));

export const StatusChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'status',
})<{ status: string }>(({ theme, status }) => {
  let bg = alpha(theme.palette.background.paper, 0.8);
  let color = theme.palette.text.primary;

  if (status === 'finalizado') {
    bg = theme.palette.success.main;
    color = theme.palette.common.white;
  } else if (status === 'em_construcao') {
    bg = theme.palette.warning.main;
    color = theme.palette.common.white;
  } else if (status === 'em_analise') {
    bg = theme.palette.info.main;
    color = theme.palette.common.white;
  }

  return {
    position: 'absolute',
    top: 12,
    right: 12,
    fontWeight: 'bold',
    fontSize: '0.7rem',
    zIndex: 2,
    backdropFilter: 'blur(10px)',
    backgroundColor: bg,
    color: color,
  };
});

export const ProjectCardMedia = styled(CardMedia)<{ image?: string }>(({}) => ({
  height: 200,
  objectFit: 'cover',
  transition: 'transform 0.5s ease',
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px',
}));

export const CardContentStyled = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.5),
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

export const TechnologyPill = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.main,
  fontWeight: '500',
  fontSize: '0.75rem',
}));