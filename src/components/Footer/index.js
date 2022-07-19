import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaGoogle
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo >
                <p>© 2022 Copyright: Leonan Thomaz</p>
                <span>Design by <a href="https://www.linkedin.com/in/leonanthomaz" target="_blank">@leonan.thomaz</a></span><br/>
            </SocialLogo>
            <SocialIcons>
                
              {/* <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink> */}

              {/* <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink> */}

              <SocialIconLink href='mailto:leonan.thomaz@gmail.com? Subject: Olá! Gostaria de falar com você!m&body=Conteúdo da mensagem' target='_blank' aria-label='Google'>
                <FaGoogle />
              </SocialIconLink>

              <SocialIconLink href='https://github.com/leonanthomaz/' target='_blank' aria-label='Github'>
                <FaGithub />
              </SocialIconLink>
              
              <SocialIconLink href='https://www.linkedin.com/in/leonanthomaz' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>

              <SocialIconLink
                href='//www.twitter.com/leonanthomaz'
                target='_blank'
                aria-label='Twitter'
                rel='noopener noreferrer'
              >
                <FaTwitter />
              </SocialIconLink>

            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
