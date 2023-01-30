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
                <M.Icon click={click} theme={theme}>
                {click ? <AiOutlineClose style={{
                    cursor: 'pointer'
                }}
                onClick={handleClick} 
                /> : <BiMenu onClick={handleClick} style={{
                    cursor: 'pointer'
                }}/> }
            </M.Icon>

            <M.Menu click={click}>

                <M.MenuLi className="nav-item" onClick={handleClick}><a href="#">Home</a></M.MenuLi>
                <M.MenuLi className="nav-item" onClick={handleClick}><a href="#sobre">Sobre</a></M.MenuLi>
                <M.MenuLi className="nav-item" onClick={handleClick}><a href="#skills">Skills</a></M.MenuLi>
                <M.MenuLi className="nav-item" onClick={handleClick}><a href="#portfolio">Portfólio</a></M.MenuLi>
                <M.MenuLi className="nav-item" onClick={handleClick}><a href="#contact">Contato</a></M.MenuLi>

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
