import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import * as E from './ExperienceStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ETitle } from "../../components/Elements/title";
import { FaBriefcase } from 'react-icons/fa';

export const Experience = () => {
    const theme = localStorage.getItem('theme');
    const iconColor = theme === 'light' ? '#073767' : '#313131'; // Azul para tema claro, cinza para tema escuro

    return (
        <E.Container id="experience">
            <AnimationOnScroll animateIn="animate__backInLeft">
                <ETitle title={'Experiência'} subtitle={'Meu Caminho Profissional'} />
            </AnimationOnScroll>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2024"
                    iconStyle={{ background: iconColor, color: '#fff' }}
                    icon={<FaBriefcase />}
                >
                    <h3 className="vertical-timeline-element-title">FABRIKATECH | DESENVOLVEDOR FULLSTACK</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Co-Fundador de uma empresa de tecnologia voltada para micro e pequenas empresas</h4> */}
                    <ul>
                        <li><b>Desenvolvimento Web:</b> Criei landing pages personalizadas que aumentaram a interação dos usuários em 35% e geraram mais leads para micro e pequenas empresas.</li>
                        <li><b>Manutenção com Java:</b> Aperfeiçoei sistemas críticos, fortalecendo a segurança e o desempenho dos dados, resultando em proteção contra vulnerabilidades.</li>
                        <li><b>Backend e Sistemas Comerciais:</b> Desenvolvi sistemas de PDV e soluções backend com Java e Spring Boot, melhorando a eficiência operacional e o controle de vendas.</li>
                        <li><b>Automação e Desenvolvimento Futuro:</b> Implementei automações em Python e preparei a expansão para soluções móveis com React Native, antecipando demandas futuras.</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2023"
                    iconStyle={{ background: iconColor, color: '#fff' }}
                    icon={<FaBriefcase />}
                >
                    <h3 className="vertical-timeline-element-title">METRÔRIO | ANALISTA DE SISTEMAS</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Maior empresa de transporte do Estado do Rio de Janeiro</h4> */}
                    <ul>
                        <li><b>Implementação do PIX:</b> Contribuí para a primeira transação do PIX no MetrôRio, modernizando os processos financeiros.</li>
                        <li><b>Manutenção com Java:</b> Aperfeiçoei sistemas críticos, reforçando a segurança e o desempenho dos dados.</li>
                        <li><b>Automação de Tarefas:</b> Automatizei processos e corrigi bugs em servidores com Python e Windows Batch, reduzindo erros em 30%.</li>
                        <li><b>Gestão de Dados:</b> Otimizei bancos de dados SQL Server e Oracle, garantindo a integridade e disponibilidade dos dados.</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2022"
                        iconStyle={{ background: iconColor, color: '#fff' }}
                        icon={<FaBriefcase />}
                    >
                    <h3 className="vertical-timeline-element-title">DESENVOLVEDOR FRONTEND | ESTÁGIO</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Primeira oportunidade na área de programação</h4> */}
                    <ul>
                        <li><b>Desenvolvimento Web:</b> Criei aplicações web com HTML, CSS e JavaScript, integrando APIs para melhorar a funcionalidade e a experiência do usuário.</li>
                        <li><b>SEO e Análise de Dados:</b> Apliquei técnicas de SEO e utilizei Google Analytics para aumentar a visibilidade e a eficácia das aplicações.</li>
                    </ul>
                </VerticalTimelineElement>      
            </VerticalTimeline>
        </E.Container>
    );
};
