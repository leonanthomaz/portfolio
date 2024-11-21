import styled, { createGlobalStyle } from 'styled-components';
import theme from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};

    @media (max-width: 600px) {
      font-size: 70%;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }
`;


export const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${theme.palette.primary.main};
  border-bottom: 3px solid ${theme.palette.primary.main};
  padding-bottom: 10px;
  display: inline-block;
  text-align: left;
  width: 100%;

  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }
`;

