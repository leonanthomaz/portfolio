import styled from "styled-components";

export const Container = styled.div`
  background: ${props => props.theme.background};
  color: ${props => props.theme.fontColorExperience};
  font-family: ${props => props.theme.font};
  font-size: 15px;

  .vertical-timeline-element-date {
    font-size: 18px;
    font-weight: 900;
  }

  .vertical-timeline-element--work {
    background: ${props => props.theme.cardBackground}; /* Fundo do card */
    color: ${props => props.theme.cardTextColor}; /* Cor do texto do card */
    padding: 1rem;
    border-radius: 10px; /* Adiciona bordas arredondadas */
    margin-bottom: 1rem; /* Espaçamento entre os cards */

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
      padding-left: 0.5rem;
      margin-bottom: 1rem;
    }

    ul li {
      margin-bottom: 0.5rem;
      line-height: 1.5;
    }
  }
`;
