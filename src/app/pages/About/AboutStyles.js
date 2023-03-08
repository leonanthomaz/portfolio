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
padding: 20px;

@media (max-width: 1000px){
    grid-template-columns: 400px 400px;
}

@media(max-width: 760px){
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 20px;
}
`;

export const Right = styled.div`
flex: 1.5;
width: auto;
height: auto;
display: flex;
justify-content: center;


`;

export const Left = styled.div`
flex: 1;
flex-direction: column;
justify-content: center;
align-items: center;


@media (max-width: 760px){
    /* border: 2px solid red; */
    width: 70%;
}

`;

export const Text = styled.div`
-webkit-box-shadow: ${props => props.theme.webkit};
box-shadow: ${props => props.theme.box_shadow_portfolio};
padding: 35px;
font-family: 'Josefin Sans', sans-serif;

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
`;

export const LinkCurriculum = styled.div`
margin: auto;
text-align: center;
margin-top: 20px;
border-radius: 20px;
font-weight: 700;
width: 200px;

background: ${props => props.theme.box_background_list};
transition: all .1s linear;
                        -webkit-transition: all .1s linear;
                        -moz-transition: all .1s linear;
:hover{
    background: ${props => props.theme.box_background_list_hover};
    width: 220px;
    transition: all .1s linear;
                        -webkit-transition: all .1s linear;
                        -moz-transition: all .1s linear;
}

a{
    color: ${props => props.theme.button_font};
    font-weight: 700;

    :hover{
        color: ${props => props.theme.button_font_hover};
    }
}
`;
