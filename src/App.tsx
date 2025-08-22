import { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';
import { Intro } from './components/Intro';
import { Routes } from './routes';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import { MaintenancePage } from './pages/Maintenance';

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  // Captura variável do vite
  const environment = import.meta.env.VITE_ENVIRONMENT?.toUpperCase();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true); 
      setTimeout(() => setLoading(false), 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading isVisible={!isExiting} />;
  }

  // Se estiver em manutenção
  if (environment === "MAINTENANCE") {
    return <MaintenancePage />;
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
