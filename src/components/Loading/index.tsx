import { CircularProgress, Box, Typography, keyframes, useTheme, useMediaQuery } from '@mui/material';
import { SiPython } from 'react-icons/si';
import { styled } from '@mui/system';
import { useState, useEffect } from 'react';

// Animações
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.7; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
`;

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

// Componentes estilizados
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
  minHeight: '100px',
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
    [...Array(isMobile ? 6 : 12)].map((_, i) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      text: ['import', 'def', 'class', 'return', 'print'][i % 5],
    }))
  );

  const pythonCode = [
    ">>> import portfolio",
    ">>> portfolio.load()",
    ">>> print('Portfolio pronto!')"
  ];

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      if (lineIndex < pythonCode.length) {
        if (currentLine === pythonCode[lineIndex]) {
          setCodeLines(prev => [...prev, currentLine]);
          setCurrentLine('');
          setLineIndex(prev => prev + 1);
        } else if (currentLine.length < pythonCode[lineIndex].length) {
          setCurrentLine(pythonCode[lineIndex].substring(0, currentLine.length + 1));
        }
      }
    }, 25);

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
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(6px)',
        zIndex: 9999,
        overflow: 'hidden',
        color: 'white',
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
          sx={{ animation: `${pulse} 2s infinite` }}
        />
        <Box
          sx={{
            top: 0, left: 0, bottom: 0, right: 0,
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

      {/* Console fake */}
      <CodeSnippet sx={{ maxWidth: `${maxWidth}px` }}>
        {codeLines.map((line, index) => (
          <CodeLine key={index}>{line}</CodeLine>
        ))}
        {currentLine && (
          <CodeLine>
            {currentLine}
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

      {/* Partículas leves */}
      <Box sx={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
        {particles.map((p, i) => (
          <Typography
            key={i}
            variant="caption"
            sx={{
              position: 'absolute',
              color: 'primary.light',
              opacity: 0.2,
              fontFamily: 'monospace',
              top: p.top,
              left: p.left,
              animation: `${float} ${3 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: p.delay,
              fontSize: isMobile ? '0.65rem' : '0.8rem',
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
