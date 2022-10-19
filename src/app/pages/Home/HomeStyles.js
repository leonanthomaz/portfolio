import styled from "styled-components";

export const Container = styled.div`
width: 100%;
padding-top: 10px;
background: ${props => props.theme.background};
`;

export const Parallax = styled.div`
height: 300px;
background-image: url('https://editalconcursosbrasil.com.br/wp-content/uploads/2022/03/Vagas-na-area-de-tecnologia-.jpg');
background-attachment: fixed;
background-size: cover;
background-repeat: no-repeat;
background-color: ${props => props.theme.background};

@media(max-width: 760px){
    
}

`;