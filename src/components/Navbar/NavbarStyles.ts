import { AppBar, Drawer } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-scroll';

// Navbar com fundo preto e texto amarelo
export const NavbarWrapper = styled(AppBar)`
  position: fixed;
  background-color: #1A1A1A; // Preto
  color: #FFEB3B; // Amarelo
  box-shadow: none;
  padding: 5px 0;
  z-index: 1200; // Garante que a navbar fique acima de outros elementos
`;

// Links com caixa alta, borda embaixo e espaçamento ajustado
export const NavbarLink = styled(Link)`
  color: #B0B0B0; // Cor padrão dos links (cinza para inativo)
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase; // Caixa alta
  letter-spacing: 1px;
  padding: 5px px; // Ajuste de espaçamento entre a borda e o texto
  margin: 0 5px; // Espaço entre os links
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid #FFEB3B; // Borda embaixo ao passar o mouse
    color: #FFEB3B; // Cor do texto ao passar o mouse
  }

  &.active {
    border-bottom: 2px solid #FFEB3B; // Borda ativa nos links
    color: #FFEB3B; // Cor ativa do link
  }
`;

// Menu Drawer com fundo preto e texto amarelo
export const MenuDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 250px;
    background-color: #1A1A1A; // Preto
    color: #FFEB3B; // Amarelo
    border-left: 2px solid #FF9800;
    display: flex;
    justify-content: center; // Centraliza os itens
    align-items: center; // Alinha verticalmente os itens
    text-transform: uppercase; // Caixa alta
  }

  .MuiList-root {
    display: flex;
    flex-direction: column;
    justify-content: center; // Centraliza a coluna
    align-items: center; // Alinha os itens centralizados na coluna
    width: 100%;
    padding: 10px 0;
  }

  .MuiListItem-root {
    width: 100%; // Garante que os itens ocupem toda a largura disponível
    text-align: center; // Centraliza o texto dos itens
  }

  .MuiListItemText-root {
    font-size: 18px;
    font-weight: 500;
    text-align: center; // Garante que o texto também fique centralizado
  }
`;
