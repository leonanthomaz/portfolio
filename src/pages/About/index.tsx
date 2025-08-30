import React from 'react';
import { Box, Typography, Button, styled, useTheme, alpha } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { ContentBox, SectionContainer, Title } from '../../styles/GlobalStyles';
import photo from '@/assets/img/foto-leonan.jpg';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FloatingBackgroundAbout } from '../../utils/FloatingEffect/FloatingBackgroundAbout';

// Componente estilizado para a seção de conteúdo (foto + texto)
const ContentSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(5),
  marginTop: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    textAlign: 'left',
    alignItems: 'flex-start',
    gap: theme.spacing(8),
  },
}));

// Componente estilizado para a imagem
const ProfileImage = styled('img')(({ theme }) => ({
  width: 200,
  height: 200,
  borderRadius: '50%',
  objectFit: 'cover',
  border: `4px solid ${alpha(theme.palette.primary.main, 0.4)}`,
  boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.2)}`,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

// Componente estilizado para o texto
const AboutText = styled(Typography)(({ theme }) => ({
  lineHeight: 1.8,
  maxWidth: '800px',
  color: theme.palette.text.primary,
  fontWeight: 400,
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

// Componente estilizado para o botão
const ContactButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: '12px 28px',
  fontSize: '1rem',
  fontWeight: 600,
  borderRadius: '8px',
  background: theme.palette.primary.main,
  color: theme.palette.getContrastText(theme.palette.primary.main),
  boxShadow: `0 8px 30px ${alpha(theme.palette.primary.main, 0.3)}`,
  transition: 'all 0.3s ease',
  textTransform: 'none',
  fontFamily: "'Poppins', sans-serif",
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.5)}`,
    background: theme.palette.primary.dark,
  },
}));

export const About: React.FC = () => {
  const theme = useTheme();

  return (
    <SectionContainer id="about">

      <FloatingBackgroundAbout/>

      <ContentBox sx={{ zIndex: 2}}>
        <AnimationOnScroll animateIn="animate__fadeInUp">
        <Title>Sobre Mim</Title>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInUp" delay={200}>
          <ContentSection>
            <Box sx={{ minWidth: 200 }}>
              <ProfileImage
                src={photo ? photo : 'https://via.placeholder.com/200'}
                alt="Minha foto"
              />
            </Box>

            <Box>
              <AboutText>
                Sou <strong style={{ color: theme.palette.primary.main }}>Leonan Thomaz</strong>, formado em <strong style={{ color: theme.palette.primary.main }}>Análise e Desenvolvimento de Sistemas</strong> e pós-graduado em <strong style={{ color: theme.palette.primary.main }}>Engenharia de Software</strong>. Comecei minha carreira como <strong style={{ color: theme.palette.primary.main }}>Analista de Sistemas</strong>, trabalhando com bancos de dados como <strong style={{ color: theme.palette.primary.main }}>SQL Server e Oracle</strong> e desenvolvendo scripts de automação.  
                <br /><br />
                Ao longo dos anos, foquei em criar soluções práticas e eficientes, desenvolvendo <strong style={{ color: theme.palette.primary.main }}>bots inteligentes</strong>, <strong style={{ color: theme.palette.primary.main }}>integrações com IA</strong> e sistemas web completos com <strong style={{ color: theme.palette.primary.main }}>Python, FastAPI e React</strong>.  
                <br /><br />
                Sou apaixonado por automação, APIs e tecnologia aplicada para resolver problemas reais, sempre buscando aprender e entregar valor de forma rápida e prática.
              </AboutText>
            </Box>

          </ContentSection>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInUp" delay={400}>
          <ScrollLink 
            to="contact" 
            smooth={true} 
            duration={500} 
            spy={true} 
            offset={-80}
          >
            <ContactButton>
              Entrar em Contato
            </ContactButton>
          </ScrollLink>
        </AnimationOnScroll>
      </ContentBox>
    </SectionContainer>
  );
};