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

display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;
background: ${props => props.theme.contact_background};
box-shadow: ${props => props.theme.contact_shadow};
padding: 10px; // Reduzido para diminuir o espaçamento
width: 100%; // Ajuste a largura para ocupar o espaço disponível
border-radius: 10px;
transition: transform 0.3s ease, box-shadow 0.3s ease;
  
&:hover {
transform: scale(1.05);
/* box-shadow: ${props => props.theme.contact_shadow_hover}; */
}

a{
    text-decoration: none;
    color: ${props => props.theme.fontColor};
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