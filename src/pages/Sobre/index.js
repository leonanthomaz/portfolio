import React from "react";
import { SobreMainStyled } from "./SobreStyles";
import curriculo from '../../assets/documents/Leonan-Curriculo.pdf';
import foto  from '../../assets/img/programador.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Sobre = () => {

    return (
        <SobreMainStyled  >
            <div className="" >
                <div id="box" class="about container">
                <h2 class="title section-heading text-uppercase text-center ">Sobre mim</h2>
                <AnimationOnScroll animateIn="animate__fadeInDown">
                    <h3 class="section-subheading text-center">Me conhecendo um pouco mais!</h3>
                </AnimationOnScroll>
                <div className="sobre-box">
                   
                    <div className="right">
                    <p class="description my-5">
                        Graduado em Análise e Desenvolvimento de sistemas, sempre fui fascinado por tecnologia.
                        <br/><br/>
                        Durante minha graduação, sempre busquei ampliar meus conhecimentos e hoje busco me
                        manter sempre atualizado por meio de um aprendizado contínuo. Gosto de ler, ficar atento às
                        notícias e às novidades, principalmente as relacionadas com a área de tecnologia. Encaro
                        minha profissão como um grande hobby, sendo assim útil e ao mesmo tempo agradável para
                        mim.
                        <br/><br/>
                        Dentre minhas habilidades, destaco as linguagem de programação PHP e Javascript, sendo
                        capaz de construir aplicações simples, como SPA (Single Page Application) e projetos um pouco
                        mais avançados, como lógica de Web Commerce, comunicação via API e banco de dados.
                        Possuo domínio em Desenvolvimento Web (HTML5 e CSS3), conhecimentos em linguagem de
                        programação (PHP e JavaScript), noções de frameworks (React e Node JS) e banco de dados
                        (MySQL e MongoDB).
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