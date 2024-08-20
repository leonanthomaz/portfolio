import styled from "styled-components";
import { FaAngleDoubleDown } from "react-icons/fa";

export const Container = styled.div`
  width: 100%;
  height: auto;
  background: ${props => props.theme.background};
  background-image: url('https://img.freepik.com/vetores-gratis/fundo-de-formas-abstratas-brancas_79603-1362.jpg?w=2000');
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
  position: relative; // Adicionado para garantir que o z-index funcione
`;

export const Box = styled.div`
  padding-top: 80px;
  height: 100vh;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  align-items: center;

  @media(max-height: 450px){
    padding-top: 50px;
  }

  @media(max-width: 600px){
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px){
    padding-top: 30px;
  }

  @media (max-width: 760px){
    display: none;
  }
`;

export const Right = styled.div`
  flex: 3.5;
`;

export const ImgContainer = styled.div`
  width: 400px;
  height: 400px;

  img {
    height: 100%;
  }

  @media (max-width: 1000px){
    width: 300px;
    height: 300px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 80%;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  margin-left: 15px;

  @media (max-width: 760px){
    text-align: center;
    padding-left: 0;
    align-items: center;
    width: 100%;
    margin-top: 0;
    margin-left: 0;
  }

  h1 {
    font-size: 50px;
    margin: 10px 0;
    color: ${props => props.theme.h1};
    font-family: 'Dela Gothic One', cursive;
    text-transform: uppercase;

    @media (max-width: 1000px){
      font-size: 30px;
    }
  }

  h2 {
    font-size: 30px;
    padding-top: 10px;
    text-align: start;
    display: flex;
    align-items: center;

    @media (max-width: 1000px){
      font-size: 25px;
    }

    @media (max-width: 760px){
      font-size: 19px;
    }

    span {
      color: ${props => props.theme.intro_font_Typewriter};
    }
  }

  .arrow-down {
    text-align: center;
  }
`;

export const Arrow = styled(FaAngleDoubleDown)`
  font-size: 56px;
  color: ${props => props.theme.intro_arrow};
  opacity: 1;
  animation: anima 1500ms ease infinite;

  @media (min-width: 1200px){
    margin-top: 3rem;
    font-size: 76px;
  }

  @media (max-width: 760px){
    font-size: 46px;
  }

  @keyframes anima {
    to {
      opacity: 0.1;
      transform: scale(0.85) translateY(20px);
    }
  }
`;

export const FeaturedHorizontal = styled.div`
  width: 100%;
  height: 100vh;
  background-image: ${props => props.theme.intro_background_horizontal};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(max-width: 760px){
    background-image: none;
  }
`;

export const FeaturedVertical = styled.div`
  width: 100%;
  height: 100vh;
  background-image: ${props => props.theme.intro_background_vertical};
`;

// Contêiner do Botão
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px; // Ajuste conforme necessário
`;

// Botão de Download
export const DownloadButton = styled.a`
  background: ${props => props.theme.intro_btn_background}; // Cor de fundo padrão
  color: #fff; // Cor do texto
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
  text-decoration: none;
  width: 220px;
  font-weight: 700;
  transition: background-color 0.3s, color 0.3s; // Transição suave para fundo e texto
  text-align: center;

  &:hover {
    background: ${props => props.theme.intro_btn_background_hover}; // Cor de fundo ao passar o mouse
    color: #dddddd; // Cor do texto ao passar o mouse
  }
`;

