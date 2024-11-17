import React, { useState } from 'react';
import { Box, Modal, Typography, IconButton, AppBar, Toolbar, Tab, Tabs } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';  // Importando o ícone de fechar
import { ProjetosContainer, ProjetoCard, ProjetoImage, ProjetoDetails, ProjetoTitle, ProjetoSubtitle, ProjetoDescription, LinkButton, ModalContent } from './ProjetosStyles';
import { projetosData, Projeto } from '../../data/portfolio';
import { Title } from '../../styles/GlobalStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';

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

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const renderProjects = () => {
    const sections = ["destaque", "java", "react", "python", "mobile"];
    const section = projetosData[sections[activeTab]];  // Acessa a chave com base no `activeTab`
  
    return section?.map((projeto: Projeto) => (
      <ProjetoCard key={projeto.id} onClick={() => handleOpen(projeto)}>
        <ProjetoImage src={projeto.img} alt={projeto.title} />
        <ProjetoDetails>
          <ProjetoTitle>{projeto.title}</ProjetoTitle>
          <ProjetoSubtitle>{projeto.subtitle}</ProjetoSubtitle>
          <ProjetoDescription>{projeto.description}</ProjetoDescription>
        </ProjetoDetails>
      </ProjetoCard>
    ));
  };
  

  return (
    <ProjetosContainer>
      <AnimationOnScroll animateIn="animate__backInLeft">
        <Title>Meus Projetos</Title>
      </AnimationOnScroll>

      <AppBar position="static" 
      sx={{ backgroundColor: 'transparent', 
      boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', 
          justifyContent: 'center', width: '100%' }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: 'auto', // Ajusta a largura dos tabs
              minWidth: 0,   // Impede que os Tabs se expandam para preencher toda a largura
            }}
            indicatorColor="transparent" // Remove a linha de indicação
          >
            <Tab label="Destaque" sx={{ color: activeTab === 0 ? '#ffeb3b' : '#ccc', '&:hover': { color: '#ffeb3b' } }} />
            <Tab label="Java" sx={{ color: activeTab === 1 ? '#ffeb3b' : '#ccc', '&:hover': { color: '#ffeb3b' } }} />
            <Tab label="React" sx={{ color: activeTab === 2 ? '#ffeb3b' : '#ccc', '&:hover': { color: '#ffeb3b' } }} />
            <Tab label="Python" sx={{ color: activeTab === 3 ? '#ffeb3b' : '#ccc', '&:hover': { color: '#ffeb3b' } }} />
            <Tab label="Mobile" sx={{ color: activeTab === 4 ? '#ffeb3b' : '#ccc', '&:hover': { color: '#ffeb3b' } }} />
          </Tabs>
        </Toolbar>
      </AppBar>


      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
        {renderProjects()}
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box sx={{
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
          position: 'fixed',  // Mudamos para 'fixed' para centralizar corretamente
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',  // Centralização vertical e horizontal
          zIndex: 1300,  // Garante que o modal fique sobre outros elementos
        }}>
          {selectedProjeto && (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Typography variant="h4">{selectedProjeto.title}</Typography>
                <IconButton onClick={handleClose} sx={{ color: '#ffeb3b' }}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Typography variant="h6" color="textSecondary">{selectedProjeto.subtitle}</Typography>
              <img src={selectedProjeto.img2} alt={selectedProjeto.title} style={{ width: '100%', borderRadius: 8, marginTop: 20 }} />
              <Box sx={{ maxHeight: 400, overflowY: 'auto', marginTop: 2 }}>
                <Typography variant="body1" sx={{ color: '#242424'}}>{selectedProjeto.description}</Typography>
              </Box>
              <Typography variant="body2" sx={{ marginTop: 2 }} color="textSecondary">Tecnologias: {selectedProjeto.technology}</Typography>
              <Box sx={{ marginTop: 3, display: 'flex', justifyContent: 'space-between', margin: 5 }}>
                {selectedProjeto.url && (
                  <LinkButton href={selectedProjeto.url} target="_blank" variant="outlined">
                    Ver Site
                  </LinkButton>
                )}
                {selectedProjeto.github && (
                  <LinkButton href={selectedProjeto.github} target="_blank" variant="outlined">
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