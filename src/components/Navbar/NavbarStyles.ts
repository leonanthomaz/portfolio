// NavbarStyles.ts
import { AppBar, Drawer } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-scroll';

export const NavbarWrapper = styled(AppBar)`
  position: fixed;
  background-color: ${({ theme }) => theme.palette.background.paper};
  color: ${({ theme }) => theme.palette.primary.main};
  box-shadow: none;
  padding: 5px 0;
  z-index: 1200;
`;

export const NavbarLink = styled(Link)`
  color: ${({ theme }) => theme.palette.text.secondary};
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
    border-bottom: 2px solid ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.main};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const DrawerLink = styled(Link)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.palette.secondary.main};
  }

  &.active {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

export const MenuDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    padding-top: 20px;
    width: 250px;
    background-color: ${({ theme }) => theme.palette.background.paper};
    color: ${({ theme }) => theme.palette.primary.main};
    border-left: 2px solid ${({ theme }) => theme.palette.primary.main};
  }
`;
