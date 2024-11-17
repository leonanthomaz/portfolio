import { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Experiences } from './pages/Experiences';
import { Projects } from './pages/Projects';
import { Courses } from './pages/Courses';
import { Contact } from './pages/Contact';
import Navbar from './components/Navbar';
import { Intro } from './components/Intro';
import { GlobalStyles } from './styles/GlobalStyles';
import GitHub from './components/Github';
import Footer from './components/Footer';
import Loading from './components/Loading';
import { keyframes } from '@emotion/react';

// Animação de fade-in progressiva
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

export const App = () => {
  const [loading, setLoading] = useState(true); // Estado de carregamento

  // Simula o carregamento inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer); // Limpa o timeout ao desmontar
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <GlobalStyles />
      <Navbar />

      <Box id="intro" sx={{ minHeight: '100vh', minWidth: '100%' }}>
        <Intro />
      </Box>

      {/* Conteúdo com animação progressiva */}
      <Container
        sx={{
          mt: 10,
          animation: `${fadeIn} 1.5s ease-in-out`, // Animação global do container
          opacity: 0,
          animationFillMode: 'forwards',
        }}
      >
        <Box
          id="about"
          sx={{
            minHeight: '100vh',
            animation: `${fadeIn} 1.5s ease-in-out`,
            animationDelay: '0.2s',
            animationFillMode: 'forwards',
          }}
        >
          <About />
        </Box>
        <Box
          id="skills"
          sx={{
            minHeight: '100vh',
            animation: `${fadeIn} 1.5s ease-in-out`,
            animationDelay: '0.4s',
            animationFillMode: 'forwards',
          }}
        >
          <Skills />
        </Box>
        <GitHub />
        <Box
          id="experiences"
          sx={{
            minHeight: '100vh',
            animation: `${fadeIn} 1.5s ease-in-out`,
            animationDelay: '0.6s',
            animationFillMode: 'forwards',
          }}
        >
          <Experiences />
        </Box>
        <Box
          id="projects"
          sx={{
            minHeight: '100vh',
            animation: `${fadeIn} 1.5s ease-in-out`,
            animationDelay: '0.8s',
            animationFillMode: 'forwards',
          }}
        >
          <Projects />
        </Box>
        <Box
          id="courses"
          sx={{
            minHeight: '100vh',
            animation: `${fadeIn} 1.5s ease-in-out`,
            animationDelay: '1s',
            animationFillMode: 'forwards',
          }}
        >
          <Courses />
        </Box>
        <Box
          id="contact"
          sx={{
            minHeight: '100vh',
            animation: `${fadeIn} 1.5s ease-in-out`,
            animationDelay: '1.2s',
            animationFillMode: 'forwards',
          }}
        >
          <Contact />
        </Box>
        <Footer />
      </Container>
    </div>
  );
};
