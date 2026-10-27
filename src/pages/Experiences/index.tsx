import React from 'react';
import { Box, Typography, styled, useTheme, alpha, useMediaQuery } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  timelineOppositeContentClasses,
} from '@mui/lab';
import {
  FaCode,
  FaLaptopCode,
  FaProjectDiagram,
  FaLightbulb,
} from 'react-icons/fa';
import { ContentBox, SectionContainer, Title } from '../../styles/GlobalStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FloatingBackgroundExperience } from '../../utils/FloatingEffect/FloatingBackgroundExperience';

// Componente estilizado para o TimelineDot
const CustomTimelineDot = styled(TimelineDot)(({ theme }) => ({
  width: 'clamp(40px, 8vw, 60px)',
  height: 'clamp(40px, 8vw, 60px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.getContrastText(theme.palette.secondary.contrastText),
  backgroundColor: alpha(theme.palette.primary.main, 0.2),
  border: `2px solid ${theme.palette.primary.main}`,
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: `0 0 15px ${alpha(theme.palette.primary.main, 0.7)}`,
  },
}));

// Componente estilizado para o TimelineContent
const CustomTimelineContent = styled(TimelineContent)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  backgroundColor: alpha(theme.palette.background.paper, 0.7),
  borderRadius: '8px',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  boxShadow: `0 4px 12px ${alpha(theme.palette.background.paper, 0.2)}`,
  [`&.${timelineOppositeContentClasses.root}`]: {
    padding: theme.spacing(2, 3),
  },
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 8px 20px ${alpha(theme.palette.background.paper, 0.4)}`,
  },
}));

const experiences = [
  {
    id: 1,
    icon: <FaCode />,
    title: 'Mundiware',
    subtitle: 'Estágio em Front-End • 2022',
    description:
      'Desenvolvimento de aplicações web com HTML, CSS e JavaScript, com foco em interfaces responsivas e integração com APIs externas. Implementação de SEO e monitoramento com Google Analytics para otimização de performance e usabilidade.',
    animation: 'animate__fadeInRight',
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    title: 'MetrôRio',
    subtitle: 'Analista de Sistemas • 2023',
    description:
      'Integração de pagamentos Pix no sistema de bilhetagem. Automação de tarefas críticas com Python e Windows Batch, além de gestão e otimização de grandes volumes de dados em SQL Server e Oracle.',
    animation: 'animate__fadeInLeft',
  },
  {
    id: 3,
    icon: <FaProjectDiagram />,
    title: 'FedCorp',
    subtitle: 'Desenvolvedor Fullstack • 2025 – 2026',
    description:
      'Desenvolvimento de sistemas corporativos com Python (FastAPI e Django), React e Firebird. Criação do FedHub (gateway de integração com sistemas legados) e do FedCorp Pay (plataforma de integrações bancárias, webhooks e boletos). Liderança da integração com o Santander via certificado digital A1 (mTLS/OAuth), com suporte multiempresa e atuação em produção.',
    animation: 'animate__fadeInRight',
  },
  {
    id: 4,
    icon: <FaLightbulb />,
    title: 'Evolução Contínua',
    subtitle: 'Sempre aprendendo',
    description:
      'Foco contínuo em evoluir através de projetos desafiadores, estudos práticos e implementação de tecnologias emergentes.',
    animation: 'animate__fadeInLeft',
    centerText: true,
  },
];

export const Experiences: React.FC = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <SectionContainer id="experiences">
      <FloatingBackgroundExperience />
      
      <ContentBox sx={{ zIndex: 2 }}>
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <Title>Experiências</Title>
        </AnimationOnScroll>
        
        {isLargeScreen ? (
          // Layout para telas grandes (web) - cards alternados (zig zag)
          <Timeline
            position="alternate"
            sx={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: 0,
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
              },
            }}
          >
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.id}>
                <TimelineSeparator>
                  <CustomTimelineDot>{exp.icon}</CustomTimelineDot>
                  {index < experiences.length - 1 && (
                    <TimelineConnector
                      sx={{ 
                        backgroundColor: theme.palette.primary.main, 
                        width: '2px',
                        height: '100px'
                      }}
                    />
                  )}
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    width: '100%',
                    maxWidth: '700px',
                    paddingY: 2,
                    display: 'flex',
                    justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                  }}
                >
                  <AnimationOnScroll animateIn={exp.animation}>
                    <CustomTimelineContent
                      sx={{
                        width: '100%',
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: theme.palette.primary.main,
                          textAlign: index % 2 === 0 ? 'left' : 'right',
                        }}
                      >
                        {exp.title}
                      </Typography>
                      {exp.subtitle && (
                        <Typography
                          color="text.secondary"
                          sx={{ 
                            fontSize: '1rem',
                            textAlign: index % 2 === 0 ? 'left' : 'right',
                          }}
                        >
                          {exp.subtitle}
                        </Typography>
                      )}
                      <Typography
                        variant="body2"
                        sx={{
                          marginTop: 1.5,
                          fontSize: '1rem',
                          color: theme.palette.text.primary,
                          lineHeight: 1.6,
                          textAlign: 'left',
                        }}
                      >
                        {exp.description}
                      </Typography>
                    </CustomTimelineContent>
                  </AnimationOnScroll>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        ) : (
          // Layout para telas pequenas (mobile)
          <Box sx={{ 
            width: '100%', 
            maxWidth: '800px',
            margin: '0 auto',
            padding: { xs: '0 16px', sm: '0 24px' }
          }}>
            <Timeline
              sx={{
                padding: 0,
                margin: 0,
                '& .MuiTimelineItem-root:before': {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              {experiences.map((exp, index) => (
                <TimelineItem key={exp.id}>
                  <TimelineSeparator>
                    <CustomTimelineDot>{exp.icon}</CustomTimelineDot>
                    {index < experiences.length - 1 && (
                      <TimelineConnector
                        sx={{ 
                          backgroundColor: theme.palette.primary.main, 
                          width: '2px',
                          height: '80px'
                        }}
                      />
                    )}
                  </TimelineSeparator>
                  <TimelineContent
                    sx={{
                      padding: '12px 16px',
                      marginBottom: 2,
                      flex: 1,
                      maxWidth: '100%',
                      marginLeft: 2,
                    }}
                  >
                    <AnimationOnScroll animateIn={exp.animation}>
                      <CustomTimelineContent
                        sx={{
                          width: '100%',
                          maxWidth: '100%',
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 700,
                            color: theme.palette.primary.main,
                          }}
                        >
                          {exp.title}
                        </Typography>
                        {exp.subtitle && (
                          <Typography
                            color="text.secondary"
                            sx={{ 
                              fontSize: '0.875rem',
                              marginTop: 0.5
                            }}
                          >
                            {exp.subtitle}
                          </Typography>
                        )}
                        <Typography
                          variant="body2"
                          sx={{
                            marginTop: 1.5,
                            fontSize: '0.875rem',
                            lineHeight: 1.6,
                          }}
                        >
                          {exp.description}
                        </Typography>
                      </CustomTimelineContent>
                    </AnimationOnScroll>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Box>
        )}
      </ContentBox>
    </SectionContainer>
  );
};