import styled from 'styled-components';

export const SpinnerClass = styled.div`
background: ${props => props.theme.background_spinner};
width: 100vw;
height: 100vh;
transition: all ease 1s;

.loader {
    border: 8px solid #3a3a3a; /* Vermelho e cinza*/
    border-top: 8px solid #fbff00; 
    animation: spin 0.8s linear infinite;
    border-radius: 50%;
    z-index: 9999999;

    position:absolute;
    left:50%;
    top:45%;
    margin-left: -30px;
    margin-right: auto;

    width: 70px;
    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;


    @media (max-width: 760px){
        
    }

  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;