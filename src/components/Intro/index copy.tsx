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

const fadeIn = keyframes`
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

const IntroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  background: `linear-gradient(-45deg, ${theme.palette.background.default}, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.1)}, ${theme.palette.background.paper})`,
  backgroundSize: '400% 400%',
  animation: `${gradientBackground} 15s ease infinite`,
  padding: theme.spacing(3),
}));

const ContentWrapper = styled(Box)({
  textAlign: 'center',
  zIndex: 2,
  position: 'relative',
  animation: `${fadeIn} 1s ease-out`,
});

const NameText = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
  fontWeight: 800,
  marginBottom: theme.spacing(2),
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  lineHeight: 1.2,
}));

const TitleWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(4),
  flexWrap: 'wrap',
}));

const StaticText = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1.2rem, 4vw, 2rem)',
  fontWeight: 400,
  color: theme.palette.text.secondary,
}));

const TypewriterEffect = styled(Box)(({ theme }) => ({
  fontSize: 'clamp(1.2rem, 4vw, 2rem)',
  fontWeight: 600,
  color: theme.palette.primary.main,
  minHeight: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  padding: '12px 24px',
  fontSize: '1rem',
  fontWeight: 600,
  borderRadius: '50px',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  color: 'white',
  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
  transition: 'all 0.3s ease',
  textTransform: 'none',
  
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.2)',
    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
  },
}));

const ArrowDown = styled(Box)(({ theme }) => ({
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
  
  '&:hover': {
    background: alpha(theme.palette.primary.main, 0.2),
    transform: 'scale(1.1)',
  },
}));

const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(4),
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
        <NameText variant="h1">
          Leonan Thomaz
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
            <ArrowDown>
              <KeyboardDoubleArrowDownIcon fontSize="large" />
            </ArrowDown>
          </ScrollLink>
        </ButtonGroup>
      </ContentWrapper>
    </IntroContainer>
  );
};