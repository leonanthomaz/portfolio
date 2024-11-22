import React, { useState } from 'react';
import {
  Box,
  Modal,
  Typography,
  IconButton,
  AppBar,
  Toolbar,
  Tab,
  Tabs,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import {
  ProjetosContainer,
  ProjetoCard,
  ProjetoImage,
  ProjetoDetails,
  ProjetoTitle,
  ProjetoSubtitle,
  ProjetoDescription,
  LinkButton,
  ProjetoEmpty,
} from './ProjetosStyles';
import { projetosData, Projeto } from '../../data/portfolio';
import { Title } from '../../styles/GlobalStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import theme from '../../styles/theme';
import { AiOutlineRobot } from 'react-icons/ai';

export const Projects = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedProjeto, setSelectedProjeto] = useState<Projeto | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleOpen = (projeto: Projeto) => {
    setSelectedProjeto(projeto);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProjeto(null);
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const renderProjects = () => {
    const sections: (keyof typeof projetosData)[] = [
      'destaque',
      'biomedicina',
      'python',
      'react',
      'java',
    ];
    const section = projetosData[sections[activeTab]];

    if (!section || section.length === 0) {
      return (
        <Typography variant="body1" color="textSecondary">
          <ProjetoEmpty>
            <AiOutlineRobot size={50} color="#666" />
            <p>Seção em construção. Volte em breve para conferir meus projetos!</p>
          </ProjetoEmpty>
        </Typography>
      );
    }

    return section?.map((projeto: Projeto) => (
      <ProjetoCard key={projeto.id} onClick={() => handleOpen(projeto)}>
        <ProjetoImage src={projeto.img} alt={projeto.title} loading="lazy" />
        <ProjetoDetails>
          <ProjetoTitle>{projeto.title}</ProjetoTitle>
          <ProjetoSubtitle>{projeto.subtitle}</ProjetoSubtitle>
          <ProjetoDescription>{projeto.date}</ProjetoDescription>
        </ProjetoDetails>
      </ProjetoCard>
    ));
  };

  return (
    <ProjetosContainer>
      <AnimationOnScroll animateIn="animate__backInLeft">
        <Title>Meus Projetos</Title>
      </AnimationOnScroll>

      <AppBar
        position="static"
        sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: 'auto',
              minWidth: 0,
            }}
            indicatorColor="secondary"
            textColor="inherit"
          >
            <Tab
              label="Destaque"
              sx={{
                color: activeTab === 0 ? theme.palette.primary.main : theme.palette.text.primary,
                '&:hover': { color: theme.palette.primary.main },
              }}
            />
            <Tab
              label="Biomedicina"
              sx={{
                color: activeTab === 1 ? theme.palette.primary.main : theme.palette.text.primary,
                '&:hover': { color: theme.palette.primary.main },
              }}
            />
            <Tab
              label="Python"
              sx={{
                color: activeTab === 2 ? theme.palette.primary.main : theme.palette.text.primary,
                '&:hover': { color: theme.palette.primary.main },
              }}
            />
            <Tab
              label="React"
              sx={{
                color: activeTab === 3 ? theme.palette.primary.main : theme.palette.text.primary,
                '&:hover': { color: theme.palette.primary.main },
              }}
            />
            <Tab
              label="Java"
              sx={{
                color: activeTab === 4 ? theme.palette.primary.main : theme.palette.text.primary,
                '&:hover': { color: theme.palette.primary.main },
              }}
            />
            
          </Tabs>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '14px',
          gap: 4,
        }}
      >
        {renderProjects()}
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: '80%',
            maxWidth: 600,
            padding: 4,
            backgroundColor: '#fff',
            borderRadius: 2,
            boxShadow: 24,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1300,
          }}
        >
          {selectedProjeto && (
            <>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Typography variant="h4">{selectedProjeto.title}</Typography>
                <IconButton onClick={handleClose} aria-label="Fechar modal">
                  <CloseIcon sx={{ fontSize: '30px' }} />
                </IconButton>
              </Box>
              <Typography variant="h6" color="textSecondary">
                {selectedProjeto.subtitle}
              </Typography>
              <img
                src={selectedProjeto.img2 || selectedProjeto.img}
                alt={selectedProjeto.title}
                style={{ width: '100%', maxHeight: 300, borderRadius: 8, marginTop: 20, objectFit: 'cover' }}
              />
              <Box sx={{ maxHeight: 400, overflowY: 'auto', marginTop: 2 }}>
                <Typography variant="body1" sx={{ color: '#242424' }}>
                  {selectedProjeto.description}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{ marginTop: 2 }}
                color="textSecondary"
              >
                Tecnologias: {selectedProjeto.technology}
              </Typography>
              <Box
                sx={{
                  marginTop: 3,
                  display: 'flex',
                  gap: 1, // Reduz espaço entre os botões
                }}
              >
                {selectedProjeto.url && (
                  <LinkButton href={selectedProjeto.url} target="_blank">
                    Ver Site
                  </LinkButton>
                )}
                {selectedProjeto.github && (
                  <LinkButton href={selectedProjeto.github} target="_blank">
                    Ver GitHub
                  </LinkButton>
                )}
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </ProjetosContainer>
  );
};
