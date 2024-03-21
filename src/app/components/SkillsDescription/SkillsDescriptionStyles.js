import styled from "styled-components";


export const Container = styled.div`
background: ${props => props.theme.background};
color: ${props => props.theme.fontColor};
`;

export const Icon = styled.div`
border-radius: 10px;
padding: 10px;
font-size: 100px;
color: ${props => props.theme.skills_description_font_icon};
transition: all ease 0.2s;

&:hover{
color: ${props => props.theme.skills_description_font_icon_hover};
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
`;

export const Box = styled.div`
display: grid;
grid-template-columns: auto auto;
justify-content: center;
gap: 20px;
padding: 20px;
border-radius: 10px;

@media(max-width: 900px){
    display: flex;
    flex-direction: column;
}

`;

export const ItemDW = styled.div`
background: ${props => props.theme.skills_description_background};
box-shadow: ${props => props.theme.skills_description_box_shadow};
padding: 20px;
max-width: 500px;
display: flex;
flex-direction: column;
margin: auto;
height: 450px;
font-size: 16px;


@media(max-width: 760px){
    max-width: 400px;
    height: auto;
    font-size: 14px;

}

@media(max-width: 560px){
    max-width: 300px;
    height: auto;
    text-align: center;
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
text-align: center;
padding: 5px;
font-family: 'Roboto', sans-serif;

`;

export const IconsContainer = styled.div`
display: flex;
flex-direction: row;
padding: 8px;

`;

export const Right = styled.div`
display: flex;
flex-direction: row;
`;


export const Title = styled.h2`
font-family: 'Wendy One', sans-serif;
`;

export const Text = styled.p`
padding: 10px;
font-family: 'Josefin Sans', sans-serif;
`;

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
padding-top: 20px;
`;



