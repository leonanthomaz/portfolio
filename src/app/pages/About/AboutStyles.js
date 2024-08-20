import styled from "styled-components";

// Container principal do About
export const Container = styled.div`
  background: ${props => props.theme.background};
  color: ${props => props.theme.about_fontColorAbout}; /* Usando a cor de fonte definida no tema */
  font-family: ${props => props.theme.font}; /* Fonte global definida no tema */
  padding: 20px; /* Adicione um padding para garantir que o conteúdo não fique colado nas bordas */

  /* Inicialmente, ocultamos ambos os blocos de texto */
  .large-screen-text, .small-screen-text {
      display: none;
  }

  /* Exibimos o bloco de texto grande em telas maiores */
  @media (min-width: 768px) {
      .large-screen-text {
          display: block;
      }
  }

  /* Exibimos o bloco de texto pequeno em telas menores */
  @media (max-width: 767px) {
      .small-screen-text {
          display: block;
      }
  }


`;

// Wrapper para layout de colunas
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 40% 50%;
  justify-content: center;
  align-items: center;
  gap: 20px; /* Adiciona um espaço entre as colunas */

  @media (max-width: 1000px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 5px;
  }
`;

// Seção direita do About
export const Right = styled.div`
  display: flex;
  flex-direction: column; /* Garante que o conteúdo no Right está alinhado verticalmente */
  justify-content: center;
  padding: 5px;
`;

// Seção esquerda do About
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 760px) {
    display: none; /* Oculta a coluna Left em dispositivos móveis */
  }
`;

// Caixa de texto dentro do About
export const BoxText = styled.div`
  background: ${props => props.theme.about_background}; /* Cor de fundo para a caixa de texto */
  box-shadow: ${props => props.theme.about_box_shadow}; /* Sombra da caixa de texto */
  padding: 22px;
  margin-top: 10px;
  font-size: 16px;

  @media (max-width: 760px) {
    width: auto;
    margin: 10px;
    font-size: 14px;
  }
`;

// Contêiner de imagem
export const ImgContainer = styled.div`
  max-width: 300px;

  img {
    width: 100%;
    border-radius: 8px; /* Adiciona bordas arredondadas à imagem */
  }
`;
