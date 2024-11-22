import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Title } from '../../styles/GlobalStyles';
import photo from '@/assets/img/foto-leonan-atual.webp';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import theme from '../../styles/theme';

export const About: React.FC = () => {
  return (
    <Box sx={{ padding: { xs: 2, md: 4 }, width: '100%' }}>
      <AnimationOnScroll animateIn="animate__backInLeft">
        <Title>Sobre Mim</Title>
      </AnimationOnScroll>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: (theme) => theme.palette.primary.main, // Usando o tema
          textAlign: 'center',
          minHeight: '100vh',
        }}
      >
        <Box sx={{ margin: '40px 0' }}>
          <img
            src={photo ? photo : 'https://via.placeholder.com/200'}
            alt="Minha foto"
            style={{
              width: 200,
              height: 200,
              borderRadius: '50%',
              objectFit: 'cover',
              border: `5px solid ${theme.palette.primary.main}`, // Usando a cor do tema
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'left',
          }}
        >
          <Typography
            sx={{
              lineHeight: 1.8,
              maxWidth: '800px',
              color: (theme) => theme.palette.text.primary, // Usando a cor de texto do tema
              fontWeight: 400,
              textAlign: 'left',
            }}
          >
            Sou <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Desenvolvedor Python</span> e <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Engenheiro de Software</span>, formado em <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Análise e Desenvolvimento de Sistemas</span> e pós-graduado em <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Engenharia de Software</span>.

            Tenho experiência no desenvolvimento de soluções tanto para <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>front-end</span> quanto para <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>back-end</span>, trabalhando com tecnologias como <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Python</span>, <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>SQL</span>, <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Java</span> e <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>React</span>. Além disso, tenho conhecimento em automação, integração de APIs e otimização de processos.

            Atualmente, sou freelancer, desenvolvendo soluções personalizadas, como automação de processos e desenvolvimento de APIs, utilizando principalmente o <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Python</span>.

            Paralelamente, estou cursando <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Biomedicina</span>, com foco em <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>bioinformática</span> e <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>biotecnologia</span>, buscando aplicar minhas habilidades de desenvolvimento de software para contribuir com inovações na área de saúde e ciência.

            Meu objetivo é combinar minha experiência técnica com meu interesse por ciência e saúde, desenvolvendo soluções que possam melhorar a vida das pessoas e impactar positivamente o campo biomédico.
          </Typography>
        </Box>

        <Button
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            color: '#121212',
            fontWeight: 'bold',
            padding: '10px 20px',
            borderRadius: '30px',
            marginTop: '20px',
            textTransform: 'uppercase',
            '&:hover': {
              backgroundColor: (theme) => theme.palette.secondary.main, // Usando a cor do tema para hover
            },
          }}
        >
          Entrar em Contato
        </Button>
      </Box>
    </Box>
  );
};
