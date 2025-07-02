import React from 'react';
import { Box, Typography } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
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

export const Experiences: React.FC = () => {
  const experiences = [
    {
      id: 1,
      icon: <FaCode size={26} />,
      title: 'Mundiware',
      subtitle: 'Estágio em Front-End • 2022',
      description:
        'Participei do desenvolvimento de aplicações web com HTML, CSS e JavaScript. Trabalhei com boas práticas de SEO e monitoramento com Google Analytics, contribuindo para o desempenho e usabilidade dos sistemas.',
      animation: 'animate__fadeInRight',
    },
    {
      id: 2,
      icon: <FaLaptopCode size={26} />,
      title: 'MetrôRio',
      subtitle: 'Analista de Sistemas Jr. • 2023',
      description:
        'Contribuí na integração de pagamentos via Pix ao sistema de bilhetagem. Desenvolvi scripts de automação em Python e batch, atuei com manutenção de dados em Oracle e SQL Server, e participei do monitoramento de servidores e rotinas críticas.',
      animation: 'animate__fadeInLeft',
    },
    {
      id: 3,
      icon: <FaProjectDiagram size={26} />,
      title: 'Freelancer',
      subtitle: 'Programador & Suporte Técnico • 2024',
      description:
        'Atuei em projetos diversos de automação e suporte. Criei scripts Python para scraping de dados, envio de e-mails e manipulação de planilhas. Desenvolvi chatbots com NLP (OpenAI) e automatizações internas. Também atendi comércios locais, atuando no suporte técnico, controle de caixa e operação básica de loja.',
      animation: 'animate__fadeInRight',
    },
    {
      id: 4,
      icon: <FaRocket size={26} />,
      title: 'Projeto Thomaggio',
      subtitle: 'Sistema completo de pedidos • 2025',
      description:
        'Desenvolvi do zero uma aplicação completa para gestão de pedidos, com frontend em React + TypeScript, backend em FastAPI, painel administrativo, integração com Pix (via Mercado Pago) e impressão de comandas em 58mm. Projeto disponível em: https://thomaggio.vercel.app/',
      animation: 'animate__fadeInLeft',
    },
    {
      id: 5,
      icon: <FaLightbulb size={26} />,
      title: 'Sempre aprendendo',
      subtitle: 'Atualmente',
      description:
        'Buscando evoluir constantemente por meio de novos projetos, estudos práticos e desafios reais.',
      animation: 'animate__fadeInUp',
      centerText: true,
    },
  ];

  return (
    <Box sx={{ padding: 4, borderRadius: '8px' }}>
      <AnimationOnScroll animateIn="animate__fadeInLeft">
        <Title>Experiência</Title>
      </AnimationOnScroll>
      <Timeline position="alternate">
        {experiences.map((exp, index) => (
          <TimelineItem key={exp.id}>
            <TimelineSeparator>
              <TimelineDot
                color="primary"
                sx={{
                  width: { xs: 40, sm: 50 },
                  height: { xs: 40, sm: 50 },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {exp.icon}
              </TimelineDot>
              {index < experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <AnimationOnScroll animateIn={exp.animation}>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: '1rem', md: '1.25rem' },
                      fontWeight: 'bold',
                    }}
                  >
                    {exp.title}
                  </Typography>
                  {exp.subtitle && (
                    <Typography
                      color="gray"
                      sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}
                    >
                      {exp.subtitle}
                    </Typography>
                  )}
                  <Typography
                    variant="body2"
                    sx={{
                      marginTop: 1,
                      fontSize: { xs: '0.875rem', md: '1rem' },
                    }}
                  >
                    {exp.description}
                  </Typography>
                </Box>
              </AnimationOnScroll>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};
