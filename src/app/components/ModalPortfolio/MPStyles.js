import styled from "styled-components";
import { Modal } from "react-bootstrap";

export const CustomModal = styled(Modal)`
    .modal-dialog {
        max-width: 90vw;
        width: 100%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: auto;
        top: 20px;

        @media (max-width: 760px) {
            max-width: 95vw;
        }
    }

    .modal-content {
        background-color: ${props => props.theme.box};
        border-radius: 10px;
        padding: 20px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        z-index: 1000;

        @media (max-width: 760px) {
            padding: 15px;
        }
    }

    .modal-backdrop {
        backdrop-filter: blur(10px); /* Aplica o desfoque ao fundo */
        background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo semitransparente */
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1000;
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h2`
    color: ${props => props.theme.h2};
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
    color: ${props => props.theme.h2};
`;

export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    margin: 15px 0;

    img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
    }

    @media (max-width: 760px) {
        max-width: 95vw;
    }
`;

export const Description = styled.p`
    text-align: center;
    padding: 10px;
    font-size: 16px;
    max-width: 90%;
    color: ${props => props.theme.fontColor};
`;

export const Date = styled.span`
    font-size: 14px;
    color: ${props => props.theme.fontColor};
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
    color: ${props => props.theme.button_font};
    text-align: center;
    transition: background-color 0.3s ease;

    &:hover {
        color: ${props => props.theme.button_font_hover};
        background: ${props => props.theme.btn_background_hover};
    }

    @media (max-width: 760px) {
        width: 100%;
        margin: 5px 0;
    }
`;
