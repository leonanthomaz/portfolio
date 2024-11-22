import { Box } from '@mui/material';
import { About } from '../pages/About';
import { Skills } from '../pages/Skills';
import { Experiences } from '../pages/Experiences';
import { Projects } from '../pages/Projects';
import { Courses } from '../pages/Courses';
import { Contact } from '../pages/Contact';
import GitHub from '../components/Github';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = ({ id, delay, children }: { id: string; delay: string; children: React.ReactNode }) => (
  <Box
    id={id}
    sx={{
      minHeight: '100vh',
      animation: `${fadeIn} 1.5s ease-in-out`,
      animationDelay: delay,
      animationFillMode: 'forwards',
    }}
  >
    {children}
  </Box>
);

export const Routes = () => (
  <>
    <Section id="about" delay="0.2s">
      <About />
    </Section>
    <Section id="skills" delay="0.4s">
      <Skills />
      <GitHub />
    </Section>
    <Section id="experiences" delay="0.6s">
      <Experiences />
    </Section>
    <Section id="projects" delay="0.8s">
      <Projects />
    </Section>
    <Section id="courses" delay="1s">
      <Courses />
    </Section>
    <Section id="contact" delay="1.2s">
      <Contact />
    </Section>
  </>
);
