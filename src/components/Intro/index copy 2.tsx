// import { useState, useEffect } from 'react';
// import Typewriter from 'typewriter-effect';
// import { 
//   Box, 
//   Button, 
//   Typography, 
//   keyframes, 
//   styled,
//   useTheme,
//   alpha,
//   IconButton,
//   Tooltip,
//   Container
// } from '@mui/material';
// import { Link as ScrollLink } from 'react-scroll';
// import DownloadIcon from '@mui/icons-material/Download';
// import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import EmailIcon from '@mui/icons-material/Email';
// import curriculo from '@/assets/docs/curriculo.pdf';

// // Novas animações
// const fadeInUp = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(50px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const pulse = keyframes`
//   0% {
//     transform: scale(1);
//     box-shadow: 0 0 0 0 rgba(255, 235, 59, 0.7);
//   }
//   70% {
//     transform: scale(1.05);
//     box-shadow: 0 0 0 10px rgba(255, 235, 59, 0);
//   }
//   100% {
//     transform: scale(1);
//     box-shadow: 0 0 0 0 rgba(255, 235, 59, 0);
//   }
// `;

// const float = keyframes`
//   0% {
//     transform: translateY(0px);
//   }
//   50% {
//     transform: translateY(-15px);
//   }
//   100% {
//     transform: translateY(0px);
//   }
// `;

// const gradientBackground = keyframes`
//   0% {
//     background-position: 0% 50%;
//   }
//   50% {
//     background-position: 100% 50%;
//   }
//   100% {
//     background-position: 0% 50%;
//   }
// `;

// const shine = keyframes`
//   0% {
//     background-position: -200% 0;
//   }
//   100% {
//     background-position: 200% 0;
//   }
// `;

// // Componentes estilizados
// const IntroContainer = styled(Box)(({ theme }) => ({
//   minHeight: '100vh',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   position: 'relative',
//   overflow: 'hidden',
//   background: `linear-gradient(-45deg, 
//     ${theme.palette.background.default}, 
//     #1a1a1a, 
//     ${alpha(theme.palette.primary.main, 0.15)}, 
//     #1a1a1a
//   )`,
//   backgroundSize: '400% 400%',
//   animation: `${gradientBackground} 15s ease infinite`,
//   padding: theme.spacing(3),
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: `radial-gradient(circle at 20% 30%, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 50%),
//                 radial-gradient(circle at 80% 70%, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 50%)`,
//     zIndex: 1,
//   },
// }));

// const ContentWrapper = styled(Container)(({ theme }) => ({
//   textAlign: 'center',
//   zIndex: 2,
//   position: 'relative',
//   animation: `${fadeInUp} 0.8s ease-out forwards`,
//   opacity: 0,
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   gap: theme.spacing(4),
// }));

// const NameText = styled(Box)(({ theme }) => ({
//   marginBottom: theme.spacing(2),
//   overflow: 'hidden',
// }));

// const NameGradient = styled(Typography)(({ theme }) => ({
//   fontSize: 'clamp(2.8rem, 10vw, 5rem)',
//   fontWeight: 800,
//   background: `linear-gradient(135deg, 
//     ${theme.palette.primary.main} 0%, 
//     ${theme.palette.primary.light} 50%, 
//     ${theme.palette.primary.main} 100%)`,
//   backgroundSize: '200% auto',
//   backgroundClip: 'text',
//   WebkitBackgroundClip: 'text',
//   WebkitTextFillColor: 'transparent',
//   animation: `${shine} 3s linear infinite`,
//   display: 'inline-block',
//   margin: 0,
//   padding: 0,
//   lineHeight: 1.1,
// }));

// const TitleWrapper = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   gap: theme.spacing(1.5),
//   marginBottom: theme.spacing(4),
//   flexWrap: 'wrap',
// }));

// const StaticText = styled(Typography)(({ theme }) => ({
//   fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
//   fontWeight: 400,
//   color: theme.palette.text.secondary,
// }));

// const TypewriterEffect = styled(Box)(({ theme }) => ({
//   fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
//   fontWeight: 700,
//   color: theme.palette.primary.main,
//   minHeight: '3.5rem',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   textShadow: `0 0 10px ${alpha(theme.palette.primary.main, 0.5)}`,
// }));

