import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: auto;
background: ${props => props.theme.background};
/* padding-bottom: 50px; */
`;

export const Wrapper = styled.div`
display: grid;
grid-template-columns: 250px 250px; 
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
box-shadow: ${props => props.theme.contact_shadow};
color: ${props => props.theme.font};
text-align: center;
align-items: center;
transition: all .1s linear;
                        -webkit-transition: all .1s linear;
                        -moz-transition: all .1s linear;

:hover{
    box-shadow: ${props => props.theme.contact_shadow_hover};
    border-radius: 5px;
}

a{
    text-decoration: none;
    color: ${props => props.theme.font};
}
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