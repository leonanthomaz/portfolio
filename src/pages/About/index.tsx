import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Box, Typography, Button } from '@mui/material';
import { Title } from '../../styles/GlobalStyles'; // Importando o Title com as propriedades globais
import photo from '@/assets/img/foto-leonan-atual.webp';

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
          color: '#ffeb3b',
          padding: { xs: '40px 20px', md: '60px 20px' },
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
              border: '5px solid #ffeb3b',
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
              fontSize: '1.2rem',
              lineHeight: 1.8,
              maxWidth: '800px',
              marginBottom: '30px',
              color: '#ddd',
              fontWeight: 400,
              textAlign: 'left',
            }}
          >
            Sou um <span style={{ fontWeight: 'bold', color: '#ffeb3b' }}>desenvolvedor de software</span> com experiência em <span style={{ fontWeight: 'bold', color: '#ffeb3b' }}>front-end</span> e <span style={{ fontWeight: 'bold', color: '#ffeb3b' }}>back-end</span>. Trabalhei com <span style={{ fontWeight: 'bold', color: '#ffeb3b' }}>HTML, CSS, JavaScript</span> e apliquei <span style={{ fontWeight: 'bold', color: '#ffeb3b' }}>SEO</span>. No back-end, minha principal ferramenta é <span style={{ fontWeight: 'bold', color: '#ffeb3b' }}>Python</span>, utilizada para automação, integração de sistemas, e criação de APIs, além de <span style={{ fontWeight: 'bold', color: '#ffeb3b' }}>SQL</span> para bancos de dados.

            Em minha experiência profissional, além de atuar com <span style={{ fontWeight: 'bold', color: '#ffeb3b' }}>Python</span>, também trabalhei com <span style={{ fontWeight: 'bold', color: '#ffeb3b' }}>Java</span>, desenvolvendo soluções que atendem a demandas específicas. No entanto, foi com <span style={{ fontWeight: 'bold', color: '#ffeb3b' }}>Python</span> que encontrei maior versatilidade e eficiência.

            Hoje, sou freelancer, criando soluções personalizadas como automação de processos, desenvolvimento de APIs e scripts sob demanda para empresas. A flexibilidade de atuar por conta própria me permite explorar profundamente as possibilidades do <span style={{ fontWeight: 'bold', color: '#ffeb3b' }}>Python</span>.

            Paralelamente, estou cursando <span style={{ fontWeight: 'bold', color: '#ffeb3b' }}>Biomedicina</span>, com foco em <span style={{ fontWeight: 'bold', color: '#ffeb3b' }}>bioinformática</span> e <span style={{ fontWeight: 'bold', color: '#ffeb3b' }}>biotecnologia</span>, buscando explorar como a tecnologia pode contribuir para o avanço dessas áreas.
          </Typography>
        </Box>

        <Button
          sx={{
            backgroundColor: '#ffeb3b',
            color: '#121212',
            fontWeight: 'bold',
            padding: '10px 20px',
            borderRadius: '30px',
            marginTop: '20px',
            textTransform: 'uppercase',
            '&:hover': {
              backgroundColor: '#ff9800',
            },
          }}
        >
          Entrar em Contato
        </Button>
      </Box>
    </Box>
  );
};
