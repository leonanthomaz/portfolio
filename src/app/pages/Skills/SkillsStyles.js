import styled from "styled-components";

export const Container = styled.div`
width: 100%;
background: ${props => props.theme.background};
`;

export const Item = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;

padding: 15px;
width: 200px;

transition: all .1s linear;
                        -webkit-transition: all .1s linear;
                        -moz-transition: all .1s linear;

:hover{
    box-shadow: ${props => props.theme.contact_shadow_hover};
    border-radius: 5px;
}


`;

export const Titulo = styled.div`
  margin-bottom: 5px;
  font-weight: 700;
  color: ${props => props.theme.font};

`;

export const Icon = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
color: white;
font-size: 50px;
border-radius: 50%;
width: 100px;
height: 100px;

background: ${props => props.theme.skills_description_font_icon};
box-shadow: ${props => props.theme.contact_shadow};
color: ${props => props.theme.skills_font_icons};

`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto; 
    justify-content: center;
    gap: 10px;
    padding: 20px;

    @media (max-width: 1200px){
        grid-template-columns: auto auto auto; 

    }

    @media (max-width: 760px){
      grid-template-columns: auto auto; 

    }
`;

export const SkillsItems = styled.div`
  width: 250px;
  padding: 15px;
  background: ${props => props.theme.skills_background_box};
  box-shadow: ${props => props.theme.skills_box_shadow};
  transition: all ease 0.5s;
  gap: 10px;
  margin: 7px auto;

  :hover{
    background: ${props => props.theme.skills_background_box};
    box-shadow: ${props => props.theme.skills_box_shadow_hover};
    border-radius: 5px;
  }

    @media (max-width: 760px){
       
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
    color: ${props => props.theme.skills_icon};
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
        color: #00141b;
        text-align: center;
        color: ${props => props.theme.skills_font};

        h3{
            padding-bottom: 1rem;
            font-family: 'Wendy One', sans-serif;

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
