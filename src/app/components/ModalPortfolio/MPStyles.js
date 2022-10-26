import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
padding: 20px;
background: #ecececce;
`;

export const Header = styled.div`
/* border: 2px solid red; */
display: block;
height: 40px;
`;

export const Title = styled.h2`
color: #14141498; 
text-align: center; 
margin-top: 20px;
border-bottom: 2px solid;
line-height: '5rem';
font-family: 'Wendy One', sans-serif;
font-weight: 500;
font-size: 40px;
border-bottom: ${props => props.theme.borderbottom_portfolio};
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

img{
    width: 100%;
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

export const Button = styled(Link)`
border-radius: 10px;
padding: 7px;
margin: 5px;
background: ${props => props.theme.btn_background_main};
text-decoration: none;
font-weight: 700;
align-items: center;
justify-content: center;
background: ${props => props.theme.btn_background_main};
color: ${props => props.theme.btn_font_main};

:hover{
        color: white;
        background: green;
        transition: all .1s linear;
                -webkit-transition: all .1s linear;
                -moz-transition: all .1s linear;
    }

`;


