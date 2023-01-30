import React from 'react'
import * as IFC from './InfoContactStyles'
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ETitle } from '../Elements/title'
import { VscGithub } from "react-icons/vsc";

export const InfoContact = () => {
    return (
        <IFC.Container>
            <AnimationOnScroll animateIn="animate__backInLeft">
                <ETitle title={'Me chame para um café!'} subtitle={'Estou a disposição!'}/>
            </AnimationOnScroll>
            <IFC.Wrapper>
                <AnimationOnScroll animateIn="animate__fadeInUp">
                    <IFC.Item>
                        <a href="https://api.whatsapp.com/send?phone=5521998090928">
                        <IFC.Icon>
                            <BsWhatsapp/>
                        </IFC.Icon>
                        <IFC.Title>Whatsapp</IFC.Title>
                        <IFC.Subtitle>(21) 99809-0928</IFC.Subtitle>
                        </a>
                    </IFC.Item>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInUp">
                <IFC.Item>
                    <a href="https://www.linkedin.com/in/leonanthomaz">
                    <IFC.Icon>
                        <FaLinkedin/>
                    </IFC.Icon>
                    <IFC.Title>LinkedIn</IFC.Title>
                    <IFC.Subtitle>@leonanthomaz</IFC.Subtitle>
                    </a>
                </IFC.Item>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInUp">
                <IFC.Item>
                    <a href="mailto:leonan.thomaz@gmail.com? Subject: Olá! Gostaria de falar com você!m&body=Conteúdo da mensagem">
                    <IFC.Icon>
                        <SiGmail/>
                    </IFC.Icon>
                    <IFC.Title>E-mail</IFC.Title>
                    <IFC.Subtitle>leonan.thomaz@gmail.com</IFC.Subtitle>
                    </a>
                </IFC.Item>
                </AnimationOnScroll> 

                <AnimationOnScroll animateIn="animate__fadeInUp">
                <IFC.Item>
                    <a href="https://github.com/leonanthomaz">
                    <IFC.Icon>
                        <VscGithub/>
                    </IFC.Icon>
                    <IFC.Title>Github</IFC.Title>
                    <IFC.Subtitle>leonanthomaz</IFC.Subtitle>
                    </a>
                </IFC.Item>
                </AnimationOnScroll> 
            </IFC.Wrapper>

            <IFC.Location>
                <IFC.Item>
                    <a href="https://goo.gl/maps/7DTPtgHYjsT3ZyEN9" >
                    <IFC.Icon>
                        <FaMapMarkerAlt/>
                    </IFC.Icon>
                    <IFC.Title>Localização</IFC.Title>
                    <IFC.SubtitleLocation>Estrada do Tijuaçu
                            Alto da Boa Vista
                            Rio de Janeiro - RJ</IFC.SubtitleLocation>
                    </a>
                </IFC.Item>
            </IFC.Location>

        </IFC.Container>
    )
}
