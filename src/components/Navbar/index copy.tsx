import { FC, useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Divider,
  useTheme,
  useMediaQuery,
  alpha,
  styled,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {
  Link as ScrollLink
} from 'react-scroll';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BuildIcon from '@mui/icons-material/Build';
import PortfolioIcon from '@mui/icons-material/FolderOpen';
import SchoolIcon from '@mui/icons-material/School';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

// Array de links de navegação
const navItems = [
  { label: 'Início', to: 'intro', icon: <HomeIcon /> },
  { label: 'Sobre', to: 'about', icon: <PersonIcon /> },
  { label: 'Skills', to: 'skills', icon: <BuildIcon /> },
  { label: 'Experiência', to: 'experiences', icon: <SchoolIcon /> },
  { label: 'Projetos', to: 'projects', icon: <PortfolioIcon /> },
  { label: 'Cursos', to: 'courses', icon: <SchoolIcon /> },
  { label: 'Contato', to: 'contact', icon: <ContactMailIcon /> },
];

// Componente estilizado para a AppBar
const StyledAppBar = styled(AppBar)<{ scrolled: boolean }>(({ theme, scrolled }) => ({
  background: scrolled ? alpha(theme.palette.background.default, 0.95) : 'transparent',
  backdropFilter: scrolled ? 'blur(10px)' : 'none',
  boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.2)' : 'none',
  borderBottom: scrolled ? `1px solid ${alpha(theme.palette.primary.main, 0.1)}` : 'none',
  transition: 'background 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease',
  top: 0,
  zIndex: theme.zIndex.appBar,
}));

// Componente estilizado para os links de navegação
const NavLink = styled(ScrollLink)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '14px',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  padding: '12px 16px',
  margin: '0 4px',
  textDecoration: 'none',
  cursor: 'pointer',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',

  '&:before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: 0,
    height: '2px',
    backgroundColor: theme.palette.primary.main,
    transition: 'all 0.3s ease',
    transform: 'translateX(-50%)',
  },

  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.05),

    '&:before': {
      width: '80%',
    },
  },

  '&.active': {
    color: theme.palette.primary.main,

    '&:before': {
      width: '80%',
    },
  },
}));

// Componente estilizado para os links do Drawer
const DrawerLink = styled(ScrollLink)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '16px',
  fontWeight: 500,
  textDecoration: 'none',
  cursor: 'pointer',
  padding: '12px 24px',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  margin: '4px 0',

  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
    transform: 'translateX(4px)',
  },

  '&.active': {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    fontWeight: 600,
  },
}));

// Estilização do nome/logo
const NameTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.2rem',
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  letterSpacing: '1px',
}));

// Container para os ícones sociais
const SocialIconsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  transition: 'color 0.3s ease, transform 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'scale(1.1)',
  },
}));

const Navbar: FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleSetActive = (link: string) => {
    setActiveLink(link);
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Lógica para detectar o link ativo com base na posição da tela
      let currentActiveLink = '';
      navItems.forEach((item) => {
        const element = document.getElementById(item.to);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Condição melhorada para ativar o link quando a seção está visível na tela
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActiveLink = item.to;
          }
        }
      });
      setActiveLink(currentActiveLink);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Executa ao montar para definir a cor inicial
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledAppBar scrolled={scrolled}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 20px',
          minHeight: '70px !important',
        }}
      >
        {/* Logo/Nome e Hamburger para mobile */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ color: theme.palette.text.primary }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <NameTypography variant="h6" sx={{ display: { xs: 'none', md: 'block' } }}>
            Leonan Oliveira
          </NameTypography>
        </Box>

        {/* Links para telas maiores */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1, // Permite que a box ocupe o espaço restante
          }}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="active"
              onSetActive={handleSetActive}
            >
              {item.label}
            </NavLink>
          ))}
        </Box>

        {/* Ícones sociais para telas maiores */}
        <SocialIconsContainer>
          <SocialIconButton
            href="https://www.linkedin.com/in/leonanoliveira/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </SocialIconButton>
          <SocialIconButton
            href="https://github.com/leonanoliveira"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </SocialIconButton>
          <SocialIconButton
            href="https://wa.me/5521999999999" // Substitua pelo seu número de WhatsApp
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={24} />
          </SocialIconButton>
        </SocialIconsContainer>

        {/* Menu Drawer */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              width: 280,
              background: theme.palette.background.paper,
              backgroundImage: 'none',
            },
          }}
        >
          <Box
            sx={{
              p: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            }}
          >
            <NameTypography variant="h6">
              Leonan Oliveira
            </NameTypography>
            <IconButton onClick={toggleDrawer(false)} sx={{ color: theme.palette.text.primary }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List sx={{ px: 2, pt: 2 }}>
            {navItems.map((item) => (
              <ListItem key={item.to} disablePadding sx={{ mb: 1 }}>
                <DrawerLink
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  activeClass="active"
                  onClick={() => handleSetActive(item.to)}
                >
                  <Box
                    sx={{
                      color: activeLink === item.to
                        ? theme.palette.primary.main
                        : theme.palette.text.secondary,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {item.icon}
                  </Box>
                  {item.label}
                </DrawerLink>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;