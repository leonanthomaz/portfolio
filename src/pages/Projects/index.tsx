// Projects.tsx
import React, { useState, useMemo } from 'react';
import { alpha, Box, IconButton, useTheme } from '@mui/material';
import { HelpOutline as HelpOutlineIcon } from '@mui/icons-material';
import { projetosData } from '../../data/portfolio';
import { ContentBox, SectionContainer, Title } from '../../styles/GlobalStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FloatingBackgroundProjects } from '../../utils/FloatingEffect/FloatingBackgroundProjects';
import { Projeto } from '../../types/projects';

// Componentes
import { ProjectCard } from '../../components/ProjectCard';
import { ProjectModal } from '../../components/ProjectModal';
import { HelpDialog } from '../../components/HelpDialog';
import { ProjectsTabs } from '../../components/ProjectsTabs';
import { EmptyProjects } from '../../components/EmptyProjects';

// Estilos
import { ProjectsGrid } from '../../styles/ProjectsStyles';

export const Projects: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedProjeto, setSelectedProjeto] = useState<Projeto | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [openHelp, setOpenHelp] = useState(false);
  const theme = useTheme();

  const handleOpenModal = (projeto: Projeto) => {
    setSelectedProjeto(projeto);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProjeto(null);
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const projects = useMemo(() => {
    const tabMapping: (keyof typeof projetosData)[] = [
      'features',
      'automacao',
      'api',
      'ia',
      'dados',
      'frontend'
    ];
    
    if (activeTab === 6) {
      return [...projetosData.features, ...projetosData.api, ...projetosData.dados];
    }
    
    return projetosData[tabMapping[activeTab]] || [];
  }, [activeTab]);

  const hasProjects = projects && projects.length > 0;

  return (
    <SectionContainer id="projects">
      <FloatingBackgroundProjects />
      
      <ContentBox sx={{ zIndex: 2 }}>
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <Title>Meus Projetos</Title>
            <IconButton 
              onClick={() => setOpenHelp(true)}
              sx={{
                color: theme.palette.primary.main,
                '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.1) }
              }}
              size="small"
            >
              <HelpOutlineIcon />
            </IconButton>
          </Box>
        </AnimationOnScroll>

        <ProjectsTabs activeTab={activeTab} onTabChange={handleTabChange} />

        <ProjectsGrid key={activeTab}>
          {hasProjects ? (
            (projects as Projeto[]).map((projeto) => (
              <ProjectCard
                key={projeto.id}
                projeto={projeto}
                onOpen={handleOpenModal}
              />
            ))
          ) : (
            <EmptyProjects />
          )}
        </ProjectsGrid>

        <HelpDialog open={openHelp} onClose={() => setOpenHelp(false)} />
        
        <ProjectModal
          open={openModal}
          projeto={selectedProjeto}
          onClose={handleCloseModal}
        />
      </ContentBox>
    </SectionContainer>
  );
};