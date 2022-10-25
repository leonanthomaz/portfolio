import { Link } from "react-router-dom";
import styled from "styled-components";



export const Container = styled.div`
background: ${props => props.theme.background};
color: ${props => props.theme.font};
`;

export const Icon = styled.div`
border-radius: 10px;
/* border: 2px solid red; */
padding: 10px;
font-size: 100px;
`;

export const Wrapper = styled.div`
/* border: 2px solid green; */
margin: 10px;
`;

export const Box = styled.div`
display: grid;
grid-template-columns: auto auto auto;
@media(max-width: 760px){
    display: flex;
    flex-direction: column;
}
`;

export const ItemDW = styled.div`
/* border: 2px solid red; */

display: flex;
flex-direction: column;

@media(max-width: 760px){
    display: flex;
    flex-direction: column;
}
`;

export const Left = styled.div`
border: 2px solid blue;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 1;
`;

export const Right = styled.div`
border: 2px solid purple;
flex: 3.5;
display: flex;
flex-direction: row;
`;


export const Text = styled.div`
/* border: 2px solid red; */
`;


