// src/components/Footer/index.tsx
import { 
  Container, 
  Link, 
  Typography, 
  Box, 
  Stack,
  IconButton 
} from '@mui/material';
import { 
  GitHub,
  LinkedIn,
  Twitter,
  Instagram 
} from '@mui/icons-material';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        backgroundColor: 'grey.900',
        color: 'white',
        borderTop: '1px solid',
        borderColor: 'grey.800'
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          alignItems={{ xs: 'center', sm: 'flex-start' }}
          justifyContent="space-between"
        >
          {/* Informações de copyright */}
          <Stack spacing={1} alignItems={{ xs: 'center', sm: 'flex-start' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
              Copyright: Leonan Thomaz ©{new Date().getFullYear()}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              Desenvolvido por Leonan |{' '}
              <Link 
                component="button" 
                onClick={handleScrollToTop}
                sx={{ 
                  color: 'inherit', 
                  textDecoration: 'underline',
                  '&:hover': {
                    opacity: 0.8
                  }
                }}
              >
                Voltar ao topo
              </Link>
            </Typography>
          </Stack>

          {/* Links sociais */}
          <Stack direction="row" spacing={1}>
            <IconButton
              href="https://github.com/leonanthomaz"
              target="_blank"
              aria-label="GitHub"
              sx={{ 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              <GitHub fontSize="medium" />
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/leonanthomaz"
              target="_blank"
              aria-label="LinkedIn"
              sx={{ 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              <LinkedIn fontSize="medium" />
            </IconButton>
            <IconButton
              href="https://twitter.com/leonan.thomaz"
              target="_blank"
              aria-label="Twitter"
              sx={{ 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              <Twitter fontSize="medium" />
            </IconButton>
            <IconButton
              href="https://instagram.com/leonan.thomaz"
              target="_blank"
              aria-label="Instagram"
              sx={{ 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              <Instagram fontSize="medium" />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;