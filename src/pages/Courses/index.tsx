import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { FaUniversity, FaCertificate } from 'react-icons/fa'; // Ícones do react-icons
import { Title } from '../../styles/GlobalStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Courses: FC = () => {
  return (
    <Box sx={{ padding: { xs: 2, md: 4 }, width: '100%' }}>
      <AnimationOnScroll animateIn="animate__backInLeft">
        <Title>Cursos</Title>
      </AnimationOnScroll>

      <Timeline position="alternate">
        {/* Curso de Graduação */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" sx={{
              width: { xs: 40, sm: 50 },
              height: { xs: 40, sm: 50 },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
            }}>
              <FaUniversity size={24} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 'bold' }}>
              Análise e Desenvolvimento de Sistemas
            </Typography>
            <Typography color="gray" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>2021</Typography>
            <Typography variant="body2" sx={{ marginTop: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
              Graduação focada no desenvolvimento de software, programação e banco de dados. 
              Estou adquirindo conhecimentos técnicos fundamentais para atuar na área de TI.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Curso de Pós-Graduação */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" sx={{
              width: { xs: 40, sm: 50 },
              height: { xs: 40, sm: 50 },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
            }}>
              <FaUniversity size={24} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 'bold' }}>
              Engenharia de Software
            </Typography>
            <Typography color="gray" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>2024</Typography>
            <Typography variant="body2" sx={{ marginTop: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
              Pós-graduação focada em metodologias ágeis, engenharia de requisitos e arquitetura de software.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Curso de Biomedicina */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" sx={{
              width: { xs: 40, sm: 50 },
              height: { xs: 40, sm: 50 },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
            }}>
              <FaUniversity size={24} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 'bold' }}>
              Biomedicina
            </Typography>
            <Typography color="gray" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>2024 - 2028</Typography>
            <Typography variant="body2" sx={{ marginTop: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
              Início da graduação em Biomedicina, com foco em pesquisas e inovações tecnológicas nas áreas de bioinformática e biotecnologia.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Bootcamp de Automação em Python */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" sx={{
              width: { xs: 40, sm: 50 },
              height: { xs: 40, sm: 50 },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
            }}>
              <FaCertificate size={24} />
            </TimelineDot>
            {/* Remova a linha TimelineConnector */}
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 'bold' }}>
              Bootcamp de Automação em Python - Dio
            </Typography>
            <Typography color="gray" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>2024</Typography>
            <Typography variant="body2" sx={{ marginTop: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
              Bootcamp de automação com Python, cobrindo bibliotecas essenciais como **Selenium**, **BeautifulSoup**, **Pandas**, **NumPy** e **Requests**.
            </Typography>
          </TimelineContent>
        </TimelineItem>

      </Timeline>
    </Box>
  );
};
