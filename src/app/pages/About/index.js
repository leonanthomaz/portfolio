import React from "react";
import * as A from "./AboutStyles";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ETitle } from "../../components/Elements/title";
import curriculo from '../../sharing/assets/doc/curriculo.pdf'
import imageDev from '../../sharing/assets/img/programador.webp';

export const About = () => {

    return (
      <A.Container id="about">
        <AnimationOnScroll animateIn="animate__backInRight">
          <ETitle title={'Sobre Mim'} subtitle={'Um pouco sobre minha trajetória'}/>
        </AnimationOnScroll>
        <A.Wrapper>
          <A.Left>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
                <A.ImgContainer>
                  <img src={imageDev} alt="Desenho minimalista de um programador" />
                </A.ImgContainer>
            </AnimationOnScroll>
          </A.Left>
          <A.Right>
            <A.Text>
              <p>Olá!</p>
              <p>
              Me chamo Leonan Thomaz e sou formado em Análise e Desenvolvimento de Sistemas pela Estácio de Sá.
              </p>

              <p>
              Sempre fui apaixonado por tecnologia. Meu primeiro curso na área foi há 12 anos atrás, quando tive meu primeiro contato com HTML, mas foi a partir de 2019, que ingressei oficialmente nesta área quando dei início à minha graduação.
              </p>

              <p>
              Tenho profunda satisfação em ver meus projetos adaptados em diversos tipos de telas e dispositivos, progredindo a cada nova habilidade conquistada.
              </p>

              <p>
              Veja abaixo minhas principais competências e habilidades!
              </p>
              
            <AnimationOnScroll animateIn="animate__bounceIn">
              <A.LinkCurriculum>
                  <a className="btn" aria-labelledby="Botão para baixar curriculo de Leonan Thomaz" href={curriculo} download>Baixe meu curriculo</a>
              </A.LinkCurriculum>
              </AnimationOnScroll>
            </A.Text>
          </A.Right>
        </A.Wrapper>
      </A.Container>
    )
}
