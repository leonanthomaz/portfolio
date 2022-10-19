import React from "react";
import { ETitle } from "../Elements/title";
import * as T from './TourStyles'
import tst from '../../sharing/img/FotoJet.jpg'
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Tour = () =>{
    return(
        <T.Container>
            <ETitle title={'Minha trajetória'}/>
            <T.Wrapper>
                <T.Left>
                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                    <T.ImgContainer style={{backgroundImage: "url(" + tst + ")"}}>
                        <T.ImgWrapper>
                            <T.Info>
                                <T.Description>
                                    Meus projetos
                                </T.Description>
                                <T.ButtonContainer>
                                    <T.Button to='/portfolio'>Conheça!</T.Button>
                                </T.ButtonContainer>
                            </T.Info>
                        </T.ImgWrapper>
                    </T.ImgContainer>
                    </AnimationOnScroll>
                </T.Left>
                <T.Right>
                    <AnimationOnScroll animateIn="animate__fadeInRight">
                    <T.ImgContainer>
                        <T.ImgWrapper>
                            <T.Info>
                                <T.Description>
                                    Minhas habilidades
                                </T.Description>
                                <T.ButtonContainer>
                                    <T.Button to='/skills'>Conheça!</T.Button>
                                </T.ButtonContainer>
                            </T.Info>
                        </T.ImgWrapper>
                    </T.ImgContainer>
                    </AnimationOnScroll>
                </T.Right>
            </T.Wrapper>
        </T.Container>
    )
}