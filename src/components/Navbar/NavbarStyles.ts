// NavbarStyles.ts
import { AppBar, Drawer } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-scroll';

// Navbar fixa com estilo moderno
export const NavbarWrapper = styled(AppBar)`
  position: fixed;
  background-color: #1a1a1a;
  color: #ffeb3b;
  box-shadow: none;
  padding: 5px 0;
  z-index: 1200;
`;

// Links da Navbar (desktop)
export const NavbarLink = styled(Link)`
  color: #b0b0b0;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 10px;
  margin: 0 5px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-bottom: 2px solid #ffeb3b;
    color: #ffeb3b;
  }

  &.active {
    border-bottom: 2px solid #ffeb3b;
    color: #ffeb3b;
  }
`;

// Links do Drawer (mobile)
export const DrawerLink = styled(Link)`
  color: #ffeb3b;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff9800;
  }

  &.active {
    color: #ff9800;
  }
`;

// Menu Drawer estilizado
export const MenuDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    padding-top: 20px; // Adiciona padding no topo de todo o drawer
    width: 250px;
    background-color: #1a1a1a;
    color: #ffeb3b;
    border-left: 2px solid #ff9800;
    display: flex;
    justify-content: flex-start; // Alinha os itens no topo
    align-items: center;
  }
`;
