import styled from "styled-components";
import { Modal } from "react-bootstrap";

export const CustomModal = styled(Modal)`
    .modal-dialog {
        max-width: 70%; /* Defina a largura máxima da caixa de diálogo */
        width: auto; /* Permita que a largura se ajuste automaticamente ao conteúdo */
        margin: 1rem auto; /* Centralize a caixa de diálogo horizontalmente */
    }
`;

export const Container = styled.div`
    padding: 20px;
    background: #ecececce;
`;

export const Header = styled.div`
    /* border: 2px solid red; */
    display: flex;
    justify-content: flex-end;
    height: 40px;
`;

export const Title = styled.h2`
    color: #14141498; 
    text-align: center; 
    margin-top: 20px;
    border-bottom: 2px solid #14141498;
    line-height: 5rem;
    font-family: 'Wendy One', sans-serif;
    font-weight: 500;
    font-size: 40px;
`;

export const SubtitleContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const Subtitle = styled.span`
    /* text-align: center; */
    font-size: 20px;
    padding: 10px;
`;

export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;

    img {
        max-width: 80%;
        height: auto;
    }
`;

export const Description = styled.p`
    text-align: center;
    padding: 20px;
    font-size: 18px;
`;

export const Date = styled.span`
    font-size: 16px;
`;

export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`;

export const Button = styled.a`
    border-radius: 10px;
    padding: 7px;
    margin: 5px;
    background: ${props => props.theme.btn_background};
    text-decoration: none;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.btn_background};
    color: ${props => props.theme.box_font_list};

    &:hover {
        color: white;
        background: green;
        transition: all .1s linear;
        -webkit-transition: all .1s linear;
        -moz-transition: all .1s linear;
    }
`;
