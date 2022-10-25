import styled from "styled-components";
import { BiCodeBlock } from "react-icons/bi";

export const Container = styled.div`
width: 100%;
min-height: 100vh;
background: ${props => props.theme.background};

`;


export const MenuPortfolio = styled.ul`
    margin: 10px;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    padding-top: 1rem;

    

    @media (max-width: 760px){
      margin: 10px 0;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
    }

`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 350px 350px 350px; 
    justify-content: center;
    gap: 10px;
    
    /* border: 2px solid green; */

    @media (max-width: 1200px){
        grid-template-columns: 350px 350px; 
    }

    @media (max-width: 760px){
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`;

export const Box = styled.div`
    padding: 15px;
    margin: 10px;
    background: ${props => props.theme.background_portfolio};
    box-shadow: ${props => props.theme.box_shadow_portfolio};
    border-radius: 10px;
    color: ${props => props.theme.font};

    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;

    :hover{
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        box-shadow: "4px 4px 5px #121214";
        border-radius: 5px;
    }
    
    h4{
        text-align: center;
        margin-top: 10px;
        font-size: 24px;
        font-weight: 700;
        color: ${props => props.theme.h4_portfolio};

    }

    p{
        text-align: center;
        font-style: italic;
        font-size: 14px;
        margin-top: 5px;
    }

    span{
        text-align: center;
        font-weight: 700;
        margin-top: 5px;
        font-size: 12px;
    }

    .btn-container{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;

        button{
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(to top right, #ff4747a9, #fdfa288f);
            color: ${props => props.theme.font};
            font-weight: 700;
            border: none;
            padding: 5px;
            width: 120px;
            border-radius: 10px;
            text-decoration: none;
            transition: all .1s linear;
                        -webkit-transition: all .1s linear;
                        -moz-transition: all .1s linear;

            :hover{
                background: linear-gradient(to top right, #fdfa288f, #ff4747a9);
                transition: all .1s linear;
                        -webkit-transition: all .1s linear;
                        -moz-transition: all .1s linear;
            }
        }
    }
`;

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 300px;

    img{
        width: 100%;

        :hover{
            box-shadow: "4px 4px 5px #121214";
        }
    }

    @media (max-width: 760px){
        width: 100%;
        margin: auto;

        img{
            width: 100%;
        }
    }
`;