// const DownloadButton = styled(Button)(({ theme }) => ({
//   padding: '16px 36px',
//   fontSize: '1.1rem',
//   fontWeight: 600,
//   borderRadius: '50px',
//   background: `linear-gradient(135deg, 
//     ${theme.palette.primary.main} 0%, 
//     ${theme.palette.primary.dark} 100%)`,
//   color: theme.palette.getContrastText(theme.palette.primary.main),
//   boxShadow: `0 8px 30px ${alpha(theme.palette.primary.main, 0.4)}`,
//   transition: 'all 0.3s ease',
//   textTransform: 'none',
//   position: 'relative',
//   overflow: 'hidden',
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: '-100%',
//     width: '100%',
//     height: '100%',
//     background: `linear-gradient(90deg, transparent, ${alpha('#fff', 0.2)}, transparent)`,
//     transition: '0.5s',
//   },
//   '&:hover': {
//     transform: 'translateY(-3px)',
//     boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.6)}`,
//     '&::before': {
//       left: '100%',
//     },
//   },
// }));

// const ArrowDownButton = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   width: '60px',
//   height: '60px',
//   borderRadius: '50%',
//   background: alpha(theme.palette.primary.main, 0.1),
//   color: theme.palette.primary.main,
//   cursor: 'pointer',
//   transition: 'all 0.3s ease',
//   animation: `${float} 3s ease-in-out infinite, ${pulse} 2s infinite`,
//   marginTop: theme.spacing(2),
//   border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
//   '&:hover': {
//     background: alpha(theme.palette.primary.main, 0.2),
//     transform: 'scale(1.1)',
//     animation: 'none',
//   },
// }));

// const ButtonGroup = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   gap: theme.spacing(3),
// }));

// const SocialIcons = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'center',
//   gap: theme.spacing(3),
//   marginTop: theme.spacing(4),
// }));

// const SocialIcon = styled(IconButton)(({ theme }) => ({
//   width: '50px',
//   height: '50px',
//   borderRadius: '50%',
//   background: alpha(theme.palette.primary.main, 0.1),
//   color: theme.palette.primary.main,
//   transition: 'all 0.3s ease',
//   border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
//   '&:hover': {
//     background: alpha(theme.palette.primary.main, 0.2),
//     transform: 'translateY(-5px)',
//     boxShadow: `0 5px 15px ${alpha(theme.palette.primary.main, 0.3)}`,
//   },
// }));

// export const Intro = () => {
//   const theme = useTheme();
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const handleDownloadClick = () => {
//     const link = document.createElement('a');
//     link.href = curriculo;
//     link.download = 'Curriculo_Leonan_Thomaz.pdf';
//     link.click();
//   };

//   const socialLinks = {
//     linkedin: 'https://linkedin.com/in/seu-perfil',
//     github: 'https://github.com/seu-usuario',
//     email: 'mailto:seu-email@exemplo.com'
//   };

//   return (
//     <IntroContainer id="intro">
//       <ContentWrapper maxWidth="md" sx={{ opacity: isVisible ? 1 : 0 }}>
//         <NameText>
//           <NameGradient variant="h1">
//             Leonan Thomaz
//           </NameGradient>
//         </NameText>

//         <TitleWrapper>
//           <StaticText>Desenvolvedor</StaticText>
//           <TypewriterEffect>
//             <Typewriter
//               options={{
//                 strings: ['FullStack', 'Backend', 'Frontend', 'React', 'Node.js'],
//                 autoStart: true,
//                 delay: 75,
//                 loop: true,
//                 deleteSpeed: 50,
//               }}
//             />
//           </TypewriterEffect>
//         </TitleWrapper>

//         <ButtonGroup>
//           <DownloadButton
//             onClick={handleDownloadClick}
//             startIcon={<DownloadIcon />}
//             size="large"
//             variant="contained"
//           >
//             Baixar Currículo
//           </DownloadButton>

//           <ScrollLink
//             to="about"
//             smooth={true}
//             duration={800}
//             spy={true}
//             offset={-80}
//             style={{ textDecoration: 'none' }}
//           >
//             <ArrowDownButton>
//               <KeyboardDoubleArrowDownIcon fontSize="large" />
//             </ArrowDownButton>
//           </ScrollLink>
//         </ButtonGroup>

//         <SocialIcons>
//           <Tooltip title="LinkedIn" arrow>
//             <SocialIcon 
//               href={socialLinks.linkedin} 
//               target="_blank" 
//               rel="noopener noreferrer"
//             >
//               <LinkedInIcon />
//             </SocialIcon>
//           </Tooltip>
//           <Tooltip title="GitHub" arrow>
//             <SocialIcon 
//               href={socialLinks.github} 
//               target="_blank" 
//               rel="noopener noreferrer"
//             >
//               <GitHubIcon />
//             </SocialIcon>
//           </Tooltip>
//           <Tooltip title="E-mail" arrow>
//             <SocialIcon 
//               href={socialLinks.email}
//             >
//               <EmailIcon />
//             </SocialIcon>
//           </Tooltip>
//         </SocialIcons>
//       </ContentWrapper>
//     </IntroContainer>
//   );
// };