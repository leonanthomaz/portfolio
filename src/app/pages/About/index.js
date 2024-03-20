import React from "react";
import * as A from "./AboutStyles";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ETitle } from "../../components/Elements/title";
import curriculo from '../../sharing/assets/doc/curriculo.pdf'
import imageDev from '../../sharing/assets/img/foto-leonan-atual.webp';

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
            Olá! 👋

            <p>
            Me chamo Leonan Thomaz, sou Analista e Desenvolvedor de Sistemas formado pela Universidade Estácio de Sá e atualmente cursando pós-graduação em Engenharia de Software. Meu foco é o desenvolvimento Java.            
            </p>

            <p>
            Tenho experiência em implementação e correção de códigos em Java, com foco em automação de tarefas comerciais. Atuo com ambiente Windows e possuo experiência com manutenção de bancos de dados SQL Server e PL/SQL. Estou em constante busca por aprimoramento, desde os conceitos fundamentais até temas mais avançados, como orientação a objetos e padrões de projeto.            
            </p>

            <p>
            Além disso, estou desenvolvendo habilidades em threads, concorrência e virtualização de ambientes usando Docker. Estou começando a explorar a computação em nuvem, com ênfase na AWS.            
            </p>

            <p>
            Estou sempre em busca de desafios enriquecedores que possam ampliar meu conhecimento.
            </p>

            <p>
            Aberto a oportunidades e pronto para contribuir em projetos inovadores! 💼✨
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
