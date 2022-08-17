import React from "react";
import * as A from "./AboutStyles";
import curriculo from '../../shared/assets/documents/Curriculo-Leonan-Thomaz.pdf';
import foto  from '../../shared/assets/img/programador.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ETitle } from "../../components/Elements/title";

export const About = () => {
    return (
      <A.Container>
          <ETitle title={'Sobre'} subtitle={'Um pouco sobre mim'}/>
        <A.Wrapper>
          <A.Left>
            <A.Text>
            <p>
              Me chamo Leonan Thomaz e sou formado em Análise e Desenvolvimento de Sistemas pela universidade Estácio de Sá.
            </p>
            <br/>
             <p>
              Durante meu curso, sempre busquei ampliar meus conhecimentos e hoje busco me
              manter sempre atualizado por meio de um aprendizado contínuo. Gosto de ler, ficar atento às
              notícias e às novidades, principalmente as relacionadas com a área de tecnologia. Encaro
              minha profissão como um grande hobby, sendo assim útil e ao mesmo tempo agradável para
              mim.
             </p>
             <br/>
              <p>
                Dentre minhas principais soft skills estão: resolução de problemas; apto a trabalhar sob pressão; facilidade em aprendizado e organização e planejamento.
              </p>
              <br/>
              <p>
              Quanto as minhas habilidades em tecnologia, possuo excelentes conhecimentos em front-end, como HTML, CSS,
              linguagem de programação JavaScript (variáveis, objetos, arrays, manipulação do DOM, etc.) e framework React (componentes, libs, hooks, context). 
              Em back-end, possuo conhecimentos em Node JS (express) e PHP (procedural, PDO), 
              ferramentas de versionamento Git e Github (principais queries) e noções em pré-processadores de estilo (SASS e SCSS) e de banco de dados Mongo DB e MySQL (nível DDL, operações CRUD e consultas básicas).
              </p>
              <br/>
             <p>
              Gosto de desafios e resolver problemas, tenho um bom senso prático e boa capacidade de
              foco e atenção aos detalhes.
             </p>
            </A.Text>
              
          </A.Left>
          <A.Right>
            <AnimationOnScroll animateIn="animate__fadeInRight">
                <A.ImgContainer>
                  <img src={foto} alt="" />
                </A.ImgContainer>

            </AnimationOnScroll>
          </A.Right>
        </A.Wrapper>
          <A.LinkCurriculum>
              <a className="btn" href={curriculo} download>Baixe meu curriculo</a>
          </A.LinkCurriculum>
      </A.Container>
    )
}
