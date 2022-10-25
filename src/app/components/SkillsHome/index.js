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
} from 'react-icons/di';



{/* <AnimationOnScroll animateIn="animate__fadeInLeft"></AnimationOnScroll> */}

export const SkillsHome = () =>{

    return(
        <SH.Container>
            <ETitle title={'Principais Skills'}/>
            <SH.Wrapper>
                <SH.Box>
                    <SH.ItemDW>
                        <SH.Left>

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
                            
                        </SH.Left>
                        <SH.Right>
                            <SH.Text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </SH.Text>
                        </SH.Right>
                    </SH.ItemDW>

                    <SH.ItemDW>
                        <SH.Left>
                            <AnimationOnScroll animateIn="animate__zoomInUp">
                                <SH.Icon>
                                    <DiReact/>
                                </SH.Icon>
                            </AnimationOnScroll>
                        </SH.Left>
                        <SH.Right>
                            <SH.Text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </SH.Text>
                        </SH.Right>
                    </SH.ItemDW>

                    <SH.ItemDW>
                        <SH.Left>
                            <AnimationOnScroll animateIn="animate__zoomInUp">
                                <SH.Icon>
                                    <DiNodejs/>
                                </SH.Icon>
                            </AnimationOnScroll>    
                        </SH.Left>
                        <SH.Right>
                            <SH.Text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </SH.Text>
                        </SH.Right>
                    </SH.ItemDW>
           
                </SH.Box>
                <a href="/skills">Ver lista completa</a>
            </SH.Wrapper>
        </SH.Container>
    )
}