import React, { useContext, useEffect, useRef, useState } from 'react';
import { PortfolioContext } from '../../sharing/context/portfolio';
import { useThemeContext } from '../../sharing/context/theme';
import * as M from './NavbarStyles';
import { BiMenu, BiSun, BiMoon } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

export const Navbar = () => {
    const { click, handleClick } = useContext(PortfolioContext);
    const { changeTheme } = useThemeContext();
    const [activeLink, setActiveLink] = useState(null);
    const theme = localStorage.getItem('theme') || 'light';
    const sectionRefs = useRef({});

    // Função para manipular o clique em um link
    const handleLinkClick = (link) => {
        setActiveLink(link); // Define o link ativo
        handleClick(); // Fecha a navbar (se estiver aberta)
    };

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const windowTop = window.scrollY;
            const windowBottom = windowTop + windowHeight;
    
            Object.keys(sectionRefs.current).forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    const { top, bottom } = element.getBoundingClientRect();
                    const elementTop = top + windowTop;
                    const elementBottom = bottom + windowTop;
    
                    console.log("Element ID:", id);
                    console.log("Element Top:", elementTop);
                    console.log("Element Bottom:", elementBottom);
                    console.log("Window Top:", windowTop);
                    console.log("Window Bottom:", windowBottom);
    
                    // Verifica se pelo menos uma parte do elemento está visível na janela de visualização
                    if ((elementTop === 0 || elementTop <= windowBottom - windowHeight/2 && elementBottom >= windowTop + windowHeight/2) || (id === 'index' && elementTop <= windowTop)) {
                        console.log("Elemento completamente visível:", id);
                        setActiveLink(id);
                    } else {
                        console.log("Elemento não completamente visível:", id);
                    }
                } else {
                    console.log("Elemento não encontrado:", id);
                }
            });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    
    return (
        <M.Container>
            <M.Left>
                <M.Icon
                    click={click}
                    theme={theme}
                    tabIndex="0"
                    aria-label={click ? 'Fechar Navbar' : 'Abrir Navbar'}
                    aria-expanded={click ? true : false}
                >
                    {click ? <AiOutlineClose onClick={handleClick} /> : <BiMenu onClick={handleClick} />}
                </M.Icon>

                <M.Navbar click={click} role="menu" aria-labelledby="Navbar principal">
                    <M.NavbarLi
                        className={`nav-item ${activeLink === 'index' ? 'active' : ''}`}
                        role="menuItem"
                        onClick={() => handleLinkClick('index')}
                        ref={(el) => sectionRefs.current['index'] = el}
                    >
                        <a href="#index">Início</a>
                    </M.NavbarLi>
                    <M.NavbarLi
                        className={`nav-item ${activeLink === 'about' ? 'active' : ''}`}
                        role="menuItem"
                        onClick={() => handleLinkClick('about')}
                        ref={(el) => sectionRefs.current['about'] = el}
                    >
                        <a href="#about">Sobre</a>
                    </M.NavbarLi>
                    <M.NavbarLi
                        className={`nav-item ${activeLink === 'experience' ? 'active' : ''}`}
                        role="menuItem"
                        onClick={() => handleLinkClick('experience')}
                        ref={(el) => sectionRefs.current['experience'] = el}
                    >
                        <a href="#experience">Experiência</a>
                    </M.NavbarLi>
                    <M.NavbarLi
                        className={`nav-item ${activeLink === 'skills' ? 'active' : ''}`}
                        role="menuItem"
                        onClick={() => handleLinkClick('skills')}
                        ref={(el) => sectionRefs.current['skills'] = el}
                    >
                        <a href="#skills">Skills</a>
                    </M.NavbarLi>
                    <M.NavbarLi
                        className={`nav-item ${activeLink === 'portfolio' ? 'active' : ''}`}
                        role="menuItem"
                        onClick={() => handleLinkClick('portfolio')}
                        ref={(el) => sectionRefs.current['portfolio'] = el}
                    >
                        <a href="#portfolio">Portfólio</a>
                    </M.NavbarLi>
                    <M.NavbarLi
                        className={`nav-item ${activeLink === 'course' ? 'active' : ''}`}
                        role="menuItem"
                        onClick={() => handleLinkClick('course')}
                        ref={(el) => sectionRefs.current['course'] = el}
                    >
                        <a href="#course">Cursos</a>
                    </M.NavbarLi>
                    <M.NavbarLi
                        className={`nav-item ${activeLink === 'contact' ? 'active' : ''}`}
                        role="menuItem"
                        onClick={() => handleLinkClick('contact')}
                        ref={(el) => sectionRefs.current['contact'] = el}
                    >
                        <a href="#contact">Contato</a>
                    </M.NavbarLi>
                </M.Navbar>
            </M.Left>
            <M.Right>
                <M.ThemeContainer
                    role="tema"
                    aria-label="controle de tema"
                    tabIndex="0"
                    onClick={changeTheme}
                    theme={theme}
                >
                    <M.ThemeIcon role="temaItem">
                        {theme === 'dark' ? <BiSun /> : <BiMoon />}
                    </M.ThemeIcon>
                </M.ThemeContainer>
            </M.Right>
            </M.Container>
    );
};
