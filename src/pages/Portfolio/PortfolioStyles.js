import styled from 'styled-components'

export const PortfolioMainStyled = styled.div`


ul {
    margin: 10px;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    padding-top: 1rem;

    @media (max-width: 760px){
      margin: 10px 0;
      flex-wrap: wrap;
      justify-content: center;
    }
}

.portfolio-main{
    
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

    .portfolio-box{
        padding: 10px;
        margin: 10px;
        box-shadow: 0px 4px 5px 0px #00000040;

        /* :hover{
            box-shadow: 5px 0px 5px #00000040;
        } */

        .modal{
            z-index: 99999;
        }
        

        @media (max-width: 760px){
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }

        .portfolio-img {
            display: flex;
            justify-content: center;
            width: 300px;

            img{
                width: 100%;
                -moz-transition: all 0.5s;
                -webkit-transition: all 0.5s;
                transition: all 0.5s;
                opacity: 0.8;
                cursor: pointer;

                :hover{
                    -moz-transform: scale(1.1);
                    -webkit-transform: scale(1.1);
                    transform: scale(1.1);
                    box-shadow: "4px 4px 5px #121214";
                    opacity: 1;
                    border-radius: 5px;


                }
            }

            @media (max-width: 760px){
                width: 100%;
                margin: auto;

                img{
                 width: 100%;
                }
            }
        }
        
        h4{
            text-align: center;
            padding-top: 30px;
            
        }
        p{
            font-style: italic;
            text-align: center;
        }
    }
}

`;