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
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  styled,
  alpha,
  useTheme
} from '@mui/material';
import { Close as CloseIcon, OpenInNew as OpenInNewIcon, GitHub as GitHubIcon } from '@mui/icons-material';
import { projetosData, Projeto } from '../../data/portfolio';
import { Title } from '../../styles/GlobalStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { AiOutlineRobot } from 'react-icons/ai';

// Componentes estilizados
const ProjectsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 2),
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}));

const ProjectsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  justifyContent: 'center',
  alignItems: 'stretch',
  gap: theme.spacing(4),
  width: '100%',
  maxWidth: 1200,
  marginTop: theme.spacing(3),
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  background: alpha(theme.palette.background.paper, 0.7),
  borderRadius: '16px',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  boxShadow: `0 4px 12px ${alpha(theme.palette.background.paper, 0.2)}`,
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: `0 12px 30px ${alpha(theme.palette.background.paper, 0.4)}`,
  },
}));

const ProjectCardMedia = styled(CardMedia)(({}) => ({
  height: 200,
  objectFit: 'cover',
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '16px',
}));

const EmptySection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50vh',
  color: theme.palette.text.secondary,
  gap: theme.spacing(2),
}));

const ModalBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 700,
  backgroundColor: theme.palette.background.default,
  border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  borderRadius: '16px',
  boxShadow: `0 8px 30px ${alpha(theme.palette.primary.main, 0.3)}`,
  padding: theme.spacing(4),
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '90vh',
}));

const ModalImage = styled('img')(({ theme }) => ({
  width: '100%',
  borderRadius: '12px',
  marginBottom: theme.spacing(2),
  objectFit: 'cover',
  maxHeight: '350px',
}));

const ModalHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(2),
}));

const ModalContent = styled(Box)(({ theme }) => ({
  overflowY: 'auto',
  paddingRight: theme.spacing(1),
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: alpha(theme.palette.primary.main, 0.5),
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: alpha(theme.palette.background.paper, 0.1),
  },
}));

const ModalActions = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  display: 'flex',
  gap: theme.spacing(2),
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));


export const Projects = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedProjeto, setSelectedProjeto] = useState<Projeto | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);
  const theme = useTheme();

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
      'java',
      'python',
      'react',
      'dados'
    ];
    const section = projetosData[sections[activeTab]];

    if (!section || section.length === 0) {
      return (
        <EmptySection>
          <AiOutlineRobot size={70} color={theme.palette.primary.main} />
          <Typography variant="h6">
            Seção em construção.
          </Typography>
          <Typography variant="body1">
            Volte em breve para conferir meus projetos!
          </Typography>
        </EmptySection>
      );
    }

    return section?.map((projeto: Projeto, index: number) => (
      <AnimationOnScroll 
        key={projeto.id} 
        animateIn="animate__fadeInUp" 
        delay={100 * (index % 3)}
      >
        <ProjectCard onClick={() => handleOpen(projeto)}>
          <CardActionArea>
            <ProjectCardMedia
              image={projeto.img}
              title={projeto.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                {projeto.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {projeto.subtitle}
              </Typography>
              <Typography variant="caption" display="block" color="text.disabled" sx={{ marginTop: 1 }}>
                {projeto.date}
              </Typography>
            </CardContent>
          </CardActionArea>
        </ProjectCard>
      </AnimationOnScroll>
    ));
  };

  return (
    <ProjectsContainer id="projects">
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <Title>Meus Projetos</Title>
      </AnimationOnScroll>

      <AppBar
        position="static"
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          marginBottom: theme.spacing(3),
        }}
      >
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: theme.palette.primary.main,
              },
              '& .MuiTab-root': {
                color: theme.palette.text.secondary,
                fontWeight: 'bold',
                textTransform: 'none',
                '&.Mui-selected': {
                  color: theme.palette.primary.main,
                },
              },
            }}
          >
            <Tab label="Destaque" />
            <Tab label="Python" />
            <Tab label="Dados" />
            <Tab label="React" />
            <Tab label="Java" />
          </Tabs>
        </Toolbar>
      </AppBar>

      <ProjectsGrid>
        {renderProjects()}
      </ProjectsGrid>

      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <ModalBox>
          {selectedProjeto && (
            <>
              <ModalHeader>
                <Box>
                  <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>
                    {selectedProjeto.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {selectedProjeto.subtitle}
                  </Typography>
                </Box>
                <IconButton onClick={handleClose} aria-label="Fechar modal" sx={{ color: theme.palette.text.secondary }}>
                  <CloseIcon />
                </IconButton>
              </ModalHeader>
              
              <ModalImage src={selectedProjeto.img2 || selectedProjeto.img} alt={selectedProjeto.title} />

              <ModalContent>
                <Typography variant="body1" sx={{ color: theme.palette.text.primary, lineHeight: 1.6 }}>
                  {selectedProjeto.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2, fontWeight: 'bold' }}>
                  Tecnologias: <span style={{ fontWeight: 'normal' }}>{selectedProjeto.technology}</span>
                </Typography>
              </ModalContent>
              
              <ModalActions>
                {selectedProjeto.url && (
                  <Button 
                    variant="contained" 
                    startIcon={<OpenInNewIcon />}
                    href={selectedProjeto.url} 
                    target="_blank"
                    sx={{
                      fontWeight: 600,
                      textTransform: 'none',
                      borderRadius: '8px',
                      padding: '10px 20px',
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        backgroundColor: theme.palette.primary.dark
                      },
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.getContrastText(theme.palette.primary.main),
                    }}
                  >
                    Ver Site
                  </Button>
                )}
                {selectedProjeto.github && (
                  <Button 
                    variant="outlined" 
                    startIcon={<GitHubIcon />}
                    href={selectedProjeto.github} 
                    target="_blank"
                    sx={{
                      fontWeight: 600,
                      textTransform: 'none',
                      borderRadius: '8px',
                      padding: '10px 20px',
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': { 
                        transform: 'scale(1.05)',
                        borderColor: theme.palette.primary.main, 
                        color: theme.palette.primary.main 
                      },
                      borderColor: theme.palette.text.secondary,
                      color: theme.palette.text.secondary,
                    }}
                  >
                    Ver GitHub
                  </Button>
                )}
              </ModalActions>
            </>
          )}
        </ModalBox>
      </Modal>
    </ProjectsContainer>
  );
};