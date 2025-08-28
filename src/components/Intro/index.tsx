import Typewriter from 'typewriter-effect';
import { 
  Box, 
  Button, 
  Typography, 
  keyframes, 
  styled,
  alpha
} from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import DownloadIcon from '@mui/icons-material/Download';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import curriculo from '@/assets/docs/curriculo.pdf';

// Importando os ícones
import { FloatingBackgroundIntro } from '../../utils/FloatingEffect/FloatingBackgroundIntro';

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

// Componentes estilizados
const IntroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  background: theme.palette.background.default,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 30%, ${alpha(theme.palette.primary.main, 0.15)} 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, ${alpha(theme.palette.secondary.main, 0.1)} 0%, transparent 50%)
    `,
    zIndex: 1,
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  zIndex: 3,
  position: 'relative',
  animation: `${fadeInUp} 1s ease-out`,
  width: '100%',
  maxWidth: '1200px',
  padding: theme.spacing(0, 3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 2),
  },
}));

const NameText = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: 'center',
  padding: theme.spacing(0, 2),
}));

const FirstName = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
  fontWeight: 900,
  color: theme.palette.primary.main,
  textTransform: 'uppercase',
  letterSpacing: '4px',
  display: 'inline',
  marginRight: theme.spacing(1),
  textShadow: `0 0 20px ${alpha(theme.palette.primary.main, 0.7)}`,
  fontFamily: "'Poppins', sans-serif",
  [theme.breakpoints.down('sm')]: {
    letterSpacing: '2px',
  },
}));

const LastName = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
  fontWeight: 900,
  color: theme.palette.secondary.main,
  textTransform: 'uppercase',
  letterSpacing: '4px',
  display: 'inline',
  textShadow: `0 0 15px ${alpha(theme.palette.secondary.main, 0.5)}`,
  fontFamily: "'Poppins', sans-serif",
  [theme.breakpoints.down('sm')]: {
    letterSpacing: '2px',
  },
}));

const TitleWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(6),
  flexWrap: 'wrap',
  padding: theme.spacing(0, 2),
}));

const StaticText = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
  fontWeight: 400,
  color: theme.palette.text.secondary,
  fontFamily: "'Poppins', sans-serif",
}));

const TypewriterEffect = styled(Box)(({ theme }) => ({
  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
  fontWeight: 700,
  color: theme.palette.primary.main,
  minHeight: '3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textShadow: `0 0 12px ${alpha(theme.palette.primary.main, 0.5)}`,
  fontFamily: "'Poppins', sans-serif",
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  padding: '16px 32px',
  fontSize: '1.1rem',
  fontWeight: 600,
  borderRadius: '8px',
  background: theme.palette.primary.main,
  color: theme.palette.getContrastText(theme.palette.primary.main),
  boxShadow: `0 8px 30px ${alpha(theme.palette.primary.main, 0.3)}`,
  transition: 'all 0.3s ease',
  textTransform: 'none',
  fontFamily: "'Poppins', sans-serif",
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.5)}`,
    background: theme.palette.primary.dark,
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

const TransitionEffect = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '250px',
  background: `linear-gradient(to top, 
    ${theme.palette.background.default} 20%, 
    transparent
  )`,
  pointerEvents: 'none',
  zIndex: 2,
}));

export const Intro = () => {
  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = curriculo;
    link.download = 'Curriculo_Leonan_Thomaz.pdf';
    link.click();
  };

  return (
    <IntroContainer id="intro">
      <FloatingBackgroundIntro  />
      
      <ContentWrapper>
        <NameText>
          <FirstName variant="h1">LEONAN</FirstName>
          <LastName variant="h1">THOMAZ</LastName>
        </NameText>

        <TitleWrapper>
          <StaticText>Dev</StaticText>
          <TypewriterEffect>
            <Typewriter
              options={{
                strings: [
                  'Python',
                  'de Automação',
                  'de APIs',
                  'Web',
                  'de Dados',
                  'FullStack'
                ],
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
      <TransitionEffect />
    </IntroContainer>
  );
};