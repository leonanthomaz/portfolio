import styled from "styled-components";

export const Container = styled.div`
  background: ${props => props.theme.background}; /* Usar a cor de fundo definida no tema */
  color: ${props => props.theme.fontColor}; /* Usar a cor da fonte definida no tema */
  padding: 40px 0; /* Adicionar padding para espaçamento vertical */
  font-family: ${props => props.theme.font}; /* Fonte global definida no tema */
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 4 colunas para telas grandes
  justify-content: center; // Centraliza o grid horizontalmente
  align-items: center; // Centraliza verticalmente os itens dentro das colunas
  gap: 20px; // Espaçamento entre os ícones
  padding: 20px;
  max-width: 1200px; // Largura máxima para garantir que a grade não fique muito larga
  margin: 0 auto; // Centraliza o Wrapper horizontalmente


  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Left = styled.div`
  flex: 1;
  max-width: 600px; /* Limitar a largura máxima para melhor controle do layout */
`;

export const Right = styled.div`
  flex: 1;
  max-width: 600px; /* Limitar a largura máxima para melhor controle do layout */
`;

