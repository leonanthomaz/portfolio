import React from "react";
import * as A from "./SobreStyles";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ETitle } from "../../components/Elements/title";
import curriculo from '../../sharing/assets/doc/curriculo.pdf'

export const Sobre = () => {
    const imgPath = process.env.REACT_APP_IMGPATH

    return (
      <A.Container id="sobre">
        <AnimationOnScroll animateIn="animate__backInLeft">
          <ETitle title={'Sobre Mim'} subtitle={'Um pouco sobre minha trajetória'}/>
        </AnimationOnScroll>
        <A.Wrapper>
          <A.Left>
            <A.Text>
              <p>Olá!</p>
              <p>
              Me chamo Leonan Thomaz e sou formado em Análise e Desenvolvimento de Sistemas pela Estácio de Sá.
              </p>

              <p>
              Sempre fui apaixonado por tecnologia. Meu primeiro curso na área foi há 12 anos atrás, quando tive meu primeiro contato com HTML, mas foi a partir de 2019, que ingressei oficialmente nesta área quando dei início à minha graduação.
              </p>

              <p>
              Hoje, busco aperfeiçoar meus conhecimentos, sempre me mantendo atualizado na área.
              </p>

              <p>
              Tenho profunda satisfação em ver meus projetos adaptados em diversos tipos de telas e dispositivos, progredindo a cada nova habilidade conquistada.
              </p>

              <p>
              Veja abaixo minhas principais competências e habilidades!
              </p>
              
            <AnimationOnScroll animateIn="animate__bounceIn">
              <A.LinkCurriculum>
                  <a className="btn" aria-labeledby="Botão para baixar curriculo de Leonan Thomaz" href={curriculo} download>Baixe meu curriculo</a>
              </A.LinkCurriculum>
              </AnimationOnScroll>
            </A.Text>
          </A.Left>
          <A.Right>
            <AnimationOnScroll animateIn="animate__fadeInRight">
                <A.ImgContainer>
                  <img src={imgPath + 'programador.png'} alt="Desenho minimalista de um programador" />
                </A.ImgContainer>
            </AnimationOnScroll>
          </A.Right>
        </A.Wrapper>
      </A.Container>
    )
}
