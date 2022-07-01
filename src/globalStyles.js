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
    min-height: 100vh;

    .sections{
        color: ${props => props.theme.font};
        width: 100%;
        min-height: calc(100vh - 70px);
        scroll-behavior: smooth;
        scroll-snap-type: y mandatory;
        scrollbar-width: none; //for firefox
        border-bottom: 2px solid gray;

        &::-webkit-scrollbar{
            display: none;
        }

        > *{
            background: ${props => props.theme.background};
            min-height: calc(100vh - 0px);
            scroll-snap-align: start;
            padding: 4.5rem 0;

        }

        h1{
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