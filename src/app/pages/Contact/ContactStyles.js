import styled from "styled-components";

export const Container = styled.div`
background: ${props => props.theme.background};
color: ${props => props.theme.font};
`;

export const Wrapper = styled.div`
display: grid;
grid-template-columns: auto auto;
justify-content: space-around;
align-items: center;
padding: 20px;

@media(max-width: 760px){
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 20px;
}

`;

export const Right = styled.div`
`;

export const Left = styled.div`
`;

