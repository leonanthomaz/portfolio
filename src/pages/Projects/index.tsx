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
  useTheme,
  Stack,
  Chip
} from '@mui/material';
import { Close as CloseIcon, OpenInNew as OpenInNewIcon, GitHub as GitHubIcon } from '@mui/icons-material';
import { projetosData, Projeto } from '../../data/portfolio';
import { Title } from '../../styles/GlobalStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { AiOutlineRobot } from 'react-icons/ai';

// Componentes estilizados
const ProjectsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 2),
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}));

const ProjectsGrid = styled(Box)(({ theme }) => ({
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

const ProjectCard = styled(Card)(({ theme }) => ({
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
    
    '& .project-image': {
      transform: 'scale(1.05)',
    },
  },
}));

const ProjectCardMedia = styled(CardMedia)(({}) => ({
  height: 200,
  objectFit: 'cover',
  transition: 'transform 0.5s ease',
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px',
}));

const StatusChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: 12,
  right: 12,
  fontWeight: 'bold',
  fontSize: '0.7rem',
  zIndex: 2,
  backdropFilter: 'blur(10px)',
  backgroundColor: alpha(theme.palette.background.paper, 0.8),
}));

const CardContentStyled = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(2.5),
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const EmptySection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50vh',
  color: theme.palette.text.secondary,
  gap: theme.spacing(2),
  gridColumn: '1 / -1',
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
  borderRadius: '20px',
  boxShadow: `0 15px 40px ${alpha(theme.palette.primary.main, 0.25)}`,
  padding: theme.spacing(4),
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '90vh',
  
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    width: '95%',
  },
}));

const ModalImage = styled('img')(({ theme }) => ({
  width: '100%',
  borderRadius: '16px',
  marginBottom: theme.spacing(3),
  objectFit: 'cover',
  maxHeight: '320px',
  boxShadow: `0 5px 15px ${alpha(theme.palette.common.black, 0.1)}`,
}));

const ModalHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(3),
  gap: theme.spacing(1),
}));

const ModalContent = styled(Box)(({ theme }) => ({
  overflowY: 'auto',
  paddingRight: theme.spacing(1.5),
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

const ModalActions = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(3),
  gap: theme.spacing(2),
  justifyContent: 'center',
  
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const TechnologyPill = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.main,
  fontWeight: '500',
  fontSize: '0.75rem',
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

  const getProjectsByTab = () => {
    const tabMapping: (keyof typeof projetosData)[] = [
      'features',
      'backend',
      'dados',
      'automacao',
      'ia',
    ];
    
    if (activeTab === 5) {
      return [...projetosData.features, ...projetosData.backend, ...projetosData.dados];
    }
    
    return projetosData[tabMapping[activeTab]] || [];
  };

  const renderProjects = () => {
    const projects = getProjectsByTab() as Projeto[];

    if (!projects || projects.length === 0) {
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

    return projects.map((projeto) => (
       <ProjectCard>
          {projeto.status && (
            <StatusChip 
              label={projeto.status === 'finalizado' ? 'Finalizado' : 'Em construção'} 
              size="small"
              color={projeto.status === 'finalizado' ? 'success' : 'warning'}
            />
          )}
          <CardActionArea onClick={() => handleOpen(projeto)} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
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
        </ProjectCard>
    ));
  };

  const renderTechnologyChips = (technologyString: string) => {
    return technologyString.split(', ').map((tech, index) => (
      <TechnologyPill key={index} label={tech} size="small" />
    ));
  };

  return (
    <ProjectsContainer id="projects">
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
        <Title>Meus Projetos</Title>
      </AnimationOnScroll>

      <AppBar
        position="static"
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          marginBottom: theme.spacing(4),
          maxWidth: 1000,
          width: '100%',
        }}
      >
        <Toolbar sx={{ justifyContent: 'center', px: { xs: 0, sm: 2 } }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: theme.palette.primary.main,
                height: 3,
                borderRadius: 3,
              },
              '& .MuiTab-root': {
                color: theme.palette.text.secondary,
                fontWeight: 'bold',
                textTransform: 'none',
                fontSize: '1rem',
                minWidth: 'auto',
                px: 2.5,
                py: 1.5,
                '&.Mui-selected': {
                  color: theme.palette.primary.main,
                },
                '&:hover': {
                  color: theme.palette.primary.main,
                  backgroundColor: alpha(theme.palette.primary.main, 0.05),
                  borderRadius: '8px',
                },
              },
            }}
          >
            <Tab label="Destaque" />
            <Tab label="Backend" />
            <Tab label="Dados" />
            <Tab label="Automação" />
            <Tab label="IA" />
            <Tab label="Full Stack" />
          </Tabs>
        </Toolbar>
      </AppBar>

      <ProjectsGrid key={activeTab}>
        {renderProjects()}
      </ProjectsGrid>

      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <ModalBox>
          {selectedProjeto && (
            <>
              <ModalHeader>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: theme.palette.text.primary, mb: 0.5 }}>
                    {selectedProjeto.title}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ fontWeight: 'medium' }}>
                    {selectedProjeto.subtitle}
                  </Typography>
                  <Typography variant="body2" color="text.disabled" sx={{ mt: 1 }}>
                    {selectedProjeto.date}
                  </Typography>
                </Box>
                <IconButton 
                  onClick={handleClose} 
                  aria-label="Fechar modal"
                  sx={{ 
                    color: theme.palette.text.secondary,
                    backgroundColor: alpha(theme.palette.text.secondary, 0.1),
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.text.secondary, 0.2),
                    }
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </ModalHeader>

              {selectedProjeto.img && (
                <ModalImage 
                  src={selectedProjeto.img} 
                  alt={selectedProjeto.title}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              )}

              <ModalContent>
                <Typography variant="body1" sx={{ color: theme.palette.text.primary, lineHeight: 1.7, mb: 3 }}>
                  {selectedProjeto.description}
                </Typography>
                
                {selectedProjeto.technology && (
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1.5 }}>
                      Tecnologias utilizadas
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                      {renderTechnologyChips(selectedProjeto.technology)}
                    </Box>
                  </Box>
                )}
              </ModalContent>

              <ModalActions direction={{ xs: 'column', sm: 'row' }}>
                {selectedProjeto.url && (
                  <Button
                    variant="contained"
                    startIcon={<OpenInNewIcon />}
                    href={selectedProjeto.url}
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
                {selectedProjeto.github && (
                  <Button
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    href={selectedProjeto.github}
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
              </ModalActions>
            </>
          )}
        </ModalBox>
      </Modal>
    </ProjectsContainer>
  );
};