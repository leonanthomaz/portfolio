import React from "react";
import * as I from "./IntroStyles";

import Typewriter from 'typewriter-effect';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Intro = () => {
    const theme = localStorage.getItem('theme') || null
    const imgPath = process.env.REACT_APP_IMGPATH
    
    return (
      <I.Container >
        <I.FeaturedVertical>
          <I.FeaturedHorizontal>
        <I.Box>

          <I.Left>
            <I.ImgContainer background={imgPath + 'back-js.png'}>
              <img src={imgPath + 'leonan-color.png'} alt="" />
              {/* {theme  === 'dark' || theme  === null ? 
                <img src={imgPath + 'leonan-color.png'} alt="" />
              : <img src={imgPath + 'leonan-uncolor.png'} alt="" />
              } */}
            </I.ImgContainer>
          </I.Left>

          <I.Right>
          
            <I.Wrapper>
              {/* <h2>Bem vindo ao meu portfólio!</h2> */}
              <h1>Leonan Thomaz</h1>
              <h2> 
              <Typewriter 
              options={{ 
              strings:["Desenvolvedor WEB", "Desenvolvedor Front-End", "Desenvolvedor Back-End"],
              autoStart:true,
              delay:75,
              loop:true
              }}
              /> 
              </h2>
                
              <div className="arrow-down">
                <a href="#sobre">
                  <I.Arrow aria-labelledby="Seta para ir para a seção Sobre"/>
                </a>
              </div>
             
            </I.Wrapper>  
            
          </I.Right>
        </I.Box>
          </I.FeaturedHorizontal>
        </I.FeaturedVertical>
      </I.Container>

    )
}
