// components/ProjectModal.tsx
import React from 'react';
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Button,
  useTheme,
  alpha
} from '@mui/material';
import { Close as CloseIcon, OpenInNew as OpenInNewIcon, GitHub as GitHubIcon } from '@mui/icons-material';
import { Projeto } from '../../types/projects';
import { TechnologyPill } from '../../styles/ProjectsStyles';

interface ProjectModalProps {
  open: boolean;
  projeto: Projeto | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ open, projeto, onClose }) => {
  const theme = useTheme();

  const renderTechnologyChips = (technologyString: string) => {
    return technologyString.split(', ').map((tech, index) => (
      <TechnologyPill key={index} label={tech} size="small" />
    ));
  };

  if (!projeto) return null;

  return (
    <Modal open={open} onClose={onClose} closeAfterTransition>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: 700,
        backgroundColor: theme.palette.background.default,
        border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
        borderRadius: '20px',
        boxShadow: `0 15px 40px ${alpha(theme.palette.primary.main, 0.25)}`,
        padding: theme.spacing(4),
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '90vh',
        [theme.breakpoints.down('sm')]: { padding: theme.spacing(3), width: '95%' },
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3, gap: 1 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: theme.palette.text.primary, mb: 0.5 }}>
              {projeto.title}
            </Typography>
            <Typography variant="h6" color="primary" sx={{ fontWeight: 'medium' }}>
              {projeto.subtitle}
            </Typography>
            <Typography variant="body2" color="text.disabled" sx={{ mt: 1 }}>
              {projeto.date}
            </Typography>
          </Box>
          <IconButton 
            onClick={onClose}
            sx={{ 
              color: theme.palette.text.secondary,
              backgroundColor: alpha(theme.palette.text.secondary, 0.1),
              '&:hover': { backgroundColor: alpha(theme.palette.text.secondary, 0.2) }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {projeto.img && (
          <Box
            component="img"
            src={projeto.img}
            alt={projeto.title}
            sx={{
              width: '100%',
              borderRadius: '16px',
              mb: 3,
              objectFit: 'cover',
              maxHeight: '200px',
              boxShadow: `0 5px 15px ${alpha(theme.palette.common.black, 0.1)}`,
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        )}

        <Box sx={{
          overflowY: 'auto',
          pr: 1.5,
          '&::-webkit-scrollbar': { width: '8px' },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: alpha(theme.palette.primary.main, 0.5),
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: alpha(theme.palette.background.paper, 0.1),
          },
        }}>
          <Typography variant="body1" sx={{ color: theme.palette.text.primary, lineHeight: 1.7, mb: 3 }}>
            {projeto.description}
          </Typography>
          
          {projeto.technology && (
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1.5 }}>
                Tecnologias utilizadas
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {renderTechnologyChips(projeto.technology)}
              </Box>
            </Box>
          )}
        </Box>

        <Box sx={{ 
          mt: 3, 
          gap: 2, 
          justifyContent: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
          display: 'flex'
        }}>
          {projeto.url && (
            <Button
              variant="contained"
              startIcon={<OpenInNewIcon />}
              href={projeto.url}
              target="_blank"
              sx={{
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: '10px',
                padding: '12px 24px',
                fontSize: '1rem',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: `0 6px 15px ${alpha(theme.palette.primary.main, 0.3)}`,
                },
              }}
            >
              Ver Projeto
            </Button>
          )}
          {projeto.github && (
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              href={projeto.github}
              target="_blank"
              sx={{
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: '10px',
                padding: '12px 24px',
                fontSize: '1rem',
                transition: 'all 0.2s ease-in-out',
                borderWidth: '2px',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  borderWidth: '2px',
                  borderColor: theme.palette.primary.main,
                  backgroundColor: alpha(theme.palette.primary.main, 0.05),
                  boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.2)}`,
                },
              }}
            >
              Ver Código
            </Button>
          )}
        </Box>
      </Box>
    </Modal>
  );
};