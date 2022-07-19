import React from "react";
import { SobreMainStyled } from "./SobreStyles";
import curriculo from '../../assets/documents/Curriculo-Leonan-Thomaz.pdf';
import foto  from '../../assets/img/programador.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Sobre = () => {

    return (
        <SobreMainStyled  >
            <div className="sobre" >
                <div id="box" class="about container">
                <h2 class="title section-heading text-uppercase text-center ">Sobre mim</h2>
                <AnimationOnScroll animateIn="animate__fadeInDown">
                    <h3 class="section-subheading text-center">Me conhecendo um pouco mais!</h3>
                </AnimationOnScroll>
                <div className="sobre-box">
                   
                    <div className="right">
                    <p class="description my-5">
                        Me chamo Leonan Thomaz e sou formado em Análise e Desenvolvimento de Sistemas pela universidade Estácio de Sá.
                        <br/><br/>
                        Durante meu curso, sempre busquei ampliar meus conhecimentos e hoje busco me
                        manter sempre atualizado por meio de um aprendizado contínuo. Gosto de ler, ficar atento às
                        notícias e às novidades, principalmente as relacionadas com a área de tecnologia. Encaro
                        minha profissão como um grande hobby, sendo assim útil e ao mesmo tempo agradável para
                        mim.
                        <br/><br/>
                        Dentre minhas principais soft skills estão: resolução de problemas; apto a trabalhar sob pressão; facilidade em aprendizado e organização e planejamento.
                        <br/><br/>
                        Quanto as minhas habilidades em tecnologia, possuo excelentes conhecimentos em front-end, como HTML, CSS (Sass),
                        linguagem de programação JavaScript (variáveis, objetos, arrays, manipulação do DOM, etc.) e framework React (componentes, libs, hooks, context). 
                        Em back-end, possuo conhecimentos em Node JS (express) e PHP (procedural, PDO), 
                        ferramentas de versionamento Git e Github (principais queries) e noções de banco de dados Mongo DB e MySQL (nível DDL, operações CRUD e consultas básicas).
                        <br/><br/>
                        Gosto de desafios e resolver problemas, tenho um bom senso prático e boa capacidade de
                        foco e atenção aos detalhes.
                    </p>
                    </div>
                    <AnimationOnScroll animateIn="animate__fadeInRight">
                        <div className="left">
                            <img src={foto} alt="" />
                        </div>
                    </AnimationOnScroll>
                </div>
                    <div className="text-center">
                        <a className="btn" href={curriculo} download>Baixe meu curriculo</a>
                    </div>
                </div>
            </div>
        </SobreMainStyled>
    )
}

export default Sobre;