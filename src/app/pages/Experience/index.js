import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import * as E from './ExperienceStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ETitle } from "../../components/Elements/title";
import { FaBriefcase } from 'react-icons/fa';
import { GiHillConquest } from "react-icons/gi";

export const Experience = () => {
    return (
        <E.Container id="experience">
            <AnimationOnScroll animateIn="animate__backInLeft">
                <ETitle title={'Experiência'} subtitle={'Meu Caminho Profissional'} />
            </AnimationOnScroll>
            <VerticalTimeline>

                <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2022"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaBriefcase />}
                    >
                    <h3 className="vertical-timeline-element-title">DESENVOLVEDOR FRONTEND | ESTÁGIO</h3>
                    <h4 className="vertical-timeline-element-subtitle">Desenvolvimento Frontend</h4>
                    <ul>
                        <li>Desenvolvimento web, incluindo aplicações baseadas em linguagem própria da empresa e integrações com APIs;</li>
                        <li>Implementações avançadas de SEO com semântica.</li>
                    </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaBriefcase />}
                >
                    <h3 className="vertical-timeline-element-title">METRÔRIO | ANALISTA DE SISTEMAS - JÚNIOR</h3>
                    <h4 className="vertical-timeline-element-subtitle">Desenvolvimento, correções e melhorias em sistemas de suporte ao MetrôRio</h4>
                    <ul>
                        <li>Desenvolvimento, correções e melhorias em sistemas de suporte ao metrô utilizando Java 8 com Intellij;</li>
                        <li>Execução de scripts em Python para automação de tarefas em servidores;</li>
                        <li>Manutenção em bancos de dados SQL Server e Oracle;</li>
                        <li>Monitoramento de servidores em ambientes Windows e Linux com Zabbix;</li>
                        <li>Extração, tratamento e geração de relatórios a partir de dados dos bancos SQL Server e Oracle utilizando o Microsoft Report Builder;</li>
                        <li>Trabalho de campo, intermediando implementações de sistemas em equipamentos de bilhetagem;</li>
                        <li>Participação em projetos de equipe utilizando metodologias ágeis, similar ao Scrum.</li>
                    </ul>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<GiHillConquest />}
                >
                    <h3 className="vertical-timeline-element-title">IMPLEMENTAÇÃO DO PIX NO METRÔRIO</h3>
                    <p>
                        Fui responsável pela intermediação da primeira transação do sistema PIX do MetrôRio.
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </E.Container>
    );
};
