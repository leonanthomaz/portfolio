import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;


    body{
        scroll-behavior: smooth;
        scroll-snap-type: y mandatory;
        scrollbar-width: none; //for firefox
        background: ${props => props.theme.background};
        
                
        &::-webkit-scrollbar{
                display: none;
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
            font-family: 'Dela Gothic One', cursive;
            color: ${props => props.theme.h3};
        }

        h4{
            font-family: 'Didact Gothic', sans-serif;
            color: ${props => props.theme.h4};
        }       
    } 
}

`;
