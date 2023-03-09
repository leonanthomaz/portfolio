import React, { useContext } from 'react'

import { PortfolioContext } from '../../sharing/context/portfolio';
import { useThemeContext } from '../../sharing/context/theme';
import * as M from './NavbarStyles';
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
    const { click, handleClick } = useContext(PortfolioContext)
    const { changeTheme } = useThemeContext()
    const theme = localStorage.getItem('theme') || 'dark'
  
    return (
        <M.Container>
            <M.Left>

                <M.Icon click={click} theme={theme} tabIndex="0" aria-label={click ? "Fechar Navbar" : "Abrir Navbar" } aria-expanded={click ? true : false }>
                    {click ? <AiOutlineClose onClick={handleClick}/> : <BiMenu onClick={handleClick}/> }
                </M.Icon>

                <M.Navbar click={click} role="menu" aria-labelledby="Navbar principal" >

                    <M.NavbarLi className="nav-item" role="menuItem" onClick={handleClick}>
                        <a href="#index" aria-labelledby="guia inicio da pagina" aria-controls={click ? true : false }>Início</a>
                    </M.NavbarLi>

                    <M.NavbarLi className="nav-item" role="menuItem" onClick={handleClick}>
                        <a href="#about" aria-labelledby="guia About mim"  aria-controls={click ? true : false }>Sobre</a>
                    </M.NavbarLi>

                    <M.NavbarLi className="nav-item" role="menuItem" onClick={handleClick}>
                        <a href="#skills"  aria-labelledby="guia habilidades" aria-haspopup={true} aria-expanded={click ? true : false }>Skills</a>
                    </M.NavbarLi>

                    <M.NavbarLi className="nav-item" role="menuItem" onClick={handleClick}>
                        <a href="#portfolio"  aria-labelledby="guia projetos do portfolio" aria-haspopup={true} aria-expanded={click ? true : false }>Portfólio</a>
                    </M.NavbarLi>

                    <M.NavbarLi className="nav-item" role="menuItem" onClick={handleClick}>
                        <a href="#contact" aria-labelledby="guia para contato" aria-haspopup={true} aria-expanded={click ? true : false }>Contato</a>
                    </M.NavbarLi>

                </M.Navbar>
            
            </M.Left>
            <M.Right>
                <M.ThemeContainer role="tema" aria-label="controle de tema" tabIndex="0" onClick={changeTheme} theme={theme}>
                    <M.ThemeIcon role="temaItem" aria-controls='true'><M.Active theme={theme}></M.Active></M.ThemeIcon>
                </M.ThemeContainer>
            </M.Right>
        </M.Container>
    )
}
