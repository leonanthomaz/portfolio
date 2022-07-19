import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

}

.App{

    .sections{
        color: ${props => props.theme.font};
        width: 100%;
        height: calc(100vh - 70px);
        scroll-behavior: smooth;
        scroll-snap-type: y mandatory;
        scrollbar-width: none; //for firefox

        &::-webkit-scrollbar{
            display: none;
        }

        > *{
            background: ${props => props.theme.background};
            height: calc(100vh - 70px);
            scroll-snap-align: start;
            border: 2px solid transparent;
        }

        h2{
            font-family: 'Dela Gothic One', cursive;
        }

        h3{
            font-family: 'Didact Gothic', sans-serif;
            color: ${props => props.theme.h3};
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

`;
 
export default GlobalStyle;