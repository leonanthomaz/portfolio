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
  FaRocket,
  FaLightbulb,
} from 'react-icons/fa';
import { Title } from '../../styles/GlobalStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';

// Componente estilizado para o container principal
const ExperiencesContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4, 2),
  width: '100%',
  overflow: 'hidden',
}));

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
      'Participei do desenvolvimento de aplicações web com HTML, CSS e JavaScript. Trabalhei com boas práticas de SEO e monitoramento com Google Analytics, contribuindo para o desempenho e usabilidade dos sistemas.',
    animation: 'animate__fadeInRight',
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    title: 'MetrôRio',
    subtitle: 'Analista de Sistemas Jr. • 2023',
    description:
      'Contribuí na integração de pagamentos via Pix ao sistema de bilhetagem. Desenvolvi scripts de automação em Python e batch, atuei com manutenção de dados em Oracle e SQL Server, e participei do monitoramento de servidores e rotinas críticas.',
    animation: 'animate__fadeInLeft',
  },
  {
    id: 3,
    icon: <FaProjectDiagram />,
    title: 'Freelancer',
    subtitle: 'Programador & Suporte Técnico • 2024',
    description:
      'Atuei em projetos diversos de automação e suporte. Criei scripts Python para scraping de dados, envio de e-mails e manipulação de planilhas. Desenvolvi chatbots com NLP (OpenAI) e automatizações internas. Também atendi comércios locais, atuando no suporte técnico, controle de caixa e operação básica de loja.',
    animation: 'animate__fadeInRight',
  },
  {
    id: 4,
    icon: <FaRocket />,
    title: 'Projeto Thomaggio',
    subtitle: 'Sistema completo de pedidos • 2025',
    description:
      'Desenvolvi do zero uma aplicação completa para gestão de pedidos, com frontend em React + TypeScript, backend em FastAPI, painel administrativo, integração com Pix (via Mercado Pago) e impressão de comandas em 58mm. Projeto disponível em: https://thomaggio.vercel.app/',
    animation: 'animate__fadeInLeft',
  },
  {
    id: 5,
    icon: <FaLightbulb />,
    title: 'Sempre aprendendo',
    subtitle: 'Atualmente',
    description:
      'Buscando evoluir constantemente por meio de novos projetos, estudos práticos e desafios reais.',
    animation: 'animate__fadeInUp',
    centerText: true,
  },
];

export const Experiences: React.FC = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <ExperiencesContainer id="experiences">
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <Title>Experiência</Title>
      </AnimationOnScroll>
      
      {isLargeScreen ? (
        // Layout para telas grandes (web) - cards alternados
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
                  maxWidth: '700px', // aumentei de 500px pra 700px
                  paddingY: 2,
                  display: 'flex',
                  justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end', // mantém alternado
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
        // Layout para telas pequenas (mobile) - todos os cards à direita
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
                          textAlign: 'left',
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
                          color: theme.palette.text.primary,
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
    </ExperiencesContainer>
  );
};