import React from "react";
import * as I from "./IntroStyles";
import foto_colorida from '../../shared/assets/img/leonan-color.png'
import foto_sem_cor from '../../shared/assets/img/leonan-uncolor.png'
import Typewriter from 'typewriter-effect';
// import { BouncyDivInLeft, BouncyDiv } from "../../shared/utils/animations";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FaAngleDoubleDown } from "react-icons/fa";

export const Intro = () => {
    const theme = localStorage.getItem('theme') || null

    return (
      <I.Container>
        <I.Box>

          <I.Left>
            <I.ImgContainer>
              {theme  === 'dark' ? 
                <img src={foto_sem_cor} alt="" />
              : <img src={foto_colorida} alt="" />
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
                      <i class="fa fa-angle-double-down icone"></i>
                  </a>
              </div>
              <a href="#about">
                <I.Arrow/>
              </a>
            </I.Wrapper>      
          </I.Right>
        </I.Box>
      </I.Container>

    )
}
