import React from "react";
import { ETitle } from "../Elements/title";
import * as T from './TourStyles'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

export const Tour = () =>{
    const imgPath = process.env.REACT_APP_IMGPATH

    return(
        <T.Container>
            <ETitle title={'Minha trajetória'}/>
            <T.Wrapper>
                <T.Left>
                {/* <Splide aria-label="My Favorite Images">
                    <SplideSlide>
                        <img src="https://39963.cdn.simplo7.net/static/39963/banner/topo_165892907252895.jpg" alt="banner1"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src="https://39963.cdn.simplo7.net/static/39963/banner/topo_165892894141835.jpg" alt="banner2"/>
                    </SplideSlide>
                </Splide> */}
                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                    <T.ImgContainer style={{backgroundImage: "url(" + imgPath + 'FotoJet.jpg' + ")"}}>
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