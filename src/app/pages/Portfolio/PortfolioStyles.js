import styled from "styled-components";

// Container principal
export const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.background};
`;

// Navbar do portfólio
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

// Wrapper dos itens do portfólio
export const Wrapper = styled.div`
  display: ${(props) => (props.isEmpty ? 'flex' : 'grid')};
  flex-direction: ${(props) => (props.isEmpty ? 'column' : 'initial')};
  justify-content: ${(props) => (props.isEmpty ? 'center' : 'initial')};
  align-items: ${(props) => (props.isEmpty ? 'center' : 'initial')};
  grid-template-columns: ${(props) => (props.isEmpty ? 'none' : 'repeat(3, 1fr)')}; // Grid para quando há projetos
  gap: ${(props) => (props.isEmpty ? '0' : '20px')}; // Sem espaço entre itens quando vazio
  padding: 20px;
  max-width: 1200px; // Largura máxima para garantir que a grade não fique muito larga
  margin: 0 auto; // Centraliza o Wrapper horizontalmente

  @media (max-width: 1200px) {
    grid-template-columns: ${(props) => (props.isEmpty ? 'none' : 'repeat(2, 1fr)')}; // 2 colunas para telas médias
  }

  @media (max-width: 760px) {
    grid-template-columns: ${(props) => (props.isEmpty ? 'none' : 'repeat(1, 1fr)')}; // 1 coluna para smartphones
    gap: ${(props) => (props.isEmpty ? '0' : '10px')}; // Reduzido o espaçamento entre os itens em smartphones
  }
`;

// Caixa de cada item do portfólio
export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background: ${(props) => props.theme.portfolio_background_box};
  box-shadow: ${(props) => props.theme.portfolio_box_shadow};
  color: ${props => props.theme.fontColor};

  padding: 10px;
  width: 100%;
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

// Container da imagem do portfólio
export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    border-radius: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    :hover {
      transform: scale(1.05);
      box-shadow: 4px 4px 5px #121214;
    }
  }
`;

// Mensagem quando não há projetos disponíveis
export const EmptyMessage = styled.div`
  display: flex;
  flex-direction: column; // Adiciona direção coluna para centralizar ícone e texto
  justify-content: center;
  align-items: center;
  height: 200px; // Ajuste conforme necessário
  background: ${(props) => props.theme.portfolio_background_box};
  color: ${(props) => props.theme.fontColor};
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.portfolio_box_shadow};
  text-align: center;
  font-size: 18px;
  font-family: 'Josefin Sans', sans-serif;

  svg {
    margin-bottom: 15px; // Espaço entre o ícone e o texto
  }

  p {
    margin: 0;
    padding: 0 20px; // Ajusta o padding horizontal
  }
`;

