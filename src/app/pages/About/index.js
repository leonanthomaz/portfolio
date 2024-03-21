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
            <A.BoxText>
            <p>Me chamo Leonan Thomaz de Oliveira, sou Analista e Desenvolvedor de Sistemas com experiência em desenvolvimento Java, manutenção de bancos de dados SQL Server e PL/SQL. Possuo formação em Análise e Desenvolvimento de Sistemas pela Universidade Estácio de Sá e estou cursando pós-graduação em Engenharia de Software.</p>

            <p>Com passagens por empresas como MetrôRio e Mundiware, destaco minha atuação no desenvolvimento, correção e melhoria de sistemas em Java. Participei ativamente de projetos ágeis, aplicando metodologias como Scrum, e contribuí para a implementação bem-sucedida de sistemas de pagamento instantâneo.</p>

            <p>Minhas habilidades incluem domínio em Java (versões 8 e superiores), Spring Boot, Hibernate/JPA, além de conhecimentos em desenvolvimento front-end com React JS. Estou sempre buscando aprimoramento, especializando-me cada vez mais em Java e explorando tópicos como computação em nuvem (AWS) e ferramentas de sistemas de mensageria e armazenamento de dados distribuídos, como RabbitMQ, Redis, GraphQL e Kafka.</p>

            <p>Destaco ainda minha intermediação na primeira transação de pagamento PIX no MetrôRio e desenvolvimento de projetos pessoais significativos para meu portfólio, nos quais explorei diversas tecnologias e conceitos.</p>

            <p>Estou aberto a oportunidades e pronto para contribuir em projetos inovadores!</p>
            <AnimationOnScroll animateIn="animate__bounceIn">
              {/* <A.LinkCurriculum>
                  <a className="btn" aria-labelledby="Botão para baixar curriculo de Leonan Thomaz" href={curriculo} download>Baixe meu curriculo</a>
              </A.LinkCurriculum> */}
              </AnimationOnScroll>
            </A.BoxText>
          </A.Right>
        </A.Wrapper>
      </A.Container>
    )
}
