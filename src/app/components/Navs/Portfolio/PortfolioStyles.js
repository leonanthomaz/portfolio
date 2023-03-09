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
    box-shadow: ${props => props.theme.portfolio_nav_box_shadow};
    color: ${props => props.theme.portfolio_nav_font};
    background: ${props => props.theme.portfolio_nav_background_btn};

    :hover{
          background: ${props => props.theme.portfolio_nav_background_btn_hover};
          transition: all .1s linear;
                -webkit-transition: all .1s linear;
                -moz-transition: all .1s linear;
        }

      @media (max-width: 760px){
        margin-right: 20px;
      }

      &.active {
        background: ${props => props.theme.portfolio_nav_background_btn_active};
        color: ${props => props.theme.portfolio_nav_font_btn_active};
        font-weight: bold;
        transition: all .1s linear;
                -webkit-transition: all .1s linear;
                -moz-transition: all .1s linear;
                box-shadow: ${props => props.theme.portfolio_nav_box_shadow_active};

      }
`;

