import React from "react";
import { ETitle } from "../Elements/title";
import * as T from './TopStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';


import img1 from '../../sharing/assets/img/destaques/eleicoes-st.webp';
import img2 from '../../sharing/assets/img/destaques/popcorn.webp';
import img3 from '../../sharing/assets/img/destaques/bn.webp';
import img4 from '../../sharing/assets/img/destaques/cds.webp';
import img5 from '../../sharing/assets/img/destaques/eleicoes-pt.webp';

export const Top = () =>{

    let lista = [
        {
            img: img1,
            name: 'eleicoes-segundo-turno',
            url: 'https://eleicoes2022-segundo-turno.vercel.app/'
        }, 
        {
            img: img2,
            name: 'popcorn',
            url: 'https://popcorn-two.vercel.app/'
        },
        {
            img: img3,
            name: 'beleza_da_natureza',
            url: 'https://belezadanatureza.vercel.app/'
        },
        {
            img: img4,
            name: 'casa_do_salgado',
            url: 'https://casadosalgadoabv.000webhostapp.com/'
        },
        {
            img: img5,
            name: 'eleicoes-primeiro-turno',
            url: 'https://eleicoes2022-primeiro-turno.vercel.app/'
        },
    ]

    return(
        <T.Container>
            <AnimationOnScroll animateIn="animate__backInLeft">
                <ETitle title={'Destaques'} subtitle={'Projetos desenvolvidos de maior destaque'}/>
            </AnimationOnScroll>
            <T.SplideContainer>
                <Splide options={ {
                        rewind: true,
                        type   : 'loop',
                        gap   : '1rem',
                        wheel: true,
                        autoplay: true
                    } } aria-label="My Favorite Images">
                    { lista.map((e, i)=>{
                        return(
                            <SplideSlide key={i} aria-labelledby={`Slide das principais habilidades`}>
                                <a href={e.url}>
                                    <img src={e.img} alt={e.name} loading="lazy" aria-labelledby={`Imagem editada, mostrando a versão Web e Mobile do projeto: ${e.name}`} width="inherit" height="inherit"/>
                                </a>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </T.SplideContainer>
        </T.Container>
    )
}