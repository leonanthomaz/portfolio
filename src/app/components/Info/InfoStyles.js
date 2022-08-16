import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: auto;
margin-top: 70px;

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
text-align: center;

a{
    text-decoration: none;
    color: ${props => props.theme.font};
}

@media(max-width: 760px){
}
`;

export const Title = styled.div`
font-size: 24px;

`
export const Subtitle = styled.div`
font-size: 16px;
`

export const SubtitleLocation = styled.div`
font-size: 16px;
`


export const Icon = styled.div`
font-size: 32px;
color: ${props => props.theme.font_icon};

`
