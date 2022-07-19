import React from "react";
import { LocalMainStyled } from "./LocalStyles";

const Local = () => {

    return (
        <LocalMainStyled>
            <div className="container">
                <div className="">
                    <div className="contact-group">
                        <a href="https://api.whatsapp.com/send?phone=5521998090928">
                        <div className="contact-items">
                            <div className="icon">
                                <i className="fa-brands fa-whatsapp"></i>
                            </div>
                            <h4>Whatsapp</h4>
                            <h5>(21) 99809-0928</h5>
                        </div>
                        </a>

                        <a href="mailto:leonan.thomaz@gmail.com? Subject: Olá! Gostaria de falar com você!m&body=Conteúdo da mensagem">
                        <div className="contact-items">
                            <div className="icon">
                                <i class="fa-solid fa-at"></i>
                            </div>
                            <h4>E-mail</h4>
                            <h5>leonan.thomaz@gmail.com</h5>
                        </div>
                        </a>

                        <a href="https://goo.gl/maps/7DTPtgHYjsT3ZyEN9" >
                        <div className="contact-items">
                            <div className="icon">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <h4>Localização</h4>
                            <h5>Estrada do Tijuaçu<br/>
                                Alto da Boa Vista <br/>
                                Rio de Janeiro - RJ
                            </h5>
                        </div>
                        </a>

                    </div>
                </div>
            </div>
            
        </LocalMainStyled>
    )
}

export default Local;