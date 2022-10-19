import React, { useContext } from 'react'

import { PortfolioContext } from '../../sharing/context/portfolio';
import { useThemeContext } from '../../sharing/context/theme';
import * as M from './MenuStyles';
import { BiMenu } from "react-icons/bi";
import { BsMoonStars } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FaSun } from "react-icons/fa";

import { NavLink } from 'react-router-dom';

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

                

                <NavLink className={({isActive})=>{ return isActive ? 'ativo' : 'inativo' }} onClick={handleClick} to='/home' 
                ><M.MenuLi>Início</M.MenuLi></NavLink>

                <NavLink className={({isActive})=>{ return isActive ? 'ativo' : 'inativo' }} onClick={handleClick} to='/portfolio' 
                ><M.MenuLi>Portfólio</M.MenuLi></NavLink>

                <NavLink className={({isActive})=>{ return isActive ? 'ativo' : 'inativo' }} onClick={handleClick} to='/skills' 
                ><M.MenuLi>Skills</M.MenuLi></NavLink>

                <NavLink className={({isActive})=>{ return isActive ? 'ativo' : 'inativo' }} onClick={handleClick} to='/cursos' 
                ><M.MenuLi>Cursos</M.MenuLi></NavLink>

                <NavLink className={({isActive})=>{ return isActive ? 'ativo' : 'inativo' }} onClick={handleClick} to='/contato' 
                ><M.MenuLi>Contato</M.MenuLi></NavLink>

                {/* <M.MenuLink onClick={handleClick} to='/portfolio' style={({ isActive }) => { return { color: isActive ? 'red' : 'gray' }}} ><M.MenuLi>portfolio</M.MenuLi></M.MenuLink> */}
            
                {/* <M.MenuLink onClick={handleClick} ativo={({isActive})=>{ return isActive}} to='/' ><M.MenuLi>Início</M.MenuLi></M.MenuLink>
                <M.MenuLink onClick={handleClick} ativo={({isActive})=>{ return isActive}} to='/portfolio'><M.MenuLi>Portfolio</M.MenuLi></M.MenuLink>
                <M.MenuLink onClick={handleClick} ativo={({isActive})=>{ return isActive}} to='/skills'><M.MenuLi>Habilidades</M.MenuLi></M.MenuLink>
                <M.MenuLink onClick={handleClick} ativo={({isActive})=>{ return isActive}} to='/cursos'><M.MenuLi>Cursos</M.MenuLi></M.MenuLink>
                <M.MenuLink onClick={handleClick} ativo={({isActive})=>{ return isActive}} to='/contato'><M.MenuLi>Contato</M.MenuLi></M.MenuLink> */}
                
            </M.Menu>
            
            </M.Left>
            <M.Right>
                <M.ThemeContainer onClick={changeTheme} theme={theme}>
                    <M.ThemeIcon>{theme !== null && theme === 'light' ? <BsMoonStars/> : <FaSun/> }</M.ThemeIcon>
                </M.ThemeContainer>
            </M.Right>
        </M.Container>
    )
}
