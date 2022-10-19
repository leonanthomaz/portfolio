import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: auto;
/* padding-top: 80px; */
/* background: ${props => props.theme.background}; */
`;

export const Wrapper = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  
`;

export const SocialMedia = styled.div`
  max-width: 1300px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    line-height: 15px;
    
  }
`;

export const SocialLogo = styled.div`

    display: flex;
    justify-self: start;
    margin-top: 16px;

    color: ${props => props.theme.font};

    a{
        color: ${props => props.theme.font_footer};
        transition: all ease 0.2s;

        &:hover{
            color: ${props => props.theme.font_footer_hover};
            transition: all ease 0.2s;

        }
    }

    p{
      padding: 5px;

    }

    span{
        padding: 5px;
        padding-bottom: 15px;

        a{

        }
    }

    @media (max-width: 760px){
        justify-content: center;
        flex-direction: column;
        align-items: center;
        
    }

  /* color: #fff; */
  /* justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold; */
`;

export const Address = styled.div`
  font-size: 12px;
  
  i{
    color: white;
  }
`;

export const Icon = styled.div`
font-size: 32px;
color: ${props => props.theme.font_icon};
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  padding-bottom: 10px;

  
`;

export const SocialIconLink = styled.a`
  color: ${props => props.theme.font};
  font-size: 24px;
  transition: all ease 0.2s;

  &:hover{
    color: ${props => props.theme.font_footer_hover};
    transition: all ease 0.2s;
  }
`;
