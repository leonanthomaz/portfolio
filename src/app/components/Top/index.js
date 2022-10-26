import React from "react";
import { ETitle } from "../Elements/title";
import * as T from './TopStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';


import img1 from '../../sharing/assets/img/destaques/eleicoes-st.png';
import img2 from '../../sharing/assets/img/destaques/popcorn.png';
import img3 from '../../sharing/assets/img/destaques/bn.png';
import img4 from '../../sharing/assets/img/destaques/cds.png';
import img5 from '../../sharing/assets/img/destaques/eleicoes-pt.png';


{/* <AnimationOnScroll animateIn="animate__fadeInLeft"></AnimationOnScroll> */}

export const Top = () =>{
    const imgPath = process.env.REACT_APP_IMGPATH

    let lista = [
        {
            img: img1,
            name: 'Imagem 1'
        }, 
        {
            img: img2,
            name: 'Imagem 2'
        },
        {
            img: img3,
            name: 'Imagem 3'
        },
        {
            img: img4,
            name: 'Imagem 3'
        },
        {
            img: img5,
            name: 'Imagem 3'
        },
    ]

    return(
        <T.Container>
            <AnimationOnScroll animateIn="animate__backInLeft">
                <ETitle title={'Projetos em Destaque'}/>
            </AnimationOnScroll>
            <T.SplideContainer>
                <Splide aria-label="My Favorite Images">
                    { lista.map((e, i)=>{
                        return(
                            <SplideSlide key={i}>
                                <img src={e.img} alt={e.name}/>
                            </SplideSlide>
                        )
                    })}
                </Splide>
                <T.ButtonContainer>
                    <T.Button>Mais detalhes</T.Button>
                </T.ButtonContainer>
            </T.SplideContainer>
        </T.Container>
    )
}