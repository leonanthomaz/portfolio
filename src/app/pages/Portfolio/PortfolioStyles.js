import styled from "styled-components";

export const Container = styled.div`
width: 100%;
background: ${props => props.theme.background};

`;


export const NavbarPortfolio = styled.ul`
    margin: 10px;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;


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
    

    @media (max-width: 1200px){
        grid-template-columns: 350px 350px; 
    }

    @media (max-width: 760px){
        display: flex;
        justify-content: center;
        flex-direction: column;
        max-width: 350px;
        margin: 0 auto;
    }
`;

export const Box = styled.div`
    padding: 20px;
    margin: 10px;
    background: ${props => props.theme.portfolio_background_box};
    box-shadow: ${props => props.theme.portfolio_box_shadow};
    color: ${props => props.theme.fontColor};
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;

    @media (max-width: 500px){
       margin: 10px;
    }

    :hover{
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        border-radius: 5px;
        box-shadow: ${props => props.theme.portfolio_box_shadow_hover};
    }
    
    h2{
        text-align: center;
        margin-top: 10px;
        font-size: 24px;
        font-weight: 700;
        color: ${props => props.theme.portfolio_font_h2};
        font-family: 'Wendy One', sans-serif;
        font-weight: 500;
        /* border: 2px solid red; */
        padding: 5px;
        border-bottom: ${props => props.theme.portfolio_borderbottom};
    }

    p{
        text-align: center;
        font-size: 14px;
        margin-top: 5px;
        font-family: 'Josefin Sans', sans-serif;
        padding: 5px;
    }

    span{
        text-align: center;
        font-weight: 700;
        margin-top: 5px;
        font-size: 12px;
        font-family: 'Roboto', sans-serif;
        padding: 7px;
    }

    .date{
        font-family: 'Josefin Sans', sans-serif;
        color: gray;
    }

    .btn-container{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 15px;

        button{
            display: flex;
            justify-content: center;
            align-items: center;
            background: ${props => props.theme.portfolio_btn_background};
            color: ${props => props.theme.portfolio_btn_font};
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
                background: ${props => props.theme.portfolio_btn_background_hover};
                color: ${props => props.theme.portfolio_btn_font_hover};
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