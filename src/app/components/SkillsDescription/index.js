import React from "react";
import { ETitle } from "../Elements/title";
import * as SD from './SkillsDescriptionStyles'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '@splidejs/react-splide/css/skyblue';

import { 
    DiJsBadge,
    DiCss3,
    DiHtml5,
    DiNodejsSmall,
    DiPhp,
    DiDatabase,
} from 'react-icons/di';

export const SkillsDescription = () =>{

    return(
        <SD.Container>
            <AnimationOnScroll animateIn="animate__backInLeft">
                <ETitle title={'Competências'} subtitle={'Do front ao back!'}/>
            </AnimationOnScroll>
            <SD.Wrapper>
                <SD.Box>
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
                                Possuo excelentes conhecimentos em HTML (semântica, acessibilidade e SEO), CSS (flexbox, grid, media queries),
                                linguagem de programação JavaScript (variáveis, objetos, arrays, laços, etc.)
                                 e framework React (componentes, libs, hooks, context).
                            </SD.Text>
                        </SD.Right>
                    </SD.ItemDW>

                    <SD.ItemDW>
                        <SD.Left>
                            <SD.LeftHeader>
                                <SD.TitleContainer>
                                    <SD.Title>Back-End</SD.Title>
                                </SD.TitleContainer>
                                <SD.IconsContainer>

                                    <AnimationOnScroll animateIn="animate__zoomInUp">
                                        <SD.Icon>
                                            <DiPhp aria-labelledby="Ícone da linguagem PHP"/>
                                        </SD.Icon>
                                    </AnimationOnScroll> 
                                    <AnimationOnScroll animateIn="animate__zoomInUp">
                                        <SD.Icon>
                                            <DiDatabase aria-labelledby="Ícone da linguagem MySQL"/>
                                        </SD.Icon>
                                    </AnimationOnScroll> 
                                    <AnimationOnScroll animateIn="animate__zoomInUp">
                                        <SD.Icon>
                                            <DiNodejsSmall aria-labelledby="Ícone da linguagem Node JS"/>
                                        </SD.Icon>
                                    </AnimationOnScroll> 
                                    
                                </SD.IconsContainer>
                                
                            </SD.LeftHeader>
                        </SD.Left>
                        <SD.Right>
                            <SD.Text>
                                Em back-end, possuo conhecimentos em PHP (procedural e orientado a objetos), Node JS, noções em banco de dados MySQL e Mongo DB (a nível de consultas).
                            </SD.Text>
                        </SD.Right>
                    </SD.ItemDW>

                </SD.Box>
            </SD.Wrapper>
        </SD.Container>
    )
}