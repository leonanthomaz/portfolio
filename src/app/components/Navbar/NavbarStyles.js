import styled, { keyframes } from "styled-components";

// Container da Navbar
export const Container = styled.div`
  position: fixed;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background: ${props => props.theme.navbar_background};
  color: ${props => props.theme.navbar_font};
  box-shadow: ${props => props.theme.navbar_shadow};
  z-index: 999;
`;

// Navbar Left
export const Left = styled.nav`
  display: flex;
`;

// Navbar Right
export const Right = styled.div`
  position: absolute;
  right: 0;
  top: 22px;
  margin-right: 30px;

  @media(max-width: 760px){
    margin-right: 10px;
  }
`;

// Navbar Menu
export const Navbar = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  max-width: 500px;
  margin-top: 15px;
  text-align: center;
  margin-left: 20px;
  color: ${props => props.theme.navbar_font};
  transition: all 0.5s ease;

  @media(max-width: 760px){
    flex-direction: column;
    background: ${props => props.theme.navbar_background_mobile};
    position: absolute;
    transition: all 0.5s ease;
    width: 250px;
    left: ${({ click }) => (click ? '0px' : '-1000px')};
    margin-top: 72px;
    padding: 10px;
    margin-left: 0px;
  }
`;

// Item da Navbar
export const NavbarLi = styled.li`
  padding: 10px;
  list-style: none;
  text-transform: uppercase;
  border: 1px solid transparent;
  font-weight: 500;
  transition: color 0.4s ease, background-color 0.4s ease;

  @media(max-width: 760px){
    line-height: 35px;
  }

  &.active a {
    color: ${props => props.theme.navbar_font_active};
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  a {
    color: ${props => props.theme.navbar_font};
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.navbar_font_hover};
      text-decoration: none;
    }
  }
`;

// Animação de Rotação
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Contêiner de Tema
export const ThemeContainer = styled.div`
  float: right;
  display: flex;
  justify-content: center;
  padding: 5px;
  width: 70px;
  border-radius: 20px;
  background: ${({ theme }) => (theme === 'light' ? '#073767' : '#f5f5f5')}; // Fundo escuro para claro e claro para escuro
  color: ${({ theme }) => (theme === 'light' ? '#f5f5f5' : '#313131')}; // Letra clara para claro e escura para escuro
  animation: ${props => props.animate ? rotateAnimation : 'none'} 1s linear;
  animation-play-state: ${props => props.animate ? 'running' : 'paused'};
  transition: all 0.2s ease;
  cursor: pointer;
`;

// Ícone de Tema
export const ThemeIcon = styled.div`
  margin-top: -2px;
  transition: color 0.2s ease;
`;

// Ícone de Menu
export const Icon = styled.div`
  display: none;
  cursor: pointer;

  @media(max-width: 760px){
    display: block;
    padding: 10px;
    font-size: 32px;
    margin-left: 10px;
  }
`;