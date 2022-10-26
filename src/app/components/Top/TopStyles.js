import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
background: ${props => props.theme.background};
color: ${props => props.theme.font};
height: auto;
`;


export const SplideContainer = styled.div`
border-radius: 20px;
z-index: 1;
padding-top: 20px;
width: 600px;
height: auto;
margin: auto;

@media (max-width: 760px){
    max-width: 400px;
}

@media (max-width: 500px){
    max-width: 350px;
}

img{
    width: 100%;
    border-radius: 20px;

}
`;

export const ImgContainer = styled.div`
    background-image: url('https://miro.medium.com/max/1400/0*_D46ue8UxqLtKmo_');
    background-size: cover;
    background-repeat: no-repeat;

    width: 100%;
    height: max-content;

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