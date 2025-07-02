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
          Sou um <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Desenvolvedor Fullstack</span> com foco em <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Python</span> e <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>React</span>, com experiência prática na criação de sistemas web completos, APIs RESTful, automações e integrações com inteligência artificial e meios de pagamento.

          Tenho atuado em projetos onde fui responsável por toda a stack: <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>backend com FastAPI</span>, <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>frontend com React + TypeScript</span>, painel administrativo, controle de pedidos, integração com <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Pix/Mercado Pago</span>, impressão térmica e dashboards com relatórios.

          Também desenvolvo automações utilizando <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Python</span> para scraping, processamento de dados e bots com IA, integrando ferramentas como <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>OpenAI, Google APIs</span> e plataformas de mensagens.

          Sou graduado em <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Análise e Desenvolvimento de Sistemas</span> e pós-graduado em <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Engenharia de Software</span>, com domínio em bancos de dados relacionais (<span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>PostgreSQL, SQL Server, Oracle</span>) e deploy de aplicações com <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Docker</span> e serviços em nuvem.

          Tenho perfil autodidata, foco em entrega, boa comunicação e estou sempre buscando evoluir em projetos que entreguem valor real através da tecnologia.
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
