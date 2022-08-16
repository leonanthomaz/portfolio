import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body{
    *{
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        section{
            scroll-behavior: smooth;
            scroll-snap-type: y mandatory;
            scrollbar-width: none; //for firefox

            &::-webkit-scrollbar{
                display: none;
            }

            > *{
                background: ${props => props.theme.background};
                width: 100%;
                min-height: calc(100vh - 70px);
                scroll-snap-align: start;
                border: 4px solid transparent;
            }

        }

        h1{
            font-family: 'Dela Gothic One', cursive;
            color: ${props => props.theme.h1};
        }

        h2{
            font-family: 'Dela Gothic One', cursive;
            color: ${props => props.theme.h2};
        }

        h3{
            font-family: 'Didact Gothic', sans-serif;
            color: ${props => props.theme.h3};
        }

        span{

        }

        .btn{
            text-decoration: none;
            color: ${props => props.theme.btn_font};
            background-color: ${props => props.theme.btn_background};
            transition: all ease 1s;
            
            :hover{
                transition: all ease 0.5s;
                background-color: #ffff2e;
                color: ${props => props.theme.btn_font_hover};
            }
        }
    }

}

`
