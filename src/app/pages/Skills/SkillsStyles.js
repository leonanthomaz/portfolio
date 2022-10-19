import styled from "styled-components";
import { BiCodeBlock } from "react-icons/bi";

export const Container = styled.div`
width: 100%;
min-height: 100vh;
background: ${props => props.theme.background};
`;


export const MenuSkillsGroup = styled.div`


`;

export const MenuSkills = styled.ul`
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

`;

export const Wrapper = styled.div`
display: grid;
    grid-template-columns: 350px 350px 350px; 
    justify-content: center;
    gap: 10px;
    padding: 20px;
    /* border: 2px solid green; */

    @media (max-width: 1200px){
        grid-template-columns: 350px 350px; 

    }

    @media (max-width: 760px){
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`;

export const Grid = styled.div`
    
`;

export const SkillsItems = styled.div`
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
    /* border: 2px solid red; */
    padding: 5px;

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
        color: ${props => props.theme.skills_font};

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
`;
