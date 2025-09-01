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
  Typography,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {
  Instagram,
} from '@mui/icons-material';
import {
  Link as ScrollLink
} from 'react-scroll';

// Ícones de navegação
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BuildIcon from '@mui/icons-material/Build';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import SchoolIcon from '@mui/icons-material/School';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import WorkIcon from '@mui/icons-material/Work';

// Ícones para redes sociais e blog
// import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FaWhatsapp } from 'react-icons/fa';
import LogoHandler from './LogoHandler';
import RssFeedIcon from '@mui/icons-material/RssFeed';

const navItems = [
  { label: 'Início', to: 'intro', icon: <HomeIcon /> },
  { label: 'Sobre', to: 'about', icon: <PersonIcon /> },
  { label: 'Skills', to: 'skills', icon: <BuildIcon /> },
  { label: 'Experiência', to: 'experiences', icon: <WorkIcon /> },
  { label: 'Projetos', to: 'projects', icon: <FolderOpenIcon /> },
  { label: 'Cursos', to: 'courses', icon: <SchoolIcon /> },
  { label: 'Contato', to: 'contact', icon: <ContactMailIcon /> },
];

const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/leonanthomaz', icon: <LinkedInIcon /> },
  { name: 'Instagram', url: 'https://instagram.com/leonan.thomaz', icon: <Instagram /> },
  { name: 'Whatsapp', url: 'https://wa.me/5521998090928', icon: <FaWhatsapp /> },
  { name: 'Blog', url: 'https://leonanthomaz-blog.vercel.app', icon: <RssFeedIcon /> },
];

interface StyledAppBarProps {
  scrolled?: boolean;
}

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'scrolled',
})<StyledAppBarProps>(({ theme, scrolled }) => ({
  background: scrolled 
    ? alpha(theme.palette.background.paper, 0.98) 
    : 'transparent', // Fundo transparente no topo
  backdropFilter: scrolled ? 'blur(15px)' : 'none', // Sem blur no topo
  boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.15)' : 'none', // Sem sombra no topo
  borderBottom: scrolled 
    ? `1px solid ${alpha(theme.palette.divider, 0.2)}`
    : 'none', // Sem borda no topo
  transition: 'all 0.3s ease',
  minHeight: '70px',
  padding: theme.spacing(1, 2),
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
    bottom: '0',
    left: '50%',
    width: '0',
    height: '2px',
    backgroundColor: theme.palette.primary.main,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'translateX(-50%)',
  },
  
  '&:hover': {
    color: theme.palette.primary.main,
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

const SocialIconsContainer = styled(Box)(({ }) => ({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  paddingLeft: '16px',
}));

// Corrigindo o erro do TypeScript
const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
    transform: 'translateY(-2px)',
  },
}));

const DrawerLink = styled(ScrollLink)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '16px',
  fontWeight: 500,
  textDecoration: 'none',
  cursor: 'pointer',
  padding: '10px 22px',
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
      scrolled={scrolled} // Adicione a prop aqui
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 20px',
          minHeight: '70px !important',
        }}
      >
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ color: theme.palette.text.primary, mr: 1 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <LogoHandler />
        </Box>

        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 2,
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

        <SocialIconsContainer sx={{ display: { xs: 'none', md: 'flex' } }}>
          {socialLinks.map((link) => (
            <Tooltip key={link.name} title={link.name} arrow>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                style={{ display: 'inline-flex' }}
              >
                <SocialIconButton>
                  {link.icon}
                </SocialIconButton>
              </a>
            </Tooltip>
          ))}
        </SocialIconsContainer>

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
            borderBottom: `1px solid ${alpha(theme.palette.divider, 0.2)}`
          }}>
            <LogoHandler />
            <IconButton sx={{ color: theme.palette.text.secondary}} onClick={toggleDrawer(false)}>
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

          <Box sx={{ p: 2, mt: 2, borderTop: `1px solid ${alpha(theme.palette.divider, 0.2)}` }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1, ml: 2 }}>
              Redes Sociais
            </Typography>
            <SocialIconsContainer>
              {socialLinks.map((link) => (
                <Tooltip key={link.name} title={link.name} arrow>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    style={{ display: 'inline-flex' }}
                  >
                    <SocialIconButton>
                      {link.icon}
                    </SocialIconButton>
                  </a>
                </Tooltip>
              ))}
            </SocialIconsContainer>
          </Box>
        </Drawer>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;