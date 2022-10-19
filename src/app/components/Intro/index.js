import React from "react";
import * as I from "./IntroStyles";

import Typewriter from 'typewriter-effect';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Intro = () => {
    const theme = localStorage.getItem('theme') || null
    const imgPath = process.env.REACT_APP_IMGPATH

    return (
      <I.Container>
        <I.Box>

          <I.Left>
            <I.ImgContainer>
              {theme  === 'dark' || theme  === null ? 
                <img src={imgPath + 'leonan-color.png'} alt="" />
              : <img src={imgPath + 'leonan-uncolor.png'} alt="" />
              }
            </I.ImgContainer>
          </I.Left>

          <I.Right>
            <I.Wrapper>
              <h1>Bem vindo ao meu portfólio!</h1>
              
              <AnimationOnScroll animateIn="animate__fadeIn">
                  <h2>Leonan Thomaz</h2>
              </AnimationOnScroll>
              <h4> 
              <Typewriter 
              options={{ 
              strings:["Desenvolvedor WEB", "Desenvolvedor Front-End", "Desenvolvedor Back-End"],
              autoStart:true,
              delay:75,
              loop:true
              }}
              /> 
              </h4>
                
                <div className="arrow-down">
                  <a href="#sobre">
                      <i className="fa fa-angle-double-down icone"></i>
                  </a>
                </div>
                <a href="#sobre">
                  <I.Arrow/>
                </a>
            </I.Wrapper>      
          </I.Right>
        </I.Box>
      </I.Container>

    )
}
