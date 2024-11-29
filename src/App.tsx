import { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';
import { Intro } from './components/Intro';
import { Routes } from './routes';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Navbar from './components/Navbar';

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // A animação de saída começa após o tempo da animação de entrada
      setIsExiting(true); 
      setTimeout(() => setLoading(false), 1000); // Aguarda o fadeOut e depois remove o loading
    }, 3000); // Tempo de exibição do Loading

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading isVisible={!isExiting} />;  // Mostra o Loading enquanto o estado for 'loading'
  }

  return (
    <div>
      <Navbar />
      <Box id="intro">
        <Intro />
      </Box>
      <Container>
        <Routes />
      </Container>
      <Footer />
    </div>
  );
};
