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
            <A.BoxText>
              <p>Olá!</p>

              <p>
              Meu nome é Leonan Thomaz, graduado em Análise e Desenvolvimento de Sistemas pela Estácio de Sá.
              </p>

              <p>
              Desde meu primeiro contato com HTML, há 12 anos, nutro uma paixão constante por tecnologia. Entretanto, foi a partir de 2019 que oficializei minha entrada na área ao iniciar minha graduação.
              </p>

              <p>
              Na equipe do MetrôRio, acumulei uma valiosa experiência na implementação de projetos em Java. Destaco minha habilidade em trabalhar com bancos de dados SQL Server e PL SQL, garantindo soluções eficientes e robustas.
              </p>

              <p>
              Atualmente, estou prestes a concluir o último período da pós-graduação em Engenharia de Software na Universidade Estácio de Sá.
              </p>
              
            <AnimationOnScroll animateIn="animate__bounceIn">
              <A.LinkCurriculum>
                  <a className="btn" aria-labelledby="Botão para baixar curriculo de Leonan Thomaz" href={curriculo} download>Baixe meu curriculo</a>
              </A.LinkCurriculum>
              </AnimationOnScroll>
            </A.BoxText>
          </A.Right>
        </A.Wrapper>
      </A.Container>
    )
}
