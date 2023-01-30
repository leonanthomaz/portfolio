import React from 'react'
import * as IF from './InfoStyles'
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ETitle } from '../../components/Elements/title'
import { VscGithub } from "react-icons/vsc";

export const Info = ({ title, subtitle }) => {
    return (
        <IF.Container id="contact">
            <AnimationOnScroll animateIn="animate__backInLeft">
                <ETitle title={'Contato'} subtitle={'Responderei o mais rápido possível!'}/>
            </AnimationOnScroll>
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
                    <a href="https://github.com/leonanthomaz">
                    <IF.Icon>
                        <VscGithub/>
                    </IF.Icon>
                    <IF.Title>Github</IF.Title>
                    <IF.Subtitle>leonanthomaz</IF.Subtitle>
                    </a>
                </IF.Item>
                </AnimationOnScroll> 
            </IF.Wrapper>
        </IF.Container>
    )
}
