import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
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
          color: (theme) => theme.palette.primary.main,
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
              border: `5px solid ${theme.palette.primary.main}`,
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
              color: (theme) => theme.palette.text.primary,
              fontWeight: 400,
              textAlign: 'left',
            }}
          >
            Sou um <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Desenvolvedor de Software </span> 
            com foco em <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Python</span>, 
            <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}> Java</span> e 
            <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}> JavaScript</span> com 
            <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}> TypeScript</span>. 
            Tenho sólida experiência em <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>automação</span>, 
            <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}> análise de dados</span> e 
            <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}> desenvolvimento web</span> utilizando 
            <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}> React</span> e outras tecnologias modernas.

            Formado em <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Análise e Desenvolvimento de Sistemas </span> 
            e pós-graduado em <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Engenharia de Software</span>, 
            tenho experiência em criar soluções robustas e escaláveis, integrando tecnologias back-end e front-end.

            Minhas habilidades em <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Spring Boot</span>, 
            <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}> Flask</span>, 
            <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}> APIs REST</span> e 
            bancos de dados como <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}> SQL Server</span> e 
            <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}> Oracle</span> me permitem desenvolver 
            projetos completos que atendam às demandas modernas do mercado.

            Estou constantemente aprimorando minhas habilidades e buscando novos desafios para criar soluções tecnológicas 
            que fazem a diferença no mercado. Meu objetivo é contribuir para projetos inovadores e entregar valor real através da tecnologia.
          </Typography>
        </Box>

        <ScrollLink 
          to="contact" 
          smooth={true} 
          duration={500} 
          spy={true} 
          offset={-80}
        >
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
                backgroundColor: (theme) => theme.palette.secondary.main,
              },
            }}
          >
            Entrar em Contato
          </Button>
        </ScrollLink>
      </Box>
    </Box>
  );
};
