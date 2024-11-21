import { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';
import { Intro } from './components/Intro';
import { Routes } from './routes';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Navbar from './components/Navbar';

export const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Navbar />
      <Box id="intro" sx={{ minHeight: '100vh', minWidth: '100%' }}>
        <Intro />
      </Box>
      <Container sx={{ mt: 10 }}>
        <Routes />
      </Container>
      <Footer />
    </div>
  );
};
