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
          color: (theme) => theme.palette.primary.main,  // Usando o tema
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
              marginBottom: '30px',
              color: theme => theme.palette.text.primary, // Usando a cor de texto do tema
              fontWeight: 400,
              textAlign: 'left',
            }}
          >
            Sou um <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>desenvolvedor de software</span> com experiência em <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>front-end</span> e <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>back-end</span>. Trabalhei com <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>HTML, CSS, JavaScript</span> e apliquei <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>SEO</span>. No back-end, minha principal ferramenta é <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Python</span>, utilizada para automação, integração de sistemas, e criação de APIs, além de <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>SQL</span> para bancos de dados.

            Em minha experiência profissional, além de atuar com <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Python</span>, também trabalhei com <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Java</span>, desenvolvendo soluções que atendem a demandas específicas. No entanto, foi com <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Python</span> que encontrei maior versatilidade e eficiência.

            Hoje, sou freelancer, criando soluções personalizadas como automação de processos, desenvolvimento de APIs e scripts sob demanda para empresas. A flexibilidade de atuar por conta própria me permite explorar profundamente as possibilidades do <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Python</span>.

            Paralelamente, estou cursando <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Biomedicina</span>, com foco em <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>bioinformática</span> e <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>biotecnologia</span>, buscando explorar como a tecnologia pode contribuir para o avanço dessas áreas.
          </Typography>
        </Box>

        <Button
          sx={{
            backgroundColor: theme => theme.palette.primary.main,
            color: '#121212',
            fontWeight: 'bold',
            padding: '10px 20px',
            borderRadius: '30px',
            marginTop: '20px',
            textTransform: 'uppercase',
            '&:hover': {
              backgroundColor: theme => theme.palette.secondary.main, // Usando a cor do tema para hover
            },
          }}
        >
          Entrar em Contato
        </Button>
      </Box>
    </Box>
  );
};
