import styled from "styled-components";

export const Container = styled.div`
background: ${props => props.theme.background};
color: ${props => props.theme.font};
`;

export const Wrapper = styled.div`
display: grid;
grid-template-columns: 500px 500px;
justify-content: center;
align-items: center;
/* border: 2px solid red; */
padding: 20px;


@media (max-width: 760px){
    display: flex;
    justify-content: center;
    flex-direction: column;
}
`;

export const Left = styled.div`
flex: 1.5;
width: auto;
height: auto;
text-indent: 5px;
display: flex;
justify-content: center;


`;

export const Right = styled.div`
flex: 1;
flex-direction: column;
justify-content: center;
align-items: center;


@media (max-width: 760px){
   display: none;
}

`;

export const Text = styled.div`
-webkit-box-shadow: ${props => props.theme.webkit};
box-shadow: ${props => props.theme.box_shadow_portfolio};
padding: 35px;

font-size: 16px;

@media (max-width: 760px){
    width: auto;
    margin: 10px;
    font-size: 14px;
}

`;




export const ImgContainer = styled.div`
max-width: 800px;

img{
    width: 100%;
}

/* @media (max-width: 760px){
    display: none;
} */
`;

export const LinkCurriculum = styled.div`
margin: auto;
text-align: center;
margin-top: 20px;
border-radius: 20px;
font-weight: 700;
max-width: 200px;

background: ${props => props.theme.btn_background_main};



a{
    color: ${props => props.theme.btn_font_main};
    font-weight: 700;
    
    :hover{
        color: ${props => props.theme.btn_font_main};
    }
}
/* @media (min-width: 760px){
    margin-top: -150px;

} */

/* @media (max-width: 1000px){
    margin-right: 50%;
} */
`;
