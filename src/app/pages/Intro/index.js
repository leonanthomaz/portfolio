import React from "react";
import * as I from "./IntroStyles";
import Typewriter from 'typewriter-effect';
import imgMain from '../../sharing/assets/img/programador_mesa.webp';
import curriculo from '../../sharing/assets/doc/leonan_curriculo.pdf'

export const Intro = () => {
  
  return (
    <I.Container id="index">
      <I.FeaturedVertical>
        <I.FeaturedHorizontal>
          <I.Box>
            <I.Left>
              <I.ImgContainer background={ imgMain + 'back-js.webp'}>
                <img src={imgMain} alt="Icone programador" />
              </I.ImgContainer>
                <I.ButtonContainer>
                  <I.DownloadButton href={curriculo} download>
                    Baixar Currículo
                  </I.DownloadButton>
                </I.ButtonContainer>
            </I.Left>
            <I.Right>
              <I.Wrapper>
                <h1>Leonan Thomaz</h1>
                <h2> 
                  <span>Desenvolvedor&nbsp;</span> 
                  <Typewriter 
                    options={{ 
                      strings:["FullStack", "Frontend", "Backend"],
                      autoStart:true,
                      delay:75,
                      loop:true
                    }}
                  /> 
                </h2>
                <div className="arrow-down">
                  <a href="#about" aria-labelledby="Seta para ir para a seção About">
                    <I.Arrow/>
                  </a>
                </div>
              </I.Wrapper>  
            </I.Right>
          </I.Box>
        </I.FeaturedHorizontal>
      </I.FeaturedVertical>
    </I.Container>
  );
}
