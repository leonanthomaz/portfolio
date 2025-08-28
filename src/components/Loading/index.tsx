import { CircularProgress, Box, Typography, keyframes, useTheme, useMediaQuery } from '@mui/material';
import { SiPython, SiDjango, SiFlask, SiPandas, SiTensorflow, SiDocker } from 'react-icons/si';
import { styled } from '@mui/system';
import { useState, useEffect } from 'react';

// Animações
const snakeMove = keyframes`
  0% { transform: translateX(-100%) rotate(0deg); }
  100% { transform: translateX(100vw) rotate(360deg); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  33% { transform: translateY(-10px) rotate(5deg); }
  66% { transform: translateY(5px) rotate(-5deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.7; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
`;

const codeTyping = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

// Componentes estilizados
const PythonSnake = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '20%',
  left: 0,
  fontSize: '3rem',
  color: theme.palette.primary.main,
  animation: `${snakeMove} 8s linear infinite`,
  opacity: 0.7,
}));

const TechIcon = styled(Box)(({ theme }) => ({
  position: 'absolute',
  fontSize: '2.5rem',
  color: theme.palette.primary.main,
  animation: `${float} 6s ease-in-out infinite`,
  opacity: 0.9,
}));

const CodeSnippet = styled(Box)(({ theme }) => ({
  fontFamily: '"Fira Code", "Monaco", "Consolas", monospace',
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.primary.light,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  marginTop: theme.spacing(3),
  maxWidth: '600px',
  width: '90%',
  textAlign: 'left',
  position: 'relative',
  overflow: 'hidden',
  minHeight: '120px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  '&::after': {
    content: '""',
    position: 'absolute',
    right: '10px',
    bottom: '10px',
    width: '2px',
    height: '1.2em',
    backgroundColor: theme.palette.primary.main,
    animation: `${blink} 1s infinite`,
  }
}));

const CodeLine = styled(Box)({
  width: '100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  marginBottom: '4px',
  fontFamily: 'inherit',
});

const Loading = ({ isVisible }: { isVisible: boolean }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const maxWidth = isMobile ? 300 : 600;
  
  const [codeLines, setCodeLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [particles] = useState(() =>
    [...Array(isMobile ? 8 : 15)].map((_, i) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      text: ['import', 'def', 'class', 'return', 'print', 'lambda'][i % 6],
    }))
  );


  // const pythonCode = [
  //   ">>> import portfolio",
  //   ">>> portfolio.load()", 
  //   ">>> developer = Developer('Leonan')",
  //   ">>> skills = ['Python', 'Django', 'Data Science']",
  //   ">>> projects = load_projects()",
  //   ">>> print('Portfolio carregado!')"
  // ];

  const pythonCode = [
    ">>> import portfolio",
    ">>> portfolio.load()",
    ">>> print('Portfolio pronto!')"
  ];

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      if (lineIndex < pythonCode.length) {
        // Adiciona a linha atual às linhas completas
        if (currentLine === pythonCode[lineIndex]) {
          setCodeLines(prev => [...prev, currentLine]);
          setCurrentLine('');
          setLineIndex(prev => prev + 1);
        } 
        // Digita a linha atual caractere por caractere
        else if (currentLine.length < pythonCode[lineIndex].length) {
          setCurrentLine(pythonCode[lineIndex].substring(0, currentLine.length + 1));
        }
      }
    }, 20); // Velocidade de digitação

    return () => clearTimeout(timer);
  }, [isVisible, currentLine, lineIndex, pythonCode]);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999,
        overflow: 'hidden',
        color: 'white',
      }}
    >
      {/* Cobra Python animada */}
      <PythonSnake>
        <SiPython />
      </PythonSnake>

      {/* Ícones de tecnologias flutuantes */}
      <TechIcon sx={{ top: '15%', left: '20%', animationDelay: '0s' }}>
        <SiDjango />
      </TechIcon>
      <TechIcon sx={{ top: '30%', right: '15%', animationDelay: '1s' }}>
        <SiFlask />
      </TechIcon>
      <TechIcon sx={{ bottom: '25%', left: '10%', animationDelay: '2s' }}>
        <SiPandas />
      </TechIcon>
      <TechIcon sx={{ bottom: '15%', right: '20%', animationDelay: '3s' }}>
        <SiTensorflow />
      </TechIcon>
      <TechIcon sx={{ top: '40%', left: '30%', animationDelay: '4s' }}>
        <SiDocker />
      </TechIcon>

      {/* Conteúdo central */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          position: 'relative',
          width: '100%',
          maxWidth: `${maxWidth}px`,
          px: 2,
        }}
      >
        {/* Logo Python central */}
        <Box
          sx={{
            animation: `${pulse} 2s infinite`,
            mb: 3,
          }}
        >
          <SiPython size={isMobile ? 60 : 80} color="#3776AB" />
        </Box>

        {/* Progresso circular */}
        <Box sx={{ position: 'relative', display: 'inline-flex', mb: 3 }}>
          <CircularProgress 
            size={isMobile ? 60 : 80}
            thickness={4}
            color="primary"
            sx={{
              animation: `${pulse} 2s infinite`,
            }}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="body2" component="div" color="primary.main">
              {`${Math.round((lineIndex / pythonCode.length) * 85)}%`}
            </Typography>
          </Box>
        </Box>

        {/* Texto */}
        <Typography variant={isMobile ? "body1" : "h6"} sx={{ mb: 2, fontWeight: 500, textAlign: 'center' }}>
          Inicializando Portfolio Python
        </Typography>

        {/* Código de exemplo - AGORA RESPONSIVO */}
        <CodeSnippet sx={{ maxWidth: `${maxWidth}px` }}>
          {codeLines.map((line, index) => (
            <CodeLine key={index}>{line}</CodeLine>
          ))}
          {currentLine && (
            <CodeLine>
              {currentLine}
              {/* Cursor separado */}
              <Box
                component="span"
                sx={{
                  width: '2px',
                  height: '1.2em',
                  backgroundColor: 'primary.main',
                  ml: 0.5,
                  display: 'inline-block',
                  animation: `${blink} 1s step-start infinite`,
                }}
              />
            </CodeLine>
          )}
        </CodeSnippet>


        {/* Mensagem de status */}
        <Typography variant="caption" sx={{ mt: 2, opacity: 0.8, textAlign: 'center' }}>
          {lineIndex < pythonCode.length ? 'Carregando projetos...' : 'Portfolio pronto!'}
        </Typography>
      </Box>

      {/* Efeito de partículas de código */}
      <Box sx={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
        {particles.map((p, i) => (
          <Typography
            key={i}
            variant="caption"
            sx={{
              position: 'absolute',
              color: 'primary.light',
              opacity: 0.4, // fixo
              fontFamily: 'monospace',
              top: p.top,
              left: p.left,
              animation: `${float} ${3 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: p.delay,
              fontSize: isMobile ? '0.7rem' : '0.8rem',
            }}
          >
            {p.text}
          </Typography>
        ))}
      </Box>


    </Box>
  );
};

export default Loading;