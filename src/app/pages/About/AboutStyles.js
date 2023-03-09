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

@media (max-width: 1000px){
    grid-template-columns: 400px 400px;
}

@media(max-width: 760px){
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 10px;
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
    display: none;
}

`;

export const BoxText = styled.div`
background: ${props => props.theme.about_background};
box-shadow: ${props => props.theme.about_box_shadow};
padding: 28px;
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
border: 2px solid #dddddd;
background: ${props => props.theme.about_btn_background};
transition: all .1s linear;
                        -webkit-transition: all .1s linear;
                        -moz-transition: all .1s linear;
:hover{
    background: ${props => props.theme.about_btn_background_hover};
    width: 220px;
    transition: all .1s linear;
                        -webkit-transition: all .1s linear;
                        -moz-transition: all .1s linear;
}

a{
    color: ${props => props.theme.about_font_btn_background};
    font-weight: 700;

    :hover{
        color: #dddddd;
    }
}
`;
