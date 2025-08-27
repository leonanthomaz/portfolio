import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { 
  Box, 
  Button, 
  Typography, 
  keyframes, 
  styled,
  useTheme,
  alpha
} from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import DownloadIcon from '@mui/icons-material/Download';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import curriculo from '@/assets/docs/curriculo.pdf';

// Animações
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const gradientBackground = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const shine = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// Componentes estilizados
const IntroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  background: `linear-gradient(to bottom, 
    ${theme.palette.background.default}, 
    ${alpha('#000', 0.8)} 80%,
    ${alpha('#000', 0.9)}
  )`,
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '150px',
    background: `linear-gradient(to top, 
      ${theme.palette.background.paper}, 
      transparent
    )`,
    zIndex: 1,
  },
}));

const ContentWrapper = styled(Box)({
  textAlign: 'center',
  zIndex: 2,
  position: 'relative',
  animation: `${fadeInUp} 1s ease-out`,
  width: '100%',
  maxWidth: '1200px',
  padding: '0 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const NameText = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: 'center',
}));

const FirstName = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
  fontWeight: 800,
  color: theme.palette.primary.main,
  textTransform: 'uppercase',
  letterSpacing: '2px',
  display: 'inline',
  marginRight: theme.spacing(1),
  textShadow: `0 0 10px ${alpha(theme.palette.primary.main, 0.5)}`,
}));

const LastName = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
  fontWeight: 800,
  color: theme.palette.secondary.main,
  textTransform: 'uppercase',
  letterSpacing: '2px',
  display: 'inline',
  textShadow: `0 0 10px ${alpha(theme.palette.secondary.main, 0.3)}`,
}));

const TitleWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(6),
  flexWrap: 'wrap',
}));

const StaticText = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
  fontWeight: 400,
  color: theme.palette.text.secondary,
}));

const TypewriterEffect = styled(Box)(({ theme }) => ({
  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
  fontWeight: 600,
  color: theme.palette.primary.main,
  minHeight: '3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textShadow: `0 0 8px ${alpha(theme.palette.primary.main, 0.4)}`,
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  padding: '16px 32px',
  fontSize: '1.1rem',
  fontWeight: 600,
  borderRadius: '50px',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: theme.palette.getContrastText(theme.palette.primary.main),
  boxShadow: `0 8px 30px ${alpha(theme.palette.primary.main, 0.3)}`,
  transition: 'all 0.3s ease',
  textTransform: 'none',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.4)}`,
    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
  },
}));

const ArrowDownButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  background: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.main,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  animation: `${float} 3s ease-in-out infinite`,
  marginTop: theme.spacing(4),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  '&:hover': {
    background: alpha(theme.palette.primary.main, 0.2),
    transform: 'scale(1.1)',
  },
}));

const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
}));

export const Intro = () => {
  const theme = useTheme();

  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = curriculo;
    link.download = 'Curriculo_Leonan_Thomaz.pdf';
    link.click();
  };

  return (
    <IntroContainer id="intro">
      <ContentWrapper>
        <NameText>
          <FirstName variant="h1">LEONAN</FirstName>
          <LastName variant="h1">THOMAZ</LastName>
        </NameText>

        <TitleWrapper>
          <StaticText>Desenvolvedor</StaticText>
          <TypewriterEffect>
            <Typewriter
              options={{
                strings: ['FullStack', 'Backend', 'Frontend'],
                autoStart: true,
                delay: 75,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </TypewriterEffect>
        </TitleWrapper>

        <ButtonGroup>
          <DownloadButton
            onClick={handleDownloadClick}
            startIcon={<DownloadIcon />}
            size="large"
          >
            Baixar Currículo
          </DownloadButton>

          <ScrollLink
            to="about"
            smooth={true}
            duration={800}
            spy={true}
            offset={-80}
            style={{ textDecoration: 'none' }}
          >
            <ArrowDownButton>
              <KeyboardDoubleArrowDownIcon fontSize="large" />
            </ArrowDownButton>
          </ScrollLink>
        </ButtonGroup>
      </ContentWrapper>
    </IntroContainer>
  );
};