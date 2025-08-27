// src/components/Footer/index.tsx
import { Container, Link, Typography } from '@mui/material';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FooterContainer, SocialLinks, SocialLink } from './FooterStyles'; // Importando os estilos

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
          Copyright: Leonan Thomaz ©{new Date().getFullYear()}
        </Typography>
        <Typography variant="body2" sx={{ marginTop: '8px', opacity: 0.7 }}>
          Desenvolvido por Leonan |{' '}
          <Link href="#intro" color="inherit" underline="hover">
            Voltar ao topo
          </Link>
        </Typography>
        <SocialLinks>
          <SocialLink
            href="https://github.com/leonan.thomaz"
            target="_blank"
            aria-label="GitHub"
            color="inherit"
          >
            <FaGithub size={28} />
          </SocialLink>
          <SocialLink
            href="https://linkedin.com/in/leonan.thomaz"
            target="_blank"
            aria-label="LinkedIn"
            color="inherit"
          >
            <FaLinkedin size={28} />
          </SocialLink>
          <SocialLink
            href="https://twitter.com/leonan.thomaz"
            target="_blank"
            aria-label="Twitter"
            color="inherit"
          >
            <FaTwitter size={28} />
          </SocialLink>
          <SocialLink
            href="https://instagram.com/leonan.thomaz"
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
