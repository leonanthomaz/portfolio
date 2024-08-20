import React from "react";
import * as A from "./AboutStyles";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ETitle } from "../../components/Elements/title";
// import curriculo from '../../sharing/assets/doc/curriculo.pdf'
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
            <A.BoxText className="small-screen-text">
                <p>Sou Leonan, um Desenvolvedor FullStack apaixonado por tecnologia e pela criação de soluções inovadoras. Minha experiência abrange uma sólida base em JavaScript com React, além de Java com Spring Boot. Também tenho conhecimentos em Typescript, React Native para desenvolvimento mobile e Python para automação e análise de dados.</p>
                <p>Minha jornada na tecnologia é marcada pela busca contínua por aprendizado e inovação. Sou movido pela curiosidade e pela vontade de resolver problemas reais. No meu portfólio, você encontrará projetos que refletem meu compromisso com a qualidade, a funcionalidade e a inovação. Estou sempre em busca de novos desafios que me permitam crescer como profissional e contribuir com soluções que fazem a diferença.</p>
                <p>Fique à vontade para explorar meus projetos e conhecer mais sobre o que posso oferecer. Vamos construir algo incrível juntos!</p>
              </A.BoxText>

              <A.BoxText className="large-screen-text">
                <p>Sou Leonan, um Desenvolvedor FullStack apaixonado por tecnologia e pela criação de soluções inovadoras. Minha experiência abrange uma sólida base em JavaScript com React, além de Java com Spring Boot. Também tenho conhecimentos em Typescript, React Native para desenvolvimento mobile e Python para automação e análise de dados.</p>
                <p>Tenho trabalhado em projetos que vão desde interfaces dinâmicas e responsivas até sistemas backend robustos. Acredito que a combinação de uma boa arquitetura, código limpo e uma comunicação eficaz com o cliente são fundamentais para o sucesso de qualquer projeto. Minha abordagem se baseia na criação de soluções que não apenas atendem às necessidades, mas também superam as expectativas.</p>
                <p>Minha jornada na tecnologia é guiada pela curiosidade e pela busca por desafios que me permitam crescer e aprender continuamente. Em meu portfólio, você encontrará projetos que refletem meu compromisso com a qualidade e a inovação. Estou sempre aberto a novos desafios e oportunidades para aplicar minhas habilidades e contribuir com soluções eficazes.</p>
                <p>Sinta-se à vontade para explorar meus projetos e ver o que posso oferecer. Se você está em busca de um desenvolvedor dedicado para transformar suas ideias em realidade, estou pronto para colaborar e criar algo incrível juntos.</p>
              </A.BoxText>
          </A.Right>
        </A.Wrapper>
      </A.Container>
    )
}
