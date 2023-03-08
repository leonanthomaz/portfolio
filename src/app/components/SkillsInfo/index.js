import React from "react";
import { ETitle } from "../Elements/title";
import * as SH from './SkillsInfoStyles'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '@splidejs/react-splide/css/skyblue';

import { 
    DiJsBadge,
    DiCss3,
    DiReact,
    DiHtml5,
    DiNodejs,
    DiNodejsSmall,
    DiPhp,
    DiDatabase,
    DiJava
} from 'react-icons/di';

export const SkillsInfo = () =>{

    return(
        <SH.Container>
            <AnimationOnScroll animateIn="animate__backInLeft">
                <ETitle title={'Competências'} subtitle={'Do front ao back!'}/>
            </AnimationOnScroll>
            <SH.Wrapper>
                <SH.Box>
                    <SH.ItemDW>
                        <SH.Left>
                            <SH.LeftHeader>
                                <SH.TitleContainer>
                                    <SH.Title>Front-End</SH.Title>
                                </SH.TitleContainer>
                                <SH.IconsContainer>
                                    <AnimationOnScroll animateIn="animate__zoomInUp">
                                        <SH.Icon>
                                            <DiHtml5 aria-labelledby="Ícone da linguagem HTML"/>
                                        </SH.Icon>
                                    </AnimationOnScroll> 
                                    <AnimationOnScroll animateIn="animate__zoomInUp">
                                        <SH.Icon>
                                            <DiJsBadge aria-labelledby="Ícone da linguagem Javascript"/>
                                        </SH.Icon>
                                    </AnimationOnScroll>
                                    <AnimationOnScroll animateIn="animate__zoomInUp">
                                        <SH.Icon>
                                            <DiCss3 aria-labelledby="Ícone da linguagem CSS"/>
                                        </SH.Icon>
                                    </AnimationOnScroll>
                                </SH.IconsContainer>
                                
                            </SH.LeftHeader>
                        </SH.Left>
                        <SH.Right>
                            <SH.Text>
                                Possuo excelentes conhecimentos em HTML (semântica, acessibilidade e SEO), CSS (flexbox, grid, media queries),
                                linguagem de programação JavaScript (variáveis, objetos, arrays, laços, etc.)
                                 e framework React (componentes, libs, hooks, context).
                            </SH.Text>
                        </SH.Right>
                    </SH.ItemDW>

                    <SH.ItemDW>
                        <SH.Left>
                            <SH.LeftHeader>
                                <SH.TitleContainer>
                                    <SH.Title>Back-End</SH.Title>
                                </SH.TitleContainer>
                                <SH.IconsContainer>

                                    <AnimationOnScroll animateIn="animate__zoomInUp">
                                        <SH.Icon>
                                            <DiPhp aria-labelledby="Ícone da linguagem PHP"/>
                                        </SH.Icon>
                                    </AnimationOnScroll> 
                                    <AnimationOnScroll animateIn="animate__zoomInUp">
                                        <SH.Icon>
                                            <DiDatabase aria-labelledby="Ícone da linguagem MySQL"/>
                                        </SH.Icon>
                                    </AnimationOnScroll> 
                                    <AnimationOnScroll animateIn="animate__zoomInUp">
                                        <SH.Icon>
                                            <DiNodejsSmall aria-labelledby="Ícone da linguagem Node JS"/>
                                        </SH.Icon>
                                    </AnimationOnScroll> 
                                    
                                </SH.IconsContainer>
                                
                            </SH.LeftHeader>
                        </SH.Left>
                        <SH.Right>
                            <SH.Text>
                                Em back-end, possuo conhecimentos em PHP (procedural e orientado a objetos), Node JS, noções em banco de dados MySQL e Mongo DB (a nível de consultas).
                            </SH.Text>
                        </SH.Right>
                    </SH.ItemDW>

                </SH.Box>
            </SH.Wrapper>
        </SH.Container>
    )
}