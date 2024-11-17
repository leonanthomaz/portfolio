// src/components/Footer/index.tsx
import { Box, Container, Typography, Link } from '@mui/material';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  color: '#fff',
  padding: '40px 0',
  textAlign: 'center',
  boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.up('md')]: {
    padding: '40px 20px',
  },
}));

const SocialLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '20px',
  [theme.breakpoints.down('sm')]: {
    gap: '15px',
  },
}));

const SocialLink = styled(Link)(() => ({
  transition: 'transform 0.3s, opacity 0.3s',
  '&:hover': {
    transform: 'scale(1.1)',
    opacity: 0.8,
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
          Copyright: Leonan Thomaz ©{new Date().getFullYear()}
        </Typography>
        <Typography variant="body2" sx={{ marginTop: '8px', opacity: 0.7 }}>
          Desenvolvido com dedicação |{' '}
          <Link href="#intro" color="inherit" underline="hover">
            Voltar ao topo
          </Link>
        </Typography>
        <SocialLinks>
          <SocialLink
            href="https://github.com/seu-username"
            target="_blank"
            aria-label="GitHub"
            color="inherit"
          >
            <FaGithub size={28} />
          </SocialLink>
          <SocialLink
            href="https://linkedin.com/in/seu-username"
            target="_blank"
            aria-label="LinkedIn"
            color="inherit"
          >
            <FaLinkedin size={28} />
          </SocialLink>
          <SocialLink
            href="https://twitter.com/seu-username"
            target="_blank"
            aria-label="Twitter"
            color="inherit"
          >
            <FaTwitter size={28} />
          </SocialLink>
          <SocialLink
            href="https://instagram.com/seu-username"
            target="_blank"
            aria-label="Instagram"
            color="inherit"
          >
            <FaInstagram size={28} />
          </SocialLink>
        </SocialLinks>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
