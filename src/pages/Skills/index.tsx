// src/pages/Skills/index.tsx
import React from 'react';
import { Typography } from '@mui/material';
import { SiReact, SiSpring, SiTypescript, SiMysql, SiDocker } from 'react-icons/si';
import { FaPython, FaJsSquare, FaJava } from 'react-icons/fa';
import { Title } from '../../styles/GlobalStyles';
import {
  SkillsContainer,
  SkillItemContainer,
  SkillItem,
  HighlightText,
  SkillsWrapper,
} from './SkillsStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Skills: React.FC = () => {
  return (
    <SkillsContainer>
      <AnimationOnScroll animateIn="animate__backInLeft">
        <Title>Minhas Skills</Title>
      </AnimationOnScroll>
      <Typography
        variant="h6"
        sx={{ marginBottom: '40px', color: '#ddd', fontSize: '1.2rem', fontWeight: 400 }}
      >
        Aqui estão as tecnologias e ferramentas com as quais tenho conhecimento:
      </Typography>

      <SkillsWrapper>
        <SkillItemContainer>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <SkillItem>
              <FaPython />
              <span>Python</span>
            </SkillItem>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInUp">
            <SkillItem>
              <FaJsSquare />
              <span>JavaScript</span>
            </SkillItem>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInUp">
            <SkillItem>
              <SiReact />
              <span>React</span>
            </SkillItem>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInUp">
            <SkillItem>
              <SiTypescript />
              <span>TypeScript</span>
            </SkillItem>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInUp">
            <SkillItem>
              <FaJava />
              <span>Java</span>
            </SkillItem>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInUp">
            <SkillItem>
              <SiSpring />
              <span>Spring</span>
            </SkillItem>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInUp">
            <SkillItem>
              <SiMysql />
              <span>MySQL</span>
            </SkillItem>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInUp">
            <SkillItem>
              <SiDocker />
              <span>Docker</span>
            </SkillItem>
          </AnimationOnScroll>

        </SkillItemContainer>
      </SkillsWrapper>

      <Typography
        variant="h6"
        sx={{ marginTop: '40px', color: '#ddd', fontSize: '1rem', fontWeight: 400 }}
      >
        Eu busco sempre melhorar minhas habilidades e aprender novas ferramentas que se encaixem com meu perfil e paixão por <HighlightText>soluções eficazes</HighlightText>.
      </Typography>
    </SkillsContainer>
  );
};
