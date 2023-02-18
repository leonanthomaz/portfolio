import React from "react";
import * as I from "./IntroStyles";

import Typewriter from 'typewriter-effect';

export const Intro = () => {
    const imgPath = process.env.REACT_APP_IMGPATH
    
    return (
      <I.Container id="inicio">
        <I.FeaturedVertical>
          <I.FeaturedHorizontal>
        <I.Box>

          <I.Left>
            <I.ImgContainer background={imgPath + 'back-js.webp'}>
              <img src={imgPath + 'leonan-color.webp'} alt="Foto de Leonan Thomaz no tema introdutório" />
            </I.ImgContainer>
          </I.Left>

          <I.Right>
          
            <I.Wrapper>
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
                <a href="#sobre" aria-labelledby="Seta para ir para a seção Sobre">
                  <I.Arrow/>
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
