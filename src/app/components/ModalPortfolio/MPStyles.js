import styled from "styled-components";
import { Modal } from "react-bootstrap";

export const CustomModal = styled(Modal)`
    .modal-dialog {
        max-width: 90vw; /* Ocupa até 90% da largura da tela */
        max-height: 70vh; /* Ocupa até 80% da altura da tela */
        width: 100%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        top: 30px; /* Adiciona espaço para evitar que o modal se esconda atrás da barra de navegação */

        @media (max-width: 760px) {
            max-width: 95vw; /* Ajusta a largura para telas menores */
            max-height: 95vh; /* Ajusta a altura para telas menores */
            top: 20px; /* Ajusta o espaço para telas menores */
        }
    }

    .modal-content {
        background-color: #ecececce;
        border-radius: 10px;
        width: 100%;
        height: auto;
        padding: 10px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (max-width: 760px) {
            padding: 10px;
        }
    }
`;


export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ecececce;
`;

export const Header = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 40px;
`;

export const Title = styled.h2`
    color: #14141498; 
    text-align: center; 
    margin: 10px 0;
    line-height: 1.5rem;
    font-family: 'Wendy One', sans-serif;
    font-weight: 500;
    font-size: 28px;
`;

export const SubtitleContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const Subtitle = styled.span`
    font-size: 16px;
    color: #14141498;
`;

export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    margin: 15px 0;

    img {
        max-width: 80%;
        height: auto;
        border-radius: 8px;
    }

    @media (max-width: 760px) {
        img {
            max-width: 100%;
        }
    }
`;

export const Description = styled.p`
    text-align: center;
    padding: 10px;
    font-size: 16px;
    color: #141414;
`;

export const Date = styled.span`
    font-size: 14px;
    color: #141414;
    margin-top: 10px;
`;

export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    width: 100%;
    gap: 10px;

    @media (max-width: 760px) {
        flex-direction: column;
    }
`;

export const Button = styled.a`
    border-radius: 8px;
    padding: 10px 15px;
    margin: 5px;
    background: ${props => props.theme.btn_background};
    text-decoration: none;
    font-weight: 700;
    color: ${props => props.theme.box_font_list};
    text-align: center;
    transition: background-color 0.3s ease;

    &:hover {
        color: white;
        background: green;
    }

    @media (max-width: 760px) {
        width: 100%;
        margin: 5px 0;
    }
`;
