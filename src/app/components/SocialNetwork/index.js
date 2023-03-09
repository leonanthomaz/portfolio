import React from 'react'
import * as SN from './SocialNetworkStyles'
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { VscGithub } from "react-icons/vsc";

export const SocialNetwork = () => {
    return (
        <SN.Container>
            <SN.Wrapper>
                <AnimationOnScroll animateIn="animate__fadeInUp">
                    <SN.Item>
                        <a href="https://api.whatsapp.com/send?phone=5521998090928">
                        <SN.Icon>
                            <BsWhatsapp/>
                        </SN.Icon>
                        {/* <SN.Title>Whatsapp</SN.Title> */}
                        <SN.Subtitle>(21) 99809-0928</SN.Subtitle>
                        </a>
                    </SN.Item>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInUp">
                <SN.Item>
                    <a href="mailto:leonan.thomaz@gmail.com? Subject: Olá! Gostaria de falar com você!m&body=Conteúdo da mensagem">
                    <SN.Icon>
                        <SiGmail/>
                    </SN.Icon>
                    {/* <SN.Title>E-mail</SN.Title> */}
                    <SN.Subtitle>leonan.thomaz@gmail.com</SN.Subtitle>
                    </a>
                </SN.Item>
                </AnimationOnScroll> 

                <AnimationOnScroll animateIn="animate__fadeInUp">
                <SN.Item>
                    <a href="https://www.linkedin.com/in/leonanthomaz">
                    <SN.Icon>
                        <FaLinkedin/>
                    </SN.Icon>
                    {/* <SN.Title>LinkedIn</SN.Title> */}
                    <SN.Subtitle>@leonanthomaz</SN.Subtitle>
                    </a>
                </SN.Item>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInUp">
                <SN.Item>
                    <a href="https://github.com/leonanthomaz">
                    <SN.Icon>
                        <VscGithub/>
                    </SN.Icon>
                    {/* <SN.Title>Github</SN.Title> */}
                    <SN.Subtitle>leonanthomaz</SN.Subtitle>
                    </a>
                </SN.Item>
                </AnimationOnScroll> 
            </SN.Wrapper>
        </SN.Container>
    )
}
