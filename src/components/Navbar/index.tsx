import { FC, useState } from 'react';
import { Toolbar, Box, IconButton, List, ListItem, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  NavbarWrapper,
  MenuDrawer,
  NavbarLink,
  DrawerLink,
} from './NavbarStyles';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BuildIcon from '@mui/icons-material/Build';
import PortfolioIcon from '@mui/icons-material/FolderOpen';
import SchoolIcon from '@mui/icons-material/School';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useTheme } from '@mui/material/styles';

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
  const theme = useTheme();

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <NavbarWrapper>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 10px',
        }}
      >
        {/* Links para telas maiores */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 1,
            alignItems: 'center',
          }}
        >
          {navItems.map((item) => (
            <NavbarLink
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
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
        <MenuDrawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List sx={{ marginTop: '100px' }}>
            {navItems.map((item) => (
              <ListItem
                key={item.to}
                disablePadding
                sx={{
                  width: '100%',
                  justifyContent: 'flex-start',
                  padding: '13px 26px',
                }}
              >
                <DrawerLink
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  activeClass="active"
                  onClick={toggleDrawer(false)}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {item.icon}
                    {item.label}
                  </Box>
                </DrawerLink>
              </ListItem>
            ))}
            <Divider sx={{ borderColor: theme.palette.primary.main, marginY: 1 }} />
          </List>
        </MenuDrawer>
      </Toolbar>
    </NavbarWrapper>
  );
};

export default Navbar;
