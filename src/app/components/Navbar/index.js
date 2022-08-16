import React, { useContext } from 'react'
import { PortfolioContext } from '../../shared/context/portfolio';
import { useThemeContext } from '../../shared/context/theme';
import * as N from './NavbarStyles';
import { GrClose } from "react-icons/gr";
import { BiMenu } from "react-icons/bi";
import { BsMoonStars, BsSunFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FaSun } from "react-icons/fa";


export const Navbar = () => {
    const { click, handleClick } = useContext(PortfolioContext)
    const { changeTheme } = useThemeContext()
    const theme = localStorage.getItem('theme') || null

    return (
        <N.Container>

           <N.Icon click={click} theme={theme}>
            {click ? <AiOutlineClose style={{
                cursor: 'pointer'
            }}
            onClick={handleClick} 
             /> : <BiMenu onClick={handleClick} style={{
                cursor: 'pointer'
            }}/> }
           </N.Icon>

           <N.Menu click={click}>
            <N.MenuLink href="#"><N.MenuLi onClick={handleClick}>Início</N.MenuLi></N.MenuLink>
            <N.MenuLink href="#about"><N.MenuLi onClick={handleClick}>Sobre</N.MenuLi></N.MenuLink>
            <N.MenuLink href="#skills"><N.MenuLi onClick={handleClick}>Skills</N.MenuLi></N.MenuLink>
            <N.MenuLink href="#portfolio"><N.MenuLi onClick={handleClick}>Portfólio</N.MenuLi></N.MenuLink>
            <N.MenuLink href="#courses"><N.MenuLi onClick={handleClick}>Cursos</N.MenuLi></N.MenuLink>
            <N.MenuLink href="#contact"><N.MenuLi onClick={handleClick}>Contato</N.MenuLi></N.MenuLink>
           </N.Menu>

            <N.Theme onClick={changeTheme} theme={theme}>
                <N.ThemeIcon>{theme !== null && theme === 'dark' ? <BsMoonStars/> : <FaSun/> }</N.ThemeIcon>
            </N.Theme>

        </N.Container>
    )
}
