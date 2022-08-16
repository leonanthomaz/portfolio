import styled from "styled-components";
import { BiCodeBlock } from "react-icons/bi";

export const Container = styled.div`
width: 100%;
height: auto;
margin-top: 70px;


`;

export const Wrapper = styled.div`
display: flex;
justify-content: space-around;
padding-top: 30px;



@media (max-width: 760px){
    display: flex;
    justify-content: center;
    flex-direction: column;
}
`;

export const Left = styled.div`
flex: 1;
width: 500px;
text-indent: 5px;
display: flex;
justify-content: center;

@media (max-width: 760px){
    width: auto;
    margin: 10px;
}
`;


export const Text = styled.div`
-webkit-box-shadow: ${props => props.theme.webkit};
box-shadow: ${props => props.theme.box_shadow_about};
color: ${props => props.theme.font};
padding: 35px;
width: 500px;


@media (min-width: 760px){
    max-height: 70%;
    overflow-y: scroll;
    border: none;
    scroll-behavior: smooth;
    ::-webkit-scrollbar { 
        display: none;
    }
}

@media (max-width: 760px){
    padding: 10px;
    max-height: auto;
}

`;

export const Right = styled.div`
flex: 1;
flex-direction: column;
justify-content: center;
align-items: center;
`;


export const ImgContainer = styled.div`
max-width: 800px;

img{
    width: 100%;
}

@media (max-width: 760px){
    display: none;
}
`;

export const LinkCurriculum = styled.div`
margin: auto;
text-align: center;
margin-top: 20px;

@media (min-width: 760px){
    margin-top: -150px;

}

/* @media (max-width: 1000px){
    margin-right: 50%;
} */
`;
