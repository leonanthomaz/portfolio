import styled from "styled-components";
import { FaAngleDoubleDown } from "react-icons/fa";

export const Container = styled.div`
width: 100%;
height: auto;
padding-top: 80px;
background: ${props => props.theme.background};
`;

export const Box = styled.div`

display: flex;
justify-content: space-around;

@media(max-width: 760px){
    justify-content: center;
    flex-direction: column;
}

`;

export const Left = styled.div`
flex: 1;

display: flex;
justify-content: center;
padding-top: 20px;
`;

export const ImgContainer = styled.div`
width: 500px;
height: 500px;
background: ${props => props.theme.background_intro_photo};
border-radius: 50%;
margin-left: 20px;

      
@media (max-width:1000px){
    width: 400px;
    height: 400px;
}

@media (max-width:760px){
    width: 230px;
    height: 230px;
    margin-top: 20px;
}

img {
    height: 100%;
}

`;

export const Right = styled.div`
flex: 2;
`;

export const Wrapper = styled.div`

width: 100%;
height: 100%;
padding-left: 50px;
display: flex;
flex-direction: column;
justify-content: center;
padding-top: 10px;

h1{
    font-size: 60px;
    margin: 10px 0;
    color: ${props => props.theme.h1};
    font-family: 'Lobster', cursive;

    @media (max-width:1000px){
        font-size: 40px;
    }

    @media (max-width:760px){
        font-size: 30px;
        margin-top: 10px;
    }
}

h2 {
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

h4 {
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

@media (max-width:760px){
    padding-left: 0;
    align-items: center;
    width: 100%;
    height: 50%;
}
`;

export const Arrow = styled(FaAngleDoubleDown)`
 text-align: center;

 font-size: 56px;
color: ${props => props.theme.intro_arrow};
opacity: 1;
animation: anima 1500ms ease infinite;

@media (min-width:1200px){
    float: left;
    margin-left: 300px;
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

