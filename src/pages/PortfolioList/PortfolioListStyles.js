import styled from "styled-components";

export const PortfolioListStyle = styled.div`
    padding-bottom: 10px;
    
    .portfolioList{
      text-align: center;
      font-size: 12px;
      margin-right: 50px;
      padding: 7px;
      border-radius: 10px;
      cursor: pointer;
      width: 100px;
      transition: all .1s linear;
      box-shadow: ${props => props.theme.box_shadow};

      :hover{
          background: linear-gradient(to top right, #fdfa288f, #ff4747a9);
          transition: all .1s linear;
                -webkit-transition: all .1s linear;
                -moz-transition: all .1s linear;
      }

      @media (max-width: 760px){
        margin-right: 20px;
      }

      &.active {
        background: linear-gradient(to top right, #ff4747a9, #fdfa288f);
        color: ${props => props.theme.font};
        font-weight: bold;
        transition: all .1s linear;
                -webkit-transition: all .1s linear;
                -moz-transition: all .1s linear;
                box-shadow: ${props => props.theme.btn_lists_box_shadow};

        
      }
    }
  




`;