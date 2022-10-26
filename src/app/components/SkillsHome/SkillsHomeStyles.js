import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
background: ${props => props.theme.background};
color: ${props => props.theme.font};
/* border: 2px solid red; */
`;

export const Icon = styled.div`
border-radius: 10px;
padding: 10px;
font-size: 100px;
color: ${props => props.theme.skillsh_font_icon};
transition: all ease 0.2s;

&:hover{
color: ${props => props.theme.skillsh_font_icon_hover};
transition: all ease 0.2s;
}

@media(max-width: 760px){
    font-size: 80px;
}

@media(max-width: 370px){
    font-size: 60px;
}
`;

export const Wrapper = styled.div`
/* border: 2px solid green; */
margin: 10px;
`;

export const Box = styled.div`
display: grid;
grid-template-columns: auto auto;
justify-content: center;
gap: 10px;
padding: 20px;



@media(max-width: 900px){
    display: flex;
    flex-direction: column;
}
`;

export const ItemDW = styled.div`
/* border: 2px solid red; */
box-shadow: ${props => props.theme.box_shadow_portfolio};
padding: 20px;

display: flex;
flex-direction: column;

height: auto;

@media(max-width: 760px){
    display: flex;
    flex-direction: column;
}
`;

export const Left = styled.div`
/* border: 2px solid blue; */
display: flex;
justify-content: center;
align-items: center;
`;

export const LeftHeader = styled.div`
/* border: 2px solid red; */
display: flex;
flex-direction: column;
`;

export const TitleContainer = styled.div`
/* border: 2px solid red; */
text-align: center;
padding: 5px;
font-family: 'Roboto', sans-serif;

`;

export const IconsContainer = styled.div`
/* box-shadow: 0px 0px 16px -8px rgba(204, 47, 252, 0.5); */
display: flex;
flex-direction: row;
padding: 8px;

`;

export const Right = styled.div`
/* border: 2px solid purple; */
display: flex;
flex-direction: row;
`;


export const Title = styled.h2`
font-family: 'Wendy One', sans-serif;

`;



export const Text = styled.p`
/* border: 2px solid red; */
padding: 10px;
font-family: 'Josefin Sans', sans-serif;
`;

export const ButtonContainer = styled.div`
/* border: 2px solid red; */
display: flex;
justify-content: center;
padding-top: 20px;
`;

export const Button = styled(Link)`
border-radius: 20px;
padding: 10px;
background: ${props => props.theme.btn_background_main};
text-decoration: none;
font-weight: 700;

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


