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
          Sou <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Desenvolvedor Python</span> com foco em <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>automação</span>, <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>análise de dados</span> e <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>integração de APIs</span>. Formado em <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Análise e Desenvolvimento de Sistemas</span> e pós-graduado em <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Engenharia de Software</span>, com ênfase em <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Python</span>, <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>SQL</span> e <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>JavaScript</span>.

          Além disso, tenho experiência em <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Java</span> e <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Spring</span>, e conhecimentos em <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>React</span>, aplicados em projetos que exigem a construção de interfaces dinâmicas e modernas.

          Atualmente, estou cursando <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Biomedicina</span>, com o objetivo de combinar minhas habilidades em tecnologia com a área da saúde, especialmente em <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>bioinformática</span>. Meu propósito é desenvolver soluções inovadoras para o avanço do campo biomédico, impactando positivamente a sociedade.
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
