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
import { 
  FaPython, 
  FaReact, 
  FaDocker,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiPostgresql,
  SiFastapi
} from 'react-icons/si';

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

const moveParticle = keyframes`
  0%, 100% {
    transform: translate(var(--x-start), var(--y-start)) rotate(var(--rotate-start, 0deg));
  }
  25% {
    transform: translate(var(--x-mid1), var(--y-mid1)) rotate(var(--rotate-mid1, 5deg));
  }
  50% {
    transform: translate(var(--x-mid2), var(--y-mid2)) rotate(var(--rotate-mid2, -5deg));
  }
  75% {
    transform: translate(var(--x-mid3), var(--y-mid3)) rotate(var(--rotate-mid3, 2deg));
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

const FloatingIcon = styled(Box)(({ theme }) => ({
  position: 'absolute',
  color: alpha(theme.palette.secondary.main, 0.08),
  fontSize: 'clamp(5rem, 15vw, 12rem)',
  zIndex: 0,
  animation: `${moveParticle} var(--animation-duration, 15s) infinite ease-in-out`,
  // Definições de variáveis CSS para cada ícone
  '&:nth-of-type(1)': { // Python
    top: '15%',
    left: '10%',
    '--x-start': '0px', '--y-start': '0px',
    '--x-mid1': '20px', '--y-mid1': '-30px',
    '--x-mid2': '-10px', '--y-mid2': '10px',
    '--x-mid3': '30px', '--y-mid3': '-20px',
    '--animation-duration': '18s',
    animationDelay: '0s',
  },
  '&:nth-of-type(2)': { // TypeScript
    top: '25%',
    right: '10%',
    '--x-start': '0px', '--y-start': '0px',
    '--x-mid1': '-25px', '--y-mid1': '15px',
    '--x-mid2': '15px', '--y-mid2': '-5px',
    '--x-mid3': '-10px', '--y-mid3': '20px',
    '--animation-duration': '16s',
    animationDelay: '2s',
  },
  '&:nth-of-type(3)': { // React
    top: '60%',
    left: '5%',
    '--x-start': '0px', '--y-start': '0px',
    '--x-mid1': '10px', '--y-mid1': '-20px',
    '--x-mid2': '-30px', '--y-mid2': '5px',
    '--x-mid3': '20px', '--y-mid3': '-15px',
    '--animation-duration': '20s',
    animationDelay: '4s',
  },
  '&:nth-of-type(4)': { // FastAPI
    top: '70%',
    right: '20%',
    '--x-start': '0px', '--y-start': '0px',
    '--x-mid1': '-15px', '--y-mid1': '25px',
    '--x-mid2': '20px', '--y-mid2': '-10px',
    '--x-mid3': '-5px', '--y-mid3': '30px',
    '--animation-duration': '17s',
    animationDelay: '6s',
  },
  '&:nth-of-type(5)': { // Docker
    bottom: '10%',
    left: '20%',
    '--x-start': '0px', '--y-start': '0px',
    '--x-mid1': '25px', '--y-mid1': '-10px',
    '--x-mid2': '-5px', '--y-mid2': '20px',
    '--x-mid3': '15px', '--y-mid3': '-25px',
    '--animation-duration': '19s',
    animationDelay: '8s',
  },
  '&:nth-of-type(6)': { // PostgreSQL
    bottom: '20%',
    right: '5%',
    '--x-start': '0px', '--y-start': '0px',
    '--x-mid1': '-20px', '--y-mid1': '5px',
    '--x-mid2': '10px', '--y-mid2': '-25px',
    '--x-mid3': '-30px', '--y-mid3': '10px',
    '--animation-duration': '15s',
    animationDelay: '10s',
  },
  '&:nth-of-type(7)': { // Node.js
    top: '30%',
    left: '40%',
    '--x-start': '0px', '--y-start': '0px',
    '--x-mid1': '5px', '--y-mid1': '-15px',
    '--x-mid2': '-20px', '--y-mid2': '10px',
    '--x-mid3': '10px', '--y-mid3': '-5px',
    '--animation-duration': '16s',
    animationDelay: '12s',
  },
  '&:nth-of-type(8)': { // Git
    top: '5%',
    left: '70%',
    '--x-start': '0px', '--y-start': '0px',
    '--x-mid1': '-10px', '--y-mid1': '20px',
    '--x-mid2': '25px', '--y-mid2': '-5px',
    '--x-mid3': '-15px', '--y-mid3': '10px',
    '--animation-duration': '21s',
    animationDelay: '14s',
  },
  '&:nth-of-type(9)': { // HTML5
    bottom: '5%',
    left: '60%',
    '--x-start': '0px', '--y-start': '0px',
    '--x-mid1': '30px', '--y-mid1': '-10px',
    '--x-mid2': '-10px', '--y-mid2': '20px',
    '--x-mid3': '20px', '--y-mid3': '-5px',
    '--animation-duration': '17s',
    animationDelay: '16s',
  },
  '&:nth-of-type(10)': { // CSS3
    top: '45%',
    right: '30%',
    '--x-start': '0px', '--y-start': '0px',
    '--x-mid1': '-5px', '--y-mid1': '25px',
    '--x-mid2': '15px', '--y-mid2': '-15px',
    '--x-mid3': '-20px', '--y-mid3': '5px',
    '--animation-duration': '18s',
    animationDelay: '18s',
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
      <FloatingIcon><FaPython /></FloatingIcon>
      <FloatingIcon><SiTypescript /></FloatingIcon>
      <FloatingIcon><FaReact /></FloatingIcon>
      <FloatingIcon><SiFastapi /></FloatingIcon>
      <FloatingIcon><FaDocker /></FloatingIcon>
      <FloatingIcon><SiPostgresql /></FloatingIcon>
      <FloatingIcon><FaNodeJs /></FloatingIcon>
      <FloatingIcon><FaGitAlt /></FloatingIcon>
      <FloatingIcon><FaHtml5 /></FloatingIcon>
      <FloatingIcon><FaCss3Alt /></FloatingIcon>
      
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
                strings: [
                  'Python',
                  'Automação',
                  'APIs',
                  'Dados',
                  'Web Apps',
                  'ML',
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