import React from 'react';
import { Box, Typography, styled, alpha } from '@mui/material';
import { SiTypescript, SiDocker, SiPostgresql, SiFastapi } from 'react-icons/si';
import { FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { ContentBox, SectionContainer, Title } from '../../styles/GlobalStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { BsFiletypeSql } from "react-icons/bs";
import { FloatingBackgroundSkills } from '../../utils/FloatingEffect/FloatingBackgroundSkills';

// Container para os cartões de skills
const SkillsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: theme.spacing(3),
  width: '100%',
  marginTop: theme.spacing(5),
}));

// Componente para cada cartão de skill
const SkillCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3),
  borderRadius: '12px',
  background: alpha(theme.palette.background.paper, 0.7),
  color: theme.palette.text.primary,
  cursor: 'pointer',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  boxShadow: `0 4px 12px ${alpha(theme.palette.background.paper, 0.2)}`,
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 12px 24px ${alpha(theme.palette.background.paper, 0.4)}`,
  },
}));

// Ícone estilizado
const SkillIcon = styled(Box)(({ theme }) => ({
  fontSize: '4rem',
  marginBottom: theme.spacing(1.5),
  color: theme.palette.primary.main,
  transition: 'color 0.3s ease-in-out',
  [`${SkillCard}:hover &`]: {
    color: theme.palette.secondary.main,
  },
}));

const skillsData = [
  { icon: <FaPython />, label: 'Python' },
  { icon: <FaJsSquare />, label: 'JavaScript' },
  { icon: <SiTypescript />, label: 'TypeScript' },
  { icon: <FaReact />, label: 'React' },
  { icon: <SiFastapi />, label: 'FastAPI' },
  { icon: <BsFiletypeSql />, label: 'SQL' },
  { icon: <SiPostgresql />, label: 'PostgreSQL' },
  { icon: <SiDocker />, label: 'Docker' },
  { icon: <FaHtml5 />, label: 'HTML5' },
  { icon: <FaCss3Alt />, label: 'CSS3' },
];

export const Skills: React.FC = () => {
  return (
    <SectionContainer id="skills">
      <FloatingBackgroundSkills />
    
      <ContentBox sx={{ zIndex: 2 }}>
        <AnimationOnScroll animateIn="animate__fadeInUp">
        <Title>Minhas Skills</Title>
        </AnimationOnScroll>
        
        <AnimationOnScroll animateIn="animate__fadeInUp" delay={200}>
          <Typography
            variant="h6"
            sx={{ marginBottom: '40px', color: 'text.secondary', fontSize: '1.2rem', fontWeight: 400 }}
          >
            Aqui estão as tecnologias e ferramentas com as quais tenho conhecimento:
          </Typography>
        </AnimationOnScroll>

        <SkillsGrid>
          {skillsData.map((skill, index) => (
            <AnimationOnScroll 
              key={index} 
              animateIn="animate__fadeInUp" 
              delay={100 * index}
            >
              <SkillCard>
                <SkillIcon>{skill.icon}</SkillIcon>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  {skill.label}
                </Typography>
              </SkillCard>
            </AnimationOnScroll>
          ))}
        </SkillsGrid>

        <AnimationOnScroll animateIn="animate__fadeInUp" delay={100 * skillsData.length}>
          <Typography
            variant="h6"
            sx={{ marginTop: '40px', color: 'text.secondary', fontSize: '1rem', fontWeight: 400 }}
          >
            Eu busco sempre melhorar minhas habilidades e aprender novas ferramentas que se encaixem com meu perfil e paixão por <strong style={{ color: alpha('#FFEB3B', 1) }}>soluções eficazes</strong>.
          </Typography>
        </AnimationOnScroll>
      </ContentBox>
    
    </SectionContainer>
  );
};