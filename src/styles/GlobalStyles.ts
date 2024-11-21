import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #121212;
    color: #ffffff;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
  }
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #FFEB3B;
  border-bottom: 3px solid #FFEB3B;
  padding-bottom: 10px;
  display: inline-block;
  text-align: left;
  width: 100%;

  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }
`;
