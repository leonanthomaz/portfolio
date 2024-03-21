import styled from "styled-components";

export const Container = styled.div`
background: ${props => props.theme.background};
color: ${props => props.theme.fontColor};
`;

export const Wrapper = styled.div`
display: grid;
grid-template-columns: 500px auto;
justify-content: space-around;
align-items: center;
padding: 20px;

@media(max-width: 1000px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

`;

export const Left = styled.div`
flex: 3.5;
flex-wrap: wrap;
`;

export const Right = styled.div`
flex: 1;
flex-wrap: nowrap;
`;



