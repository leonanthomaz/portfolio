import styled from "styled-components";

export const Container = styled.div`
  background: ${props => props.theme.background};
  color: ${props => props.theme.fontColorExperience};
  font-family: ${props => props.theme.font};
  font-size: 15px; /* Ajustei o tamanho da fonte para 0.8rem */

  .vertical-timeline-element-date {
    font-size: 18px;
    font-weight: 900;
  }

  .vertical-timeline-element--education {
    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      font-weight: 700;
    }

    h4 {
      font-size: 1rem;
      margin-bottom: 0.9rem;
    }

    ul {
      list-style: none;
      padding-left: 0.5rem; /* Ajuste aqui: removi a vírgula e alterei para ponto */
      margin-bottom: 1rem; /* Adicionei margem inferior para separar dos elementos subsequentes */
    }

    ul li {
      margin-bottom: 0.5rem;
      line-height: 1.5; /* Adicionei altura de linha para melhor legibilidade */
    }
  }
`;

export const CertButton = styled.a`
  display: inline-block;
  background-color: ${props => props.theme.courses_btn_background};
  color: ${props => props.theme.courses_font};
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-align: center;

  &:hover {
    background-color: ${props => props.theme.courses_btn_background_hover};
    color: ${props => props.theme.courses_font_hover};
  }

  &:active {
    background-color: ${props => props.theme.primaryButtonActiveBackground};
    color: ${props => props.theme.primaryButtonActiveColor};
  }
`;
