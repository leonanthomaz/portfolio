import React from "react";
import * as A from "./AboutStyles";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ETitle } from "../../components/Elements/title";
import curriculo from '../../sharing/assets/doc/Curriculo-Leonan-Thomaz.pdf'

export const Sobre = () => {
    const imgPath = process.env.REACT_APP_IMGPATH

    return (
      <A.Container id="sobre">
        <AnimationOnScroll animateIn="animate__backInLeft">
          <ETitle title={'Sobre'} subtitle={'Um pouco sobre mim'}/>
        </AnimationOnScroll>
        <A.Wrapper>
          <A.Left>
            <A.Text>
              <p>Olá!</p>
              <p>Me chamo Leonan Thomaz e sou formado em Análise e Desenvolvimento de Sistemas pela Estácio de Sá.</p>
              <p>Sempre fui apaixonado por tecnologia. Meu primeiro curso na área foi há 12 anos atrás, quando tive meu primeiro contato com HTML. EM 2019, iniciei oficialmente minha jornada, na área em que sempre fui apaixonado.</p>
                <p>Hoje, busco aperfeiçoar meus conhecimentos na área de frontend, onde tenho mais afinidade.</p> 
              <p>
                Tenho profunda satisfação em ver meus projetos se adaptando em diversas telas, de diferentes dispositivos.
              </p>
              <p>Conheça minhas habilidades e projetos logo abaixo!</p>
              
            <AnimationOnScroll animateIn="animate__bounceIn">
              <A.LinkCurriculum>
                  <a className="btn" href={curriculo} download>Baixe meu curriculo</a>
              </A.LinkCurriculum>
              </AnimationOnScroll>
            </A.Text>
          </A.Left>
          <A.Right>
            <AnimationOnScroll animateIn="animate__fadeInRight">
                <A.ImgContainer>
                  <img src={imgPath + 'programador.png'} alt="" />
                </A.ImgContainer>
            </AnimationOnScroll>
          </A.Right>
        </A.Wrapper>
      </A.Container>
    )
}
