import React from 'react';
import { Box, useTheme } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { ContentBox, SectionContainer, Title } from '../../styles/GlobalStyles';
import photo from '@/assets/img/foto-leonan.jpg';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FloatingBackgroundAbout } from '../../utils/FloatingEffect/FloatingBackgroundAbout';
import { AboutText, ContactButton, ContentSection, ProfileImage } from '../../styles/AboutStyles';

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
                Sou <strong style={{ color: theme.palette.primary.main }}>Leonan Thomaz</strong>, formado em 
                <strong style={{ color: theme.palette.primary.main }}> Análise e Desenvolvimento de Sistemas </strong> e 
                pós-graduado em <strong style={{ color: theme.palette.primary.main }}>Engenharia de Software </strong>.  

                <br /><br />
                Iniciei minha carreira como <strong style={{ color: theme.palette.primary.main }}>Analista de Sistemas </strong> 
                em empresa pública, atuando com <strong style={{ color: theme.palette.primary.main }}>SQL Server, Oracle </strong> 
                e automações em Python.  

                <br /><br />
                Hoje foco no desenvolvimento de <strong style={{ color: theme.palette.primary.main }}>APIs RESTful </strong>, 
                <strong style={{ color: theme.palette.primary.main }}> automação de processos </strong> e 
                <strong style={{ color: theme.palette.primary.main }}> integrações entre sistemas </strong> com 
                <strong style={{ color: theme.palette.primary.main }}> Python (FastAPI, Flask) </strong>.  
                Também desenvolvo frontends modernos com 
                <strong style={{ color: theme.palette.primary.main }}> React e TypeScript </strong>, quando necessário 
                para entregar soluções completas.  

                <br /><br />
                Sou apaixonado por tecnologia aplicada para resolver problemas reais, 
                com experiência em <strong style={{ color: theme.palette.primary.main }}> bots inteligentes</strong>, 
                <strong style={{ color: theme.palette.primary.main }}> integrações com IA </strong>, 
                e sistemas web robustos, como o projeto <strong style={{ color: theme.palette.primary.main }}>FireCloud </strong>, 
                uma plataforma SaaS que desenvolvo do zero.
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