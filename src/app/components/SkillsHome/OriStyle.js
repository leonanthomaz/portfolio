import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
background: ${props => props.theme.background};
color: ${props => props.theme.font};

/* display: flex;
justify-content: center; */
`;

export const Left = styled.div`
`;

export const Right = styled.div`
/* border: 2px solid red; */
`;

export const Wrapper = styled.div`
display: grid;
grid-template-columns: 500px 500px;
justify-content: center;
align-items: center;
/* border: 2px solid red; */
gap: 10px;
padding-top: 20px;


@media(max-width: 760px){
    display: flex;
    flex-direction: column;
}
`;

export const ImgContainer = styled.div`
    background-image: url('https://miro.medium.com/max/1400/0*_D46ue8UxqLtKmo_');
    background-size: cover;
    background-repeat: no-repeat;

    width: 500px;
    height: 500px;

    @media (max-width: 760px){
        width: 300px;
        height: 300px;
    }
`;

export const ImgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    
    width: 100%;
    height: 100%;
    
    background: #1d1d1de8;

    /* width: 500px;
    height: 500px; */

    @media (max-width: 760px){
        /* width: 300px;
        height: 300px; */
        padding: 100px;

    }
`;

export const Info = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Description = styled.h3`
    text-align: center;
    color: ${props => props.theme.font_tour};
    font-weight: 700;

`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const Button = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.btn_background_main};
    color: ${props => props.theme.btn_font_main};
    font-weight: 700;
    border: none;
    padding: 5px;
    width: 120px;
    border-radius: 10px;
    text-decoration: none;
    transition: all .1s linear;
                -webkit-transition: all .1s linear;
                -moz-transition: all .1s linear;

    :hover{
        color: white;
        background: green;
        transition: all .1s linear;
                -webkit-transition: all .1s linear;
                -moz-transition: all .1s linear;
    }
`;