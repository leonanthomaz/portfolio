import React from 'react';
import { Box, Typography } from '@mui/material';
import { SiReact, SiSpring, SiTypescript, SiMysql, SiDocker } from 'react-icons/si';
import { FaPython, FaJsSquare, FaJava } from 'react-icons/fa';
import { Title } from '../../styles/GlobalStyles';
import { SkillsContainer, SkillItemContainer, SkillItem, HighlightText, SkillsWrapper } from './SkillsStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { BsFiletypeSql } from "react-icons/bs";

export const Skills: React.FC = () => {
  return (
    <Box sx={{ padding: { xs: 2, md: 4 }, width: '100%' }}>
      <AnimationOnScroll animateIn="animate__backInLeft">
        <Title>Minhas Skills</Title>
      </AnimationOnScroll>
      <SkillsContainer>
        <Typography
          variant="h6"
          sx={{ marginBottom: '40px', color: 'text.secondary', fontSize: '1.2rem', fontWeight: 400 }}
        >
          Aqui estão as tecnologias e ferramentas com as quais tenho conhecimento:
        </Typography>

        <SkillsWrapper>
          <SkillItemContainer>
            {[
              { icon: <FaPython />, label: 'Python' },
              { icon: <FaJsSquare />, label: 'JavaScript' },
              { icon: <SiReact />, label: 'React' },
              { icon: <SiTypescript />, label: 'TypeScript' },
              { icon: <FaJava />, label: 'Java' },
              { icon: <SiSpring />, label: 'Spring' },
              { icon: <BsFiletypeSql />, label: 'SQL' },
              { icon: <SiDocker />, label: 'Docker' },
            ].map((skill, index) => (
              <AnimationOnScroll key={index} animateIn="animate__fadeInUp">
                <SkillItem>
                  {skill.icon}
                  <span>{skill.label}</span>
                </SkillItem>
              </AnimationOnScroll>
            ))}
          </SkillItemContainer>
        </SkillsWrapper>

        <Typography
          variant="h6"
          sx={{ marginTop: '40px', color: 'text.secondary', fontSize: '1rem', fontWeight: 400 }}
        >
          Eu busco sempre melhorar minhas habilidades e aprender novas ferramentas que se encaixem com meu perfil e paixão por <HighlightText>soluções eficazes</HighlightText>.
        </Typography>
      </SkillsContainer>
    </Box>
  );
};
