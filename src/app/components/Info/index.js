import React from 'react'
import * as IF from './InfoStyles'
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";


export const Info = () => {
    return (
        <IF.Container>
            <IF.Wrapper>
                <IF.Item>
                    <a href="https://api.whatsapp.com/send?phone=5521998090928">
                    <IF.Icon>
                        <BsWhatsapp/>
                    </IF.Icon>
                    <IF.Title>Whatsapp</IF.Title>
                    <IF.Subtitle>(21) 99809-0928</IF.Subtitle>
                    </a>
                </IF.Item>
                <IF.Item>
                    <a href="mailto:leonan.thomaz@gmail.com? Subject: Olá! Gostaria de falar com você!m&body=Conteúdo da mensagem">
                    <IF.Icon>
                        <SiGmail/>
                    </IF.Icon>
                    <IF.Title>E-mail</IF.Title>
                    <IF.Subtitle>leonan.thomaz@gmail.com</IF.Subtitle>
                    </a>
                </IF.Item>
                <IF.Item>
                    <a href="https://goo.gl/maps/7DTPtgHYjsT3ZyEN9" >
                    <IF.Icon>
                        <FaMapMarkerAlt/>
                    </IF.Icon>
                    <IF.Title>Localização</IF.Title>
                    <IF.SubtitleLocation>Estrada do Tijuaçu<br/>
                            Alto da Boa Vista <br/>
                            Rio de Janeiro - RJ</IF.SubtitleLocation>
                    </a>
                </IF.Item>
            </IF.Wrapper>
        </IF.Container>
    )
}
