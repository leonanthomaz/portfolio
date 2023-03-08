import styled from "styled-components";

export const Label = styled.li`

    
    text-align: center;
    font-size: 12px;
    margin-right: 50px;
    padding: 7px;
    border-radius: 10px;
    cursor: pointer;
    width: 100px;
    transition: all .1s linear;
    box-shadow: ${props => props.theme.box_shadow_list};
    color: ${props => props.theme.btn_font_main};
    background: ${props => props.theme.btn_background_main};

    :hover{
          background: ${props => props.theme.btn_background_main_hover};
          transition: all .1s linear;
                -webkit-transition: all .1s linear;
                -moz-transition: all .1s linear;
        }

      @media (max-width: 760px){
        margin-right: 20px;
      }

      &.active {
        background: ${props => props.theme.btn_background_main_hover};
        color: ${props => props.theme.btn_font_main};
        font-weight: bold;
        transition: all .1s linear;
                -webkit-transition: all .1s linear;
                -moz-transition: all .1s linear;
                box-shadow: ${props => props.theme.box_shadow_list_hover};

      }
`;

