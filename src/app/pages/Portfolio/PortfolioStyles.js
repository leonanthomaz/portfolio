import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.background};
`;

export const NavbarPortfolio = styled.ul`
  margin: 10px;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  @media (max-width: 760px) {
    margin: 10px 0;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 4 colunas para telas grandes
  justify-content: center; // Centraliza o grid horizontalmente
  align-items: center; // Centraliza verticalmente os itens dentro das colunas
  gap: 20px; // Espaçamento entre os ícones
  padding: 20px;
  max-width: 1200px; // Largura máxima para garantir que a grade não fique muito larga
  margin: 0 auto; // Centraliza o Wrapper horizontalmente

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr); // 3 colunas para telas médias
  }

  @media (max-width: 760px) {
    grid-template-columns: repeat(1, 1fr); // 2 colunas para smartphones
    gap: 10px; // Reduzido o espaçamento entre os ícones em smartphones
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background: ${(props) => props.theme.portfolio_background_box};
  box-shadow: ${(props) => props.theme.portfolio_box_shadow};
  color: ${props => props.theme.fontColor};

  padding: 10px; // Reduzido para diminuir o espaçamento
  width: 100%; // Ajuste a largura para ocupar o espaço disponível
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: ${props => props.theme.contact_shadow_hover};
  }

  h2, p, span, .date, .btn-container {
    text-align: center;
    padding: 5px;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    color: ${(props) => props.theme.portfolio_font_h2};
    border-bottom: ${(props) => props.theme.portfolio_borderbottom};
  }

  p {
    font-size: 14px;
    font-family: 'Josefin Sans', sans-serif;
  }

  span {
    font-weight: 700;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
  }

  .date {
    font-family: 'Josefin Sans', sans-serif;
    color: gray;
  }

  .btn-container {
    margin-top: 15px;

    button {
      background: ${(props) => props.theme.portfolio_btn_background};
      color: ${(props) => props.theme.portfolio_btn_font};
      font-weight: 700;
      border: none;
      padding: 10px 20px;
      border-radius: 10px;
      transition: background 0.3s ease, color 0.3s ease;
      cursor: pointer;
      font-size: 14px;

      :hover {
        background: ${(props) => props.theme.portfolio_btn_background_hover};
        color: ${(props) => props.theme.portfolio_btn_font_hover};
      }
    }
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    border-radius: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    /* Efeito de hover na imagem */
    :hover {
      transform: scale(1.05);
      box-shadow: 4px 4px 5px #121214;
    }
  }
`;
