import styled from "styled-components";
import { BiCodeBlock } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Container = styled.div`
width: 100%;
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

h2{
    font-size: 28px;
    padding-top: 10px;
    color: ${props => props.theme.font_courses_h2};
    font-family: 'Wendy One', sans-serif;

    /* color: yellow; */
    /* color: gray */
}

h3{
    font-size: 18px; 
    color: ${props => props.theme.font_courses_h3};
    /* color: #bebebe */
    font-family: 'Montserrat', sans-serif;

}
`;

export const ItemText = styled.div`
text-align: center;
padding-top: 10px;
font-family: 'Josefin Sans', sans-serif;

`;

export const ItemURLContainer = styled.div`
display: flex;
justify-content: center;
`;

export const ItemURL = styled(Link)`
border-radius: 20px;
padding: 10px;
background: ${props => props.theme.box_background_list};
text-decoration: none;
font-weight: 700;

background: ${props => props.theme.box_background_list};
color: ${props => props.theme.box_font_list};

:hover{
    color: white;
    background: green;
    transition: all .1s linear;
            -webkit-transition: all .1s linear;
            -moz-transition: all .1s linear;
}

`;