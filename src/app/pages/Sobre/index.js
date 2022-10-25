import React from "react";
import * as A from "./SobreStyles";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ETitle } from "../../components/Elements/title";
import curriculo from '../../sharing/assets/doc/Curriculo-Leonan-Thomaz.pdf'

export const Sobre = () => {
    const imgPath = process.env.REACT_APP_IMGPATH

    return (
      <A.Container id="sobre">
        <ETitle title={'Sobre'} subtitle={'Um pouco sobre mim'}/>
        <A.Wrapper>
          <A.Left>
            <A.Text>
              <p>Olá!</p>
              <p>Me chamo Leonan Thomaz e sou formado em Análise e Desenvolvimento de Sistemas pela Estácio de Sá.</p> 
              <p>Possuo excelentes conhecimentos em front-end, como HTML, CSS,
                  linguagem de programação JavaScript (variáveis, objetos, arrays, manipulação do DOM, etc.) e framework React (componentes, libs, hooks, context). 
                  Em back-end, possuo conhecimentos em Node JS (express) e PHP (procedural, PDO), 
                  ferramentas de versionamento Git e Github (principais queries) e noções em outras linguagens, como Python e C#.
                  e de banco de dados Mongo DB e MySQL (nível DDL, operações CRUD e consultas básicas)</p>
              <p>Atualmente estou em busca de uma oportunidade em Desenvolvimento WEB.</p>
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
