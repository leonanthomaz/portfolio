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
            color: (theme) => theme.palette.text.primary,
            fontWeight: 400,
            textAlign: 'left',
          }}
        >
          Sou <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Analista de Dados</span> e <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Desenvolvedor Python</span>, formado em <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Análise e Desenvolvimento de Sistemas</span> e pós-graduado em <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Engenharia de Software</span>.  

          Minha experiência abrange <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>análise de dados</span>, <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>automação de processos</span> e <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>visualização de dados</span>, utilizando ferramentas como <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Python</span>, <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>SQL</span> e <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Power BI</span>. No Python, utilizo bibliotecas como <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Pandas</span>, <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>NumPy</span> e <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Matplotlib</span> para manipulação e análise de dados, além de <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Requests</span> e <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Beautiful Soup</span> para integrações e web scraping.  

          Atuei em projetos envolvendo <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>automação de processos</span> e <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>manipulação de dados</span> com <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>bancos SQL</span>, otimizando fluxos de trabalho e gerando relatórios estratégicos com o <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Power BI</span>.  

          Como freelancer, desenvolvi soluções personalizadas de <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>automação</span> e análise de dados para empresas, abrangendo desde a integração de APIs até a criação de dashboards interativos e scripts otimizados para a tomada de decisão.  

          Atualmente, curso <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Biomedicina</span>, aprofundando-me em <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>bioinformática</span> e <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>biotecnologia</span>, com o objetivo de integrar tecnologia e ciência. Meu foco é desenvolver soluções que aliem inovação tecnológica e impacto positivo, tanto no mercado corporativo quanto no campo biomédico.
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
