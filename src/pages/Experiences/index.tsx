import React from 'react';
import { Box, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { FaLaptop, FaTrain, FaBriefcase, FaUniversity } from 'react-icons/fa';
import { Title } from '../../styles/GlobalStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Experiences: React.FC = () => {
  
  const experiences = [
    {
      id: 1,
      icon: <FaLaptop size={26} />,
      title: "Mundiware",
      subtitle: "Estágio Front-End",
      description:
        "Trabalhei remotamente no desenvolvimento de sistemas utilizando HTML, CSS e JavaScript. Essa experiência foi fundamental para moldar minhas habilidades em Front-End e aprimorar minha experiência prática.",
      animation: "animate__backInRight",
    },
    {
      id: 2,
      icon: <FaTrain size={26} />,
      title: "MetrôRio",
      subtitle: "Analista de Sistemas",
      description:
        "Atuei em um ambiente de alta demanda, lidando com manutenção de bancos de dados SQL, monitoramento de servidores e atualizações de sistemas.",
      animation: "animate__backInLeft",
    },
    {
      id: 3,
      icon: <FaBriefcase size={26} />,
      title: "Trabalho Freelancer",
      subtitle: "Programação",
      description:
        "Atualmente, desenvolvo projetos com Python, React e outras tecnologias, com foco em análise de dados e automação.",
      animation: "animate__backInRight",
    },
    {
      id: 4,
      icon: <FaUniversity size={26} />,
      title: "Aprendendo continuamente!",
      subtitle: "",
      description:
        "Estou constantemente me desafiando com novos projetos pessoais. A cada projeto, busco aprofundar meu conhecimento e aprimorar minhas habilidades técnicas.",
      animation: "animate__backInLeft",
    },
  ];

  return (
    <Box sx={{ padding: 4, borderRadius: '8px'}}>
      <AnimationOnScroll animateIn="animate__backInLeft">
        <Title>Experiência</Title>
      </AnimationOnScroll>
      <Timeline position="alternate">
        {experiences.map((experience, index) => (
          <TimelineItem key={experience.id}>
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
                {experience.icon}
              </TimelineDot>
              {index < experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <AnimationOnScroll animateIn={experience.animation}>
                <Typography
                  variant="h6"
                  sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 'bold' }}
                >
                  {experience.title}
                </Typography>
                {experience.subtitle && (
                  <Typography color="gray" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
                    {experience.subtitle}
                  </Typography>
                )}
                <Typography
                  variant="body2"
                  sx={{ marginTop: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}
                >
                  {experience.description}
                </Typography>
              </AnimationOnScroll>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};
