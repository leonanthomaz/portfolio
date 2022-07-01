import styled, { keyframes } from 'styled-components';
import { bounceInRight } from 'react-animations';

export const IntroMainStyled = styled.div`
.intro{
  display: flex;
  justify-content: center;

  @media (max-width:760px){
    flex-direction: column;
    align-items: center;
  }

  .left{
    flex: 0.5;
    overflow: hidden;
    float: left;
    margin-top: 70px;
    flex-grow: 1;

    @media (max-width:760px){
        margin-top: 10px;
    }
  }
  
  .imgContainer {
      width: 500px;
      height: 500px;
      background: ${props => props.theme.background_intro_photo};
      border-radius: 50%;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      float: right;
      flex-wrap: wrap;
      margin-left: 20px;
      
      @media (max-width:1000px){
        width: 400px;
        height: 400px;

      }

      @media (max-width:760px){
        align-items: flex-start;
        width: 230px;
        height: 230px;
        margin-top: 50px;
        margin-right: 0px;
        margin-left: 0px;

      }

      img {
        height: 100%;

        @media (max-width:1000px){
          height: 100%;
        }

        @media (max-width:760px){
          height: 100%;
        }
      }
    }

  .right{
    flex: 0.5;
    position: relative;
    margin-top: 70px;
    flex-grow: 3;
    
    @media (max-width:1000px){
    }

    @media (max-width:760px){
        margin-top: 10px;
        
    }

    .wrapper {
      width: 100%;
      height: 100%;
      padding-left: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      

      @media (max-width:760px){
        padding-left: 0;
        align-items: center;
        width: 100%;
        height: 50%;
      }

      @media (max-width:450px){
        text-align: center;
      }

      h1 {
        font-size: 60px;
        margin: 10px 0;
        color: #fed136;
        font-family: 'Lobster', cursive;
        
        @media (max-width:1000px){
          font-size: 40px;
        }

        @media (max-width:760px){
          font-size: 30px;
          margin-top: 10px;
        }

        /* @media (max-width:450px){
          display: none;
        } */
      }
      h2 {
        font-size: 55px;
        font-family: 'Dela Gothic One', cursive;
        
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

      a {
        bottom: 30px;
        left: 40%;
        color: #fed136;

        @media (max-width:760px){
            top: 170px;
            left: 50%;
          }


        img {
          width: 30px;
          animation: arrowBlink 2s infinite;
        }

        @keyframes arrowBlink {
          100% {
            opacity: 0;
          }
        }
      }
        .arrow-down{
            text-align: center;
        
        .fa.icone {
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
        }


        @keyframes anima {
            to {
                opacity: 0.1;
                transform: scale(0.85) translateY(20px);
            }
        }
      }
    }
  }

}


`;

const bounceAnimation = keyframes`${bounceInRight}`;

export const BouncyDiv = styled.div`
animation: 2s ${bounceAnimation};
`;