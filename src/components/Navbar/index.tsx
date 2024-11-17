import { FC, useState } from 'react';
import {
  Toolbar,
  Box,
  IconButton,
  List,
  ListItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  NavbarWrapper,
  MenuDrawer,
  NavbarLink,
} from './NavbarStyles';
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

const Navbar: FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <NavbarWrapper>
      <Toolbar
        sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}
      >
        {/* Links para telas maiores */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          {navItems.map((item) => (
            <NavbarLink
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
            >
              {item.label}
            </NavbarLink>
          ))}
        </Box>

        {/* Botão de Menu em Dispositivos Menores */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { md: 'none' } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Menu Drawer */}
        <MenuDrawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.to} disablePadding>
                <NavbarLink
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  activeClass="active"
                  onClick={toggleDrawer(false)} // Fecha o drawer após o clique
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {item.icon}
                    {item.label}
                  </Box>
                </NavbarLink>
              </ListItem>
            ))}
          </List>
        </MenuDrawer>
      </Toolbar>
    </NavbarWrapper>
  );
};

export default Navbar;
