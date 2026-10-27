
import React from 'react';
import { Box, useTheme } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { ContentBox, SectionContainer, Title } from '../../styles/GlobalStyles';
import photo from '@/assets/img/foto-leonan.jpg';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FloatingBackgroundAbout } from '../../utils/FloatingEffect/FloatingBackgroundAbout';
import {
  AboutText,
  ContactButton,
  ContentSection,
  ProfileImage,
} from '../../styles/AboutStyles';

export const About: React.FC = () => {
  const theme = useTheme();

  return (
    <SectionContainer id="about">
      <FloatingBackgroundAbout />

      <ContentBox sx={{ zIndex: 2 }}>
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <Title>Sobre Mim</Title>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInUp" delay={200}>
          <ContentSection>
            <Box sx={{ minWidth: 200 }}>
              <ProfileImage
                src={photo || 'https://via.placeholder.com/200'}
                alt="Leonan Thomaz de Oliveira"
              />
            </Box>

            <Box>
              <AboutText>
                Sou{' '}
                <strong style={{ color: theme.palette.primary.main }}>
                  Leonan Thomaz
                </strong>
                , graduado em{' '}
                <strong style={{ color: theme.palette.primary.main }}>
                  Análise e Desenvolvimento de Sistemas
                </strong>{' '}
                e pós-graduado em{' '}
                <strong style={{ color: theme.palette.primary.main }}>
                  Engenharia de Software
                </strong>
                .

                <br />
                <br />

                Atuo no desenvolvimento de{' '}
                <strong style={{ color: theme.palette.primary.main }}>
                  sistemas corporativos e APIs com Python
                </strong>
                , utilizando tecnologias como FastAPI e Django. Tenho
                experiência na modernização de aplicações legadas, construção
                de gateways de integração e comunicação entre sistemas,
                bancos de dados e serviços externos.

                <br />
                <br />

                Também trabalho com{' '}
                <strong style={{ color: theme.palette.primary.main }}>
                  integrações financeiras e bancárias
                </strong>
                , incluindo emissão de boletos, autenticação com certificados
                digitais, processamento de webhooks e integração com APIs
                bancárias. Entre meus projetos, destaco o desenvolvimento de
                soluções para integração com sistemas legados em Firebird e
                centralização de operações financeiras.

                <br />
                <br />

                No frontend, desenvolvo interfaces com{' '}
                <strong style={{ color: theme.palette.primary.main }}>
                  React, TypeScript e Material UI
                </strong>
                , buscando criar aplicações funcionais, organizadas e
                intuitivas. Também possuo experiência com automações,
                integração com provedores de inteligência artificial e
                desenvolvimento de chatbots.

                <br />
                <br />

                Meu foco é utilizar a tecnologia para resolver problemas reais,
                construindo soluções confiáveis e bem estruturadas que
                conectem sistemas, automatizem processos e atendam às
                necessidades do negócio.
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
            <ContactButton>Entrar em Contato</ContactButton>
          </ScrollLink>
        </AnimationOnScroll>
      </ContentBox>
    </SectionContainer>
  );
};
