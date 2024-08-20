import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${props => props.theme.background};

  .github {
    color: ${props => props.theme.fontColor};
    text-align: center;

    @media (max-width: 760px) {
      /* display: none; */
    }
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // 4 colunas para telas grandes
  justify-content: center; // Centraliza o grid horizontalmente
  align-items: center; // Centraliza verticalmente os itens dentro das colunas
  gap: 20px; // Espaçamento entre os ícones
  padding: 20px;
  max-width: 1200px; // Largura máxima para garantir que a grade não fique muito larga
  margin: 0 auto; // Centraliza o Wrapper horizontalmente

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); // 3 colunas para telas médias
  }

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr); // 2 colunas para smartphones
    gap: 10px; // Reduzido o espaçamento entre os ícones em smartphones
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  padding: 10px; // Reduzido para diminuir o espaçamento
  width: 100%; // Ajuste a largura para ocupar o espaço disponível
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    /* box-shadow: ${props => props.theme.contact_shadow_hover}; */
  }
`;

export const Titulo = styled.div`
  margin-bottom: 5px;
  font-weight: 700;
  color: ${props => props.theme.fontColor};
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.skills_font};;
  font-size: 50px;
  border-radius: 50%;
  width: 90px; // Ajuste o tamanho do ícone
  height: 90px; // Ajuste o tamanho do ícone
  background: ${props => props.theme.skills_background_box};
  box-shadow: ${props => props.theme.contact_shadow};
  transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.skills_background_box_hover};
    box-shadow: ${props => props.theme.contact_shadow_hover};
    transform: scale(1.1);
  }
`;
