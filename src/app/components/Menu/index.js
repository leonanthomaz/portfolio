import React, { useContext, useEffect } from 'react'

import { PortfolioContext } from '../../sharing/context/portfolio';
import { useThemeContext } from '../../sharing/context/theme';
import * as M from './MenuStyles';
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

export const Menu = () => {
    const { click, handleClick } = useContext(PortfolioContext)
    const { changeTheme } = useThemeContext()
    const theme = localStorage.getItem('theme') || 'dark'

    return (
        <M.Container>
            <M.Left>

            <M.Icon click={click} theme={theme} aria-label={click ? "Fechar Menu" : "Abrir Menu" }  aria-hidden="false" aria-expanded={click ? true : false }>
                {click ? <AiOutlineClose onClick={handleClick}/> : <BiMenu onClick={handleClick}/> }
            </M.Icon>

            <M.Menu click={click} role="menu" aria-label="menu">

                <M.MenuLi className="nav-item" role="menuitem" aria-label="item 1 do menu" data-content="1" aria-haspopup="true"  onClick={handleClick}><a href="#inicio" aria-labelledby="guia inicio da pagina">Home</a></M.MenuLi>
                <M.MenuLi className="nav-item" role="menuitem" aria-label="item 2 do menu" data-content="2" aria-haspopup="true"  onClick={handleClick}><a href="#sobre" aria-labelledby="guia sobre mim">Sobre</a></M.MenuLi>
                <M.MenuLi className="nav-item" role="menuitem" aria-label="item 3 do menu" data-content="3" aria-haspopup="true"  onClick={handleClick}><a href="#skills" aria-labelledby="guia habilidades">Skills</a></M.MenuLi>
                <M.MenuLi className="nav-item" role="menuitem" aria-label="item 4 do menu" data-content="4" aria-haspopup="true"  onClick={handleClick}><a href="#portfolio" aria-labelledby="guia projetos do portfolio">Portfólio</a></M.MenuLi>
                <M.MenuLi className="nav-item" role="menuitem" aria-label="item 5 do menu" data-content="5" aria-haspopup="true"  onClick={handleClick}><a href="#contact" aria-labelledby="guia para contato">Contato</a></M.MenuLi>

            </M.Menu>
            
            </M.Left>
            <M.Right>
                <M.ThemeContainer onClick={changeTheme} theme={theme}>
                    {/* <M.ThemeIcon>{theme !== null && theme === 'light' ? <BsMoonStars/> : <FaSun/> }</M.ThemeIcon> */}
                    <M.ThemeIcon><M.Active theme={theme}></M.Active></M.ThemeIcon>
                </M.ThemeContainer>
            </M.Right>
        </M.Container>
    )
}
