import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { FaLaptop, FaTrain, FaBriefcase, FaUniversity } from 'react-icons/fa'; // Ícones atualizados
import { Title } from '../../styles/GlobalStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Experiences: FC = () => {
  return (
    <Box sx={{ padding: { xs: 2, md: 4 }, width: '100%' }}>
      <AnimationOnScroll animateIn="animate__backInLeft">
        <Title>Experiência</Title>
      </AnimationOnScroll>

      <Timeline position="alternate">
        {/* Mundiware - Estágio de Desenvolvimento */}
        <TimelineItem>
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
              <FaLaptop size={26} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 'bold' }}>
              Mundiware
            </Typography>
            <Typography color="gray" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>Estágio Front-End</Typography>
            <Typography variant="body2" sx={{ marginTop: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
              Trabalhei remotamente no desenvolvimento de sistemas utilizando HTML, CSS e JavaScript. Essa experiência foi fundamental para moldar minhas habilidades em Front-End e aprimorar minha experiência prática.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Metrô Rio - Administração de Servidores */}
        <TimelineItem>
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
              <FaTrain size={26} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 'bold' }}>
              MetrôRio
            </Typography>
            <Typography color="gray" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>Analista de Sistemas</Typography>
            <Typography variant="body2" sx={{ marginTop: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
              Trabalhei em um ambiente de alta demanda, atuando como analista de sistemas Windows, manutenção em bancos de dados SQL, monitoramento de servidores com Zabbix, atualização de sistemas e prevenção de erros, entre outros.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Trabalho Freelancer */}
        <TimelineItem>
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
              <FaBriefcase size={26} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 'bold' }}>
              Trabalho Freelancer
            </Typography>
            <Typography color="gray" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>Programação</Typography>
            <Typography variant="body2" sx={{ marginTop: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
              Atualmente, atuo como freelancer, me dedicando a projetos pessoais e profissionais utilizando Python, React e outras tecnologias, com foco em análise de dados e automação.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Projetos Pessoais - Freelancer */}
        <TimelineItem>
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
              <FaUniversity size={26} />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 'bold' }}>
              Aprendendo continuamente!
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
              Estou constantemente me desafiando com novos projetos pessoais. A cada projeto, busco aprofundar meu conhecimento e aprimorar minhas habilidades técnicas.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};
