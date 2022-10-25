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
color: ${props => props.theme.font};
transition: all ease 0.2s;

&:hover{
color: ${props => props.theme.font_footer_hover};
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
grid-template-columns: auto auto auto;
gap: 10px;
padding: 20px;

@media(max-width: 760px){
    display: flex;
    flex-direction: column;
}
`;

export const ItemDW = styled.div`
/* border: 2px solid red; */
box-shadow: ${props => props.theme.box_shadow_portfolio};

display: flex;
flex-direction: column;

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
flex-direction: row;
flex: 1;
`;

export const Right = styled.div`
/* border: 2px solid purple; */
flex: 3.5;
display: flex;
flex-direction: row;
`;


export const Text = styled.div`
/* border: 2px solid red; */
padding: 10px;
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

color: ${props => props.theme.btn_font_main};

:hover{
    color: ${props => props.theme.btn_font_main};

}

`;


