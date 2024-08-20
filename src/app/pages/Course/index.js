import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import * as C from './CourseStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ETitle } from "../../components/Elements/title";
import { FaGraduationCap } from "react-icons/fa";
import { LiaJava } from "react-icons/lia";

export const Course = () => {
    const theme = localStorage.getItem('theme');
    const iconColor = theme === 'light' ? '#073767' : '#313131'; // Azul para tema claro, cinza para tema escuro

    return (
        <C.Container id="course">
            <AnimationOnScroll animateIn="animate__backInLeft">
                <ETitle title={'Cursos'} subtitle={'Meu Aprendizado'} />
            </AnimationOnScroll>
            <VerticalTimeline>
                {/* Seção para Graduação */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2021"
                    iconStyle={{ background: iconColor, color: '#fff' }}
                    icon={<FaGraduationCap />}
                >
                    <h3 className="vertical-timeline-element-title">TÉCNOLOGO EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</h3>
                    <h4 className="vertical-timeline-element-subtitle">Universidade Estácio de Sá</h4>
                    <p>
                        Concluído em 2021
                    </p>
                    <p>
                        <C.CertButton href="link_para_o_certificado" target="_blank" rel="noopener noreferrer">
                            Ver Diploma
                        </C.CertButton>
                    </p>
                </VerticalTimelineElement>

                {/* Adicione elementos VerticalTimelineElement para representar seus cursos */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2022"
                    iconStyle={{ background: iconColor, color: '#fff' }}
                    icon={<LiaJava />}
                >
                    <h3 className="vertical-timeline-element-title">JAVA COMPLETO PROGRAMAÇÃO ORIENTADA A OBJETOS + PROJETOS</h3>
                    <h4 className="vertical-timeline-element-subtitle">UDEMY</h4>
                    <p>
                        Ministrado pelo Professor Nélio Alves.
                        Carga horária de 60h.
                    </p>
                    <p>
                        <C.CertButton href="https://www.udemy.com/certificate/UC-dbfa69d0-1b4a-4c7d-a417-73733bbc42af/" target="_blank" rel="noopener noreferrer">
                            Ver Certificado
                        </C.CertButton>
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2022"
                    iconStyle={{ background: iconColor, color: '#fff' }}
                    icon={<LiaJava />}
                >
                    <h3 className="vertical-timeline-element-title">MARATONA JAVA</h3>
                    <h4 className="vertical-timeline-element-subtitle">DEVDOJO</h4>
                    <p>
                        Ministrado pelo Professor William Suane.
                        Carga horária de 90h.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2023"
                    iconStyle={{ background: iconColor, color: '#fff' }}
                    icon={<FaGraduationCap />}
                >
                    <h3 className="vertical-timeline-element-title">PÓS-GRADUAÇÃO EM ENGENHARIA DE SOFTWARE</h3>
                    <h4 className="vertical-timeline-element-subtitle">Universidade Estácio de Sá</h4>
                    <p>
                        Previsão de conclusão em 06/2024
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </C.Container>
    );
};
