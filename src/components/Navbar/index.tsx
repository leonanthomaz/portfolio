import { FC, useState } from 'react';
import { Toolbar, Box, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import { NavbarWrapper, MenuDrawer, NavbarLink } from './NavbarStyles';
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

  // Função para alternar a abertura do drawer
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <NavbarWrapper>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
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
        <MenuDrawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item) => (
              <ListItem button key={item.to} onClick={toggleDrawer(false)}>
                <ListItemText>
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onClick={toggleDrawer(false)}
                    className="nav-link" // Add custom class for active link
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {item.icon}
                      {item.label}
                    </Box>
                  </Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </MenuDrawer>
      </Toolbar>
    </NavbarWrapper>
  );
};

// Exportar como default
export default Navbar;
