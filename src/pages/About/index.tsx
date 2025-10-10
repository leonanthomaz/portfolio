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
                <strong style={{ color: theme.palette.primary.main }}> Análise e Desenvolvimento de Sistemas </strong> 
                e pós-graduado em <strong style={{ color: theme.palette.primary.main }}>Engenharia de Software</strong>.

                <br />

                Tenho sólida experiência em desenvolvimento <strong style={{ color: theme.palette.primary.main }}>Python</strong>, 
                com foco em <strong style={{ color: theme.palette.primary.main }}>APIs RESTful, automações e integrações</strong>, 
                utilizando <strong style={{ color: theme.palette.primary.main }}>FastAPI</strong> e <strong style={{ color: theme.palette.primary.main }}>Flask</strong>. 
                Também desenvolvo frontends modernos com <strong style={{ color: theme.palette.primary.main }}>React e TypeScript</strong>, 
                garantindo soluções completas end-to-end.

                <br />

                Atualmente, foco em <strong style={{ color: theme.palette.primary.main }}>chatbots empresariais inteligentes </strong> 
                (V1, V2 e V3), integrando NLP, análise de sentimentos, reconhecimento de voz e múltiplos provedores de IA 
                (<strong style={{ color: theme.palette.primary.main }}>OpenAI, DeepSeek, Grok, Gemini e LLaMA</strong>), 
                com histórico persistente e automações complexas.  

                <br />

                Como próximos passos (V4), planejo expandir para <strong style={{ color: theme.palette.primary.main }}>análise de vídeo </strong> 
                usando <strong style={{ color: theme.palette.primary.main }}>OpenCV</strong> e memória de longo prazo para interações multimodais.

                <br />
                Sou movido por tecnologia aplicada para resolver problemas reais, criando sistemas robustos e escaláveis 
                que unem inteligência artificial, automação e experiência do usuário.
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