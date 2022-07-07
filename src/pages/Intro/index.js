import React from "react";
import { IntroMainStyled } from "./IntroStyles";
import foto from '../../assets/img/leonanrm2.png'
import foto2 from '../../assets/img/leonanm32.png'
import Typewriter from 'typewriter-effect';
import { BouncyDivInLeft, BouncyDiv } from "../../utils/AnimationsStyles";

const Intro = () => {
    const theme = localStorage.getItem('theme');

    return (
        <IntroMainStyled>
            <div className="intro">
                <BouncyDivInLeft>
                <div className="left">
                    <div className="imgContainer">
                        {theme  === 'dark' ? 
                          <img src={foto2} alt="" />
                        : <img src={foto} alt="" />
                        }
                    </div>
                </div>
                </BouncyDivInLeft>

               <div className="right">
                    <div className="wrapper">
                        <h1>Bem vindo ao meu portfólio!</h1>
                        {/* <BouncyDiv>
                            <h2>Leonan Thomaz</h2>
                        </BouncyDiv> */} 
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
                        {/* <div class="zoom">
                                <img src={foto2} class="img-responsive"/>
                                <div class="text-item">
                                    <h2>Título da imagem</h2>
                                </div>
                            </div> */}
                    </div>
                   
                </div>
            </div>
        </IntroMainStyled>
    )
}

export default Intro;