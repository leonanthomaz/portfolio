// components/ProjectCard.tsx
import React from 'react';
import {
  Card,
  CardActionArea,
  Typography,
  Box,
  Chip,
  useTheme,
  alpha
} from '@mui/material';
import { AiOutlineRobot } from 'react-icons/ai';
import { Projeto } from '../../types/projects';
import { StatusChip, ProjectCardMedia, CardContentStyled } from '../../styles/ProjectsStyles';

interface ProjectCardProps {
  projeto: Projeto;
  onOpen: (projeto: Projeto) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ projeto, onOpen }) => {
  const theme = useTheme();

  return (
    <Card sx={{
      position: 'relative',
      background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.95)} 0%, ${alpha(theme.palette.background.paper, 0.85)} 100%)`,
      borderRadius: '20px',
      transition: 'all 0.3s ease-in-out',
      boxShadow: `0 8px 25px ${alpha(theme.palette.common.black, 0.1)}`,
      overflow: 'hidden',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: `0 15px 35px ${alpha(theme.palette.primary.main, 0.15)}`,
        '& .project-image': { transform: 'scale(1.05)' },
      },
    }}>
      {projeto.isSandbox && (
        <Chip
          label="Sandbox"
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            fontWeight: 'bold',
            fontSize: '0.7rem',
            zIndex: 2,
            backgroundColor: alpha(theme.palette.primary.main, 0.85),
            color: theme.palette.common.black,
            backdropFilter: 'blur(5px)',
          }}
          icon={<AiOutlineRobot size={14} />}
        />
      )}

      {projeto.status && (
        <StatusChip 
          label={
            projeto.status === 'finalizado' ? 'Finalizado' :
            projeto.status === 'em_construcao' ? 'Em construção' : 'Em análise'
          }
          size="small"
          status={projeto.status}
        />
      )}

      <CardActionArea onClick={() => onOpen(projeto)} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <ProjectCardMedia
          className="project-image"
          image={projeto.img}
          title={projeto.title}
        />
        <CardContentStyled>
          <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>
            {projeto.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, flexGrow: 1 }}>
            {projeto.subtitle}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
            <Typography variant="caption" color="text.disabled">
              {projeto.date}
            </Typography>
            {projeto.technology && (
              <Typography variant="caption" color="primary" sx={{ fontWeight: 'medium' }}>
                {projeto.technology.split(', ')[0]}
              </Typography>
            )}
          </Box>
        </CardContentStyled>
      </CardActionArea>
    </Card>
  );
};