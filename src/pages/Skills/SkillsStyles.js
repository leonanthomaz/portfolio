import styled from "styled-components";

export const SkillsMainStyled = styled.div`



ul {
    margin: 10px;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    padding-top: 1rem;

    

    @media (max-width: 760px){
      margin: 10px 0;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
    }
}

.skills{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px;
    padding: 5px;
    padding-top: 2rem;

    @media (max-width: 760px){
        grid-template-columns: 1fr 1fr;
        /* border: 2px solid red; */

    }

    .skills-box{
        width: 250px;
        padding: 15px;
        background: ${props => props.theme.skills_background_box};
        box-shadow: ${props => props.theme.navbar_shadow};
        border-radius: 7px;
        transition: all ease 0.5s;
        /* -webkit-transition: -webkit-transform .5s ease; */
        gap: 10px;
        margin: 7px;
        margin: auto;

        @media (max-width: 760px){
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            border-radius: 5%;
            width: 150px;

        }

        :hover{
            transition: all ease 0.5s;
            /* -webkit-transform: scale(1.1);
            transform: scale(1.1);  */
        }

        .skills-header{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;

            @media (max-width: 760px){
                margin: auto;
                
            }

            .skills-icon{
                color: ${props => props.theme.skills_font};
                font-size: 70px;

                @media (max-width: 760px){
                    font-size: 50px;
                    margin: auto;

                }
            }

            .skills-name{
                text-align: center;
                margin: auto;
                padding: 10px;
                color: black;
                text-align: center;

                h3{
                    padding-bottom: 1rem;
                    @media (max-width: 760px){
                        font-size: 20px;
                    }
                }

                @media (max-width: 760px){
                    padding: 2px;
                }
            } 
        }

        .skills-level{
            font-size: 15px;
            @media (max-width: 760px){
                font-style: italic;
                font-size: 14px;
                width: 100px;
            }
        }

        .skills-description{
            display: block;
            color: black;
            margin-top: 10px;

            ul {
                list-style: none;
            }

            li {
                ::before {
                content: "✔ ";
                }
            }
            
        } 

        .arrows{
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 20px;
        }
        
        .hidden{
            display: none;
        }
    }


}

`;