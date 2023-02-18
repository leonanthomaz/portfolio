import React, { useContext } from 'react'

import { PortfolioContext } from '../../sharing/context/portfolio';
import { useThemeContext } from '../../sharing/context/theme';
import * as M from './MenuStyles';
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export const Menu = () => {
    const { click, handleClick } = useContext(PortfolioContext)
    const { changeTheme } = useThemeContext()
    const theme = localStorage.getItem('theme') || 'dark'
  
    return (
        <M.Container>
            <M.Left>

                <M.Icon click={click} theme={theme} tabIndex="0" aria-label={click ? "Fechar Menu" : "Abrir Menu" } aria-expanded={click ? true : false }>
                    {click ? <AiOutlineClose onClick={handleClick}/> : <BiMenu onClick={handleClick}/> }
                </M.Icon>

                <M.Menu click={click} role="menu" aria-labelledby="menu principal" >

                    <M.MenuLi className="nav-item" role="menuitem" onClick={handleClick}>
                        <a href="#inicio" aria-labelledby="guia inicio da pagina" aria-controls={click ? true : false }>Home</a>
                    </M.MenuLi>

                    <M.MenuLi className="nav-item" role="menuitem" onClick={handleClick}>
                        <a href="#sobre" aria-labelledby="guia sobre mim"  aria-controls={click ? true : false }>Sobre</a>
                    </M.MenuLi>

                    <M.MenuLi className="nav-item" role="menuitem" onClick={handleClick}>
                        <a href="#skills"  aria-labelledby="guia habilidades" aria-haspopup={true} aria-expanded={click ? true : false }>Skills</a>
                    </M.MenuLi>

                    <M.MenuLi className="nav-item" role="menuitem" onClick={handleClick}>
                        <a href="#portfolio"  aria-labelledby="guia projetos do portfolio" aria-haspopup={true} aria-expanded={click ? true : false }>Portfólio</a>
                    </M.MenuLi>

                    <M.MenuLi className="nav-item" role="menuitem" onClick={handleClick}>
                        <a href="#contact" aria-labelledby="guia para contato" aria-haspopup={true} aria-expanded={click ? true : false }>Contato</a>
                    </M.MenuLi>

                </M.Menu>
            
            </M.Left>
            <M.Right>
                <M.ThemeContainer role="tema" aria-label="controle de tema" tabIndex="0" onClick={changeTheme} theme={theme}>
                    {/* <M.ThemeIcon>{theme !== null && theme === 'light' ? <BsMoonStars/> : <FaSun/> }</M.ThemeIcon> */}
                    <M.ThemeIcon role="temaItem" arua-aria-controls='true'><M.Active theme={theme}></M.Active></M.ThemeIcon>
                </M.ThemeContainer>
            </M.Right>
        </M.Container>
    )
}
