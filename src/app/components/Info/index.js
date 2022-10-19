import React from 'react'
import * as IF from './InfoStyles'
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ETitle } from '../../components/Elements/title'

export const Info = () => {
    return (
        <IF.Container>
            <ETitle title={'Pode me chamar!'} subtitle={'Estou a disposição!'}/>
            <IF.Wrapper>
                <AnimationOnScroll animateIn="animate__fadeInUp">
                    <IF.Item>
                        <a href="https://api.whatsapp.com/send?phone=5521998090928">
                        <IF.Icon>
                            <BsWhatsapp/>
                        </IF.Icon>
                        <IF.Title>Whatsapp</IF.Title>
                        <IF.Subtitle>(21) 99809-0928</IF.Subtitle>
                        </a>
                    </IF.Item>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInUp">
                <IF.Item>
                    <a href="https://www.linkedin.com/in/leonanthomaz">
                    <IF.Icon>
                        <FaLinkedin/>
                    </IF.Icon>
                    <IF.Title>LinkedIn</IF.Title>
                    <IF.Subtitle>@leonanthomaz</IF.Subtitle>
                    </a>
                </IF.Item>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInUp">
                <IF.Item>
                    <a href="mailto:leonan.thomaz@gmail.com? Subject: Olá! Gostaria de falar com você!m&body=Conteúdo da mensagem">
                    <IF.Icon>
                        <SiGmail/>
                    </IF.Icon>
                    <IF.Title>E-mail</IF.Title>
                    <IF.Subtitle>leonan.thomaz@gmail.com</IF.Subtitle>
                    </a>
                </IF.Item>
                </AnimationOnScroll> 
            </IF.Wrapper>
            
        </IF.Container>
    )
}
