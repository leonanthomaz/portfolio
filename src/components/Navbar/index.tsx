import { FC, useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  useTheme,
  useMediaQuery,
  alpha,
  styled,
  Typography
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

const navItems = [
  { label: 'Início', to: 'intro', icon: <HomeIcon /> },
  { label: 'Sobre', to: 'about', icon: <PersonIcon /> },
  { label: 'Skills', to: 'skills', icon: <BuildIcon /> },
  { label: 'Experiência', to: 'experiences', icon: <SchoolIcon /> },
  { label: 'Projetos', to: 'projects', icon: <PortfolioIcon /> },
  { label: 'Cursos', to: 'courses', icon: <SchoolIcon /> },
  { label: 'Contato', to: 'contact', icon: <ContactMailIcon /> },
];

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: alpha(theme.palette.background.paper, 0.95),
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
  transition: 'all 0.3s ease',
}));

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

const NameTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.2rem',
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  letterSpacing: '1px',
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
      
      navItems.forEach((item) => {
        const element = document.getElementById(item.to);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(item.to);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledAppBar 
      position="fixed" 
      sx={{ 
        background: scrolled 
          ? alpha(theme.palette.background.paper, 0.98) 
          : alpha(theme.palette.background.paper, 0.95),
        backdropFilter: scrolled ? 'blur(15px)' : 'blur(10px)',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: { xs: 'space-between', md: 'center' },
          alignItems: 'center',
          padding: '0 20px',
          minHeight: '70px !important',
        }}
      >
        {/* Logo/Nome + Hamburger para mobile */}
        <Box sx={{ 
          display: { xs: 'flex', md: 'none' }, 
          alignItems: 'center', 
          gap: 1 
        }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ 
              color: theme.palette.text.primary,
            }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Links para telas maiores */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
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
              activeClass={activeLink === item.to ? 'active' : ''}
              onClick={() => handleSetActive(item.to)}
            >
              {item.label}
            </NavLink>
          ))}
        </Box>

        {/* Espaço vazio para alinhar no mobile */}
        <Box sx={{ display: { xs: 'block', md: 'none' }, width: '48px' }} />

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
          <Box sx={{ 
            p: 2, 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
          }}>
            <NameTypography variant="h6">
              Leonan Thomaz
            </NameTypography>
            <IconButton sx={{ color: theme.palette.primary.light}} onClick={toggleDrawer(false)}>
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
                  activeClass={activeLink === item.to ? 'active' : ''}
                  onClick={() => handleSetActive(item.to)}
                >
                  <Box sx={{ 
                    color: activeLink === item.to 
                      ? theme.palette.primary.main 
                      : theme.palette.text.secondary,
                    display: 'flex',
                    alignItems: 'center',
                  }}>
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