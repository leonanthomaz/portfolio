import React from "react";
import { ETitle } from "../Elements/title";
import * as SD from './SkillsDescriptionStyles'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '@splidejs/react-splide/css/skyblue';

import { 
    DiJsBadge,
    DiCss3,
    DiHtml5,
    DiJava,
    DiDatabase,
} from 'react-icons/di';
import { SiSpring } from "react-icons/si";

export const SkillsDescription = () =>{

    return(
        <SD.Container>
            <AnimationOnScroll animateIn="animate__backInLeft">
                <ETitle title={'Competências'} subtitle={'Do back ao front!'}/>
            </AnimationOnScroll>
            <SD.Wrapper>
                <SD.Box>
                   
                    <SD.ItemDW>
                        <SD.Left>
                            <SD.LeftHeader>
                                <SD.TitleContainer>
                                    <SD.Title>Back-End</SD.Title>
                                </SD.TitleContainer>
                                <SD.IconsContainer>

                                    <AnimationOnScroll animateIn="animate__zoomInUp">
                                        <SD.Icon>
                                            <DiJava aria-labelledby="Ícone da linguagem Java"/>
                                        </SD.Icon>
                                    </AnimationOnScroll> 
                                   
                                    <AnimationOnScroll animateIn="animate__zoomInUp">
                                        <SD.Icon>
                                            <SiSpring aria-labelledby="Ícone da linguagem Spring"/>
                                        </SD.Icon>
                                    </AnimationOnScroll> 
                                    <AnimationOnScroll animateIn="animate__zoomInUp">
                                        <SD.Icon>
                                            <DiDatabase aria-labelledby="Ícone da linguagem MySQL"/>
                                        </SD.Icon>
                                    </AnimationOnScroll> 
                                    
                                </SD.IconsContainer>
                                
                            </SD.LeftHeader>
                        </SD.Left>
                        <SD.Right>
                            <SD.Text>
                                Destaco-me por sólidos conhecimentos e experiência em Java, com ênfase na utilização eficaz do Spring, manipulação de APIs REST, protocolos HTTP e proficiência em bancos de dados, incluindo SQL Server e PL SQL.
                            </SD.Text>
                        </SD.Right>
                    </SD.ItemDW>

                    <SD.ItemDW>
                        <SD.Left>
                            <SD.LeftHeader>
                                <SD.TitleContainer>
                                    <SD.Title>Front-End</SD.Title>
                                </SD.TitleContainer>
                                <SD.IconsContainer>
                                    <AnimationOnScroll animateIn="animate__zoomInUp">
                                        <SD.Icon>
                                            <DiHtml5 aria-labelledby="Ícone da linguagem HTML"/>
                                        </SD.Icon>
                                    </AnimationOnScroll> 
                                    <AnimationOnScroll animateIn="animate__zoomInUp">
                                        <SD.Icon>
                                            <DiJsBadge aria-labelledby="Ícone da linguagem Javascript"/>
                                        </SD.Icon>
                                    </AnimationOnScroll>
                                    <AnimationOnScroll animateIn="animate__zoomInUp">
                                        <SD.Icon>
                                            <DiCss3 aria-labelledby="Ícone da linguagem CSS"/>
                                        </SD.Icon>
                                    </AnimationOnScroll>
                                </SD.IconsContainer>
                                
                            </SD.LeftHeader>
                        </SD.Left>
                        <SD.Right>
                            <SD.Text>
                                Proficiente em HTML, CSS, JavaScript (ECMA6) e frameworks ReactJS e NodeJs. Contribuo para interfaces dinâmicas e responsivas, promovendo experiências de usuário modernas.
                            </SD.Text>
                        </SD.Right>
                    </SD.ItemDW>

                </SD.Box>
            </SD.Wrapper>
        </SD.Container>
    )
}