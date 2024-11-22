import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { FaUniversity, FaCertificate } from 'react-icons/fa';
import { Title } from '../../styles/GlobalStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Courses: FC = () => {
  const timelineDotStyles = {
    width: { xs: 40, sm: 50 },
    height: { xs: 40, sm: 50 },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
  };

  const courses = [
    {
      icon: <FaUniversity size={24} />,
      title: "Análise e Desenvolvimento de Sistemas",
      year: "2021",
      description:
        "Graduação com foco em desenvolvimento de software, programação e banco de dados. Fundamentou minha base técnica para atuar em TI.",
      animation: "animate__backInRight",
    },
    {
      icon: <FaUniversity size={24} />,
      title: "Engenharia de Software",
      year: "2024",
      description:
        "Pós-graduação com ênfase em metodologias ágeis, engenharia de requisitos e arquitetura de software, voltada para soluções modernas.",
      animation: "animate__backInLeft",
    },
    {
      icon: <FaUniversity size={24} />,
      title: "Biomedicina",
      year: "2024 - 2028",
      description:
        "Graduação em andamento, explorando pesquisas e tecnologias aplicadas às áreas de bioinformática e biotecnologia.",
      animation: "animate__backInRight",  
    },
    {
      icon: <FaCertificate size={24} />,
      title: "Bootcamp de Automação em Python - Dio",
      year: "2024",
      description:
        "Bootcamp cobrindo automação com bibliotecas essenciais como Selenium, BeautifulSoup, Pandas, NumPy e Requests.",
        animation: "animate__backInLeft",
    },
  ];

  return (
    <Box sx={{ padding: { xs: 2, md: 4 }, width: '100%' }}>
      <AnimationOnScroll animateIn="animate__backInLeft">
        <Title>Formação</Title>
      </AnimationOnScroll>

      <Timeline position="alternate">
        {courses.map((course, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" sx={timelineDotStyles}>
                {course.icon}
              </TimelineDot>
              {index < courses.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <AnimationOnScroll animateIn={course.animation}>
                <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 'bold' }}>
                  {course.title}
                </Typography>
                <Typography color="gray" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
                  {course.year}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                  {course.description}
                </Typography>
              </AnimationOnScroll>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};
