import React from "react";
import { ETitle } from "../Elements/title";
import * as SH from './SkillsHomeStyles'
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
    DiDatabase
} from 'react-icons/di';



{/* <AnimationOnScroll animateIn="animate__fadeInLeft"></AnimationOnScroll> */}

export const SkillsHome = () =>{

    return(
        <SH.Container>
            <AnimationOnScroll animateIn="animate__backInLeft">
                <ETitle title={'Habilidades'} subtitle={'Do front ao back!'}/>
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
                                            <DiHtml5/>
                                        </SH.Icon>
                                    </AnimationOnScroll> 
                                    <AnimationOnScroll animateIn="animate__zoomInUp">
                                        <SH.Icon>
                                            <DiJsBadge/>
                                        </SH.Icon>
                                    </AnimationOnScroll>
                                    <AnimationOnScroll animateIn="animate__zoomInUp">
                                        <SH.Icon>
                                            <DiCss3/>
                                        </SH.Icon>
                                    </AnimationOnScroll>
                                </SH.IconsContainer>
                                
                            </SH.LeftHeader>
                        </SH.Left>
                        <SH.Right>
                            <SH.Text>
                                Possuo excelentes conhecimentos em HTML (semântica, acessibilidade e SEO), CSS (flexbox, grid, media queries),
                                linguagem de programação JavaScript (variáveis, objetos, arrays, laços, etc.)
                                 e framework React (componentes, libs, hooks, context). Possuo conhecimentos em pré-processadores SASS e SCSS.
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
                                            <DiNodejsSmall/>
                                        </SH.Icon>
                                    </AnimationOnScroll> 
                                    <AnimationOnScroll animateIn="animate__zoomInUp">
                                        <SH.Icon>
                                            <DiPhp/>
                                        </SH.Icon>
                                    </AnimationOnScroll> 
                                    <AnimationOnScroll animateIn="animate__zoomInUp">
                                        <SH.Icon>
                                            <DiDatabase/>
                                        </SH.Icon>
                                    </AnimationOnScroll> 
                                    
                                </SH.IconsContainer>
                                
                            </SH.LeftHeader>
                        </SH.Left>
                        <SH.Right>
                            <SH.Text>
                                Em back-end, possuo conhecimentos em Node JS (express) e PHP (procedural), ferramentas de versionamento Git e Github e noções de banco de dados Mongo DB e MySQL.
                            </SH.Text>
                        </SH.Right>
                    </SH.ItemDW>

                </SH.Box>

                <SH.ButtonContainer>
                    <SH.Button to='/skills'>Ver lista completa</SH.Button>
                </SH.ButtonContainer>

            </SH.Wrapper>
        </SH.Container>
    )
}