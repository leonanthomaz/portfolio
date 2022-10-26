import styled from "styled-components";
import { FaAngleDoubleDown } from "react-icons/fa";


export const Container = styled.div`
width: 100%;
height: auto;
background: ${props => props.theme.background};
background-image: url('https://programadoresbrasil.com.br/wp-content/uploads/2022/07/computador.jpg');
background-attachment: fixed;
background-size: cover;
background-repeat: no-repeat;
z-index: 1;

@media(max-width: 760px){
    background-image: url('https://www.papeldeparede.etc.br/fotos/wp-content/uploads/Teclado8.jpg');
    /* background-image: none; */
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

`;

export const Box = styled.div`
padding-top: 80px;
/* background-color: ${props => props.theme.background_intro}; */
height: 100vh;
display: grid;
grid-template-columns: auto auto;
justify-content: center;
align-items: center;

@media(max-height: 450px){
    padding-top: 50px;
    justify-content: none;
}

@media(max-width: 600px){
    display: flex;
    justify-content: center;
    flex-direction: column;
}

`;

export const Left = styled.div`
flex: 1;
display: flex;
justify-content: center;

@media(max-height: 760px){
    flex: 1;
}
`;

export const ImgContainer = styled.div`
width: 480px;
height: 480px;
background: ${props => props.theme.background_intro_photo};
border-radius: 50%;
margin-left: 10px;

img {
    height: 100%;
}

@media(max-height: 500px) or (max-width: 900px){
    width: 280px;
    height: 280px;
}

@media (max-width: 760px){
    width: 250px;
    height: 250px;
    margin-top: 20px;
    margin-left: 0px;
}

`;

export const Right = styled.div`
flex: 3.5;

@media(max-height: 760px){
    /* flex: 2; */
}

`;

export const Wrapper = styled.div`

width: 100%;
height: 100%;
padding-left: 50px;
display: flex;
flex-direction: column;
justify-content: center;
padding-top: 10px;
text-align: start;

@media (max-width: 760px){
    text-align: center;
    padding-left: 0;
    align-items: center;
    width: 100%;
}

h1{
    font-size: 50px;
    margin: 10px 0;
    color: ${props => props.theme.h1};
    font-family: 'Dela Gothic One', cursive;
    text-transform: uppercase;

    @media (max-width:1000px){
        font-size: 30px;
    }

    /* @media (max-width: 760px){
        color: ${props => props.theme.h1_mobile};
    } */
}

h2{
    font-size: 60px;
    margin: 10px 0;
    color: ${props => props.theme.h2};
    font-family: 'Lobster', cursive;

    @media (max-width:1000px){
        font-size: 40px;
    }

    @media (max-width:760px){
        font-size: 30px;
        margin-top: 10px;
    }
}

h3{
    font-size: 55px;
    font-family: 'Dela Gothic One', cursive;
    color: ${props => props.theme.h2};

    @media (max-width:1000px){
        font-size: 45px;
    }

    @media (max-width:760px){
        font-size: 30px;
        margin-top: 10px;
    }
}

h4{
    font-size: 30px;
    padding-top: 10px;

    @media (max-width:1000px){
        font-size: 25px;
    }

    @media (max-width:760px){
        font-size: 19px;
    }

    span {
        color: ${props => props.theme.font_intro_Typewriter};
    }
}

.arrow-down{
    text-align: center;
}
`;

export const Arrow = styled(FaAngleDoubleDown)`

font-size: 56px;
color: ${props => props.theme.intro_arrow};
opacity: 1;
animation: anima 1500ms ease infinite;

@media (min-width: 1200px){
    margin-top: 3rem;
    font-size: 76px;
}

@media (max-width:760px){
    font-size: 46px;
}

@keyframes anima {
    to {
        opacity: 0.1;
        transform: scale(0.85) translateY(20px);
    }
}

`;

export const FeaturedHorizontal = styled.div`

width: 100%;
height: 100vh;
background-image: ${props => props.theme.background_horizontal};

display: flex;
flex-direction: column;
justify-content: center;    


/* @media(max-width: 760px){
    background-image: none;
} */

`;

export const FeaturedVertical = styled.div`

width: 100%;
height: 100vh;
background-image: ${props => props.theme.background_vertical};
  
/* @media(max-width: 760px){
    background-image: none;
} */
`;