import React, { useContext} from "react";
import { FooterMainStyled } from "./FooterStyles";
import Info from "../InfoConfig";
import { HooksContext } from "../../contexts/Hooks";

const Footer = () => {
    const { handleShowModalInfo } = useContext(HooksContext);

    return (
        <FooterMainStyled>
            <div className="container pt-4">
                <div className="mb-4">

                    <h2 className="text-center py-3">Contato</h2>
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

                    <div className="social-network">

                        <div className="address text-center p-5">
                            © 2022 Copyright: Leonan Thomaz <br />
                            Design by <a href="https://www.linkedin.com/in/leonan-thomaz-921027163/" target="_blank">@leonan.thomaz</a>
                        </div>

                        <div className="contact-items-group">

                        <a href="https://github.com/leonanthomaz/">
                        <div className="contact-items">
                            <div className="icon">
                                <i className="fa-brands fa-github"></i>
                            </div>
                            {/* <h4>Github</h4> */}
                            {/* <h5>@leonanthomaz/</h5> */}
                        </div>
                        </a>

                        <a href="https://www.linkedin.com/in/leonan-thomaz-921027163/">
                        <div className="contact-items">
                            <div className="icon">
                                <i className="fa-brands fa-linkedin"></i>
                            </div>
                            {/* <h4>Linkedin</h4> */}
                            {/* <h5>@leonan-thomaz-921027163/</h5> */}
                        </div>
                        </a>

                        <a href="mailto:leonan.thomaz@gmail.com? Subject: Olá! Gostaria de falar com você!m&body=Conteúdo da mensagem">
                        <div className="contact-items">
                            <div className="icon">
                                <i className="fab fa-google"></i>
                            </div>
                            {/* <h4>Google+</h4> */}
                            {/* <h5>@leonanthomaz</h5> */}
                        </div>
                        </a>
                        </div>

                    </div>
                    
                    {/* <div className="InfoPortfolio">
                        <i class="fa-solid fa-gear" onClick={handleShowModalInfo}></i>
                        <Info />
                    </div> */}

                </div>
            </div>
            
        </FooterMainStyled>
    )
}

export default Footer;