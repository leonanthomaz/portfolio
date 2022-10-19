import styled from "styled-components";
import { BiCodeBlock } from "react-icons/bi";

export const Container = styled.div`
width: 100%;
min-height: 100vh;
background: ${props => props.theme.background};
`;

export const Courses = styled.div`
margin: 10px;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 350px 350px 350px; 
    justify-content: center;
    gap: 10px;
    /* border: 2px solid green; */

    @media (max-width: 1200px){
        grid-template-columns: 350px 350px; 

    }

    @media (max-width: 760px){
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`;


export const Item = styled.div`
padding: 15px;
margin: 10px;
background: ${props => props.theme.background_portfolio};
box-shadow: ${props => props.theme.box_shadow_portfolio};
border-radius: 10px;
color: ${props => props.theme.font};

`;

export const ItemImg = styled.div`
width: 200px;
border-radius: 50%;
margin: auto;

img{
    width: 100%;
}

`;

export const ItemTitle = styled.div`
text-align: center;

h1{
    font-size: 18px;
    padding-top: 10px;
    color: ${props => props.theme.font_courses_h1};
    /* color: yellow; */
    /* color: gray */
}

h3{
    font-size: 18px; 
    color: ${props => props.theme.font_courses_h3};
    /* color: #bebebe */
}
`;

export const ItemText = styled.div`
text-align: center;
padding-top: 10px;

`;

export const ItemURL = styled.div`
text-align: center;
padding-top: 15px;
transition: all ease 0.2s;
font-size: 14px; 

a{
    background: crimson;
    color: white;
    padding: 5px;
    text-decoration: none;
    border-radius: 5px;

    :hover{
        transition: all ease 0.2s;
        background: black;
        color: yellow;
    }
}
`;