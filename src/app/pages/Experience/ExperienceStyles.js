import styled from "styled-components";

export const Container = styled.div`
background: ${props => props.theme.background};
color: ${props => props.theme.fontColorExperience};
font-family: ${props => props.theme.font};
font-size: 15px; /* Ajustei o tamanho da fonte para 0.8rem */

/* 
.vertical-timeline-element-content{
    background: purple;

} */

/* 
 */

    .vertical-timeline-element-date{
        font-size: 18px;
        font-weight: 900;
    }

    .vertical-timeline-element--work {

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