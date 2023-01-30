import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: auto;
background: ${props => props.theme.background};
padding-bottom: 50px;
`;

export const Wrapper = styled.div`
display: grid;
grid-template-columns: 350px 350px; 
justify-content: center;
gap: 10px;
padding-top: 20px;

@media (max-width: 760px){
    grid-template-columns: 300px; 
}
`;



export const Item = styled.div`

padding: 15px;
margin: 10px;
background: ${props => props.theme.background_portfolio};
box-shadow: ${props => props.theme.box_shadow_portfolio};
border-radius: 10px;
color: ${props => props.theme.font};
text-align: center;
align-items: center;


a{
    text-decoration: none;
    color: ${props => props.theme.font};
}

/* @media(max-width: 760px){
    width: auto;
    height: auto;
} */
`;

export const Title = styled.div`
font-size: 24px;
font-family: 'Montserrat', sans-serif;

`
export const Subtitle = styled.div`
font-size: 16px;
font-family: 'Josefin Sans', sans-serif;

`

export const SubtitleLocation = styled.div`
font-size: 16px;
font-family: 'Josefin Sans', sans-serif;
`


export const Icon = styled.div`
font-size: 32px;
color: ${props => props.theme.font_icon};

`
export const Location = styled.div`
/* border: 2px solid red; */
max-width: 500px;
margin: auto;
`