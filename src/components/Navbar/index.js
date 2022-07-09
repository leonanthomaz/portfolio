import React, { useState, useContext } from "react";
import { NavbarMainStyled } from "./NavbarStyles";
import { useThemeContext } from '../../contexts/Theme';
import { HooksContext } from '../../contexts/Hooks';

const Navbar = () => {

    const { click, handleClick } = useContext(HooksContext);
    const { changeTheme, isDarkTheme } = useThemeContext();

    const [ active, setActive ] = useState(false)
    const handleActiveTheme = () => {
        setActive(!active)
    }


    return (
        <NavbarMainStyled>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <div className={click ? "nav-menu active" : "nav-menu"}>
              <ul className="">
                <li className="nav-item" onClick={handleClick}><a href="#">Home</a></li>
                <li className="nav-item" onClick={handleClick}><a href="#sobre">Sobre</a></li>
                <li className="nav-item" onClick={handleClick}><a href="#skills">Skills</a></li>
                <li className="nav-item" onClick={handleClick}><a href="#portfolio">Portfólio</a></li>
                <li className="nav-item" onClick={handleClick}><a href="#courses">Cursos</a></li>
                <li className="nav-item" onClick={handleClick}><a href="#contact">Contato</a></li>
              </ul>
            </div>
            <div className="nav-theme-box" onClick={changeTheme}>
                <div className="" >

                    <span className={active ? "" : "active"} >
                        <i class={isDarkTheme === 'dark' ? "fa-solid fa-moon" : "fa-regular fa-sun"} onClick={handleActiveTheme}></i>
                        <i class={isDarkTheme === 'dark' ? "fa-regular fa-sun" : "fa-solid fa-moon"} onClick={handleActiveTheme}></i>
                    </span>
                    
                    {/* <span className={active ? "" : "active"} >
                        <i class={isDarkTheme === 'light' ? "fa-solid fa-moon" : "fa-solid fa-sun"} onClick={handleActiveTheme}></i>
                    </span>
                    <span className={active ? "active" : ""} >
                        <i class={isDarkTheme === 'dark' ? "fa-solid fa-sun" : "fa-solid fa-moon"} onClick={handleActiveTheme}></i>
                    </span> */}
                </div>
            </div>
        </NavbarMainStyled>
    )
}

export default Navbar;