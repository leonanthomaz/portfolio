import React, { useContext, useEffect, useRef, useState } from 'react';
import { PortfolioContext } from '../../sharing/context/portfolio';
import { useThemeContext } from '../../sharing/context/theme';
import * as M from './NavbarStyles';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

export const Navbar = () => {
    const { click, handleClick } = useContext(PortfolioContext);
    const { changeTheme } = useThemeContext();
    const [activeLink, setActiveLink] = useState('');
    const theme = localStorage.getItem('theme') || 'light';
    const sectionRefs = useRef({});

    // Função para manipular o clique em um link
    const handleLinkClick = (link) => {
        setActiveLink(link); // Define o link ativo
        handleClick(); // Fecha a navbar (se estiver aberta)
    };

    // Efeito para atualizar o link ativo ao rolar a página
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Mapeia a posição dos elementos na página usando refs
            Object.entries(sectionRefs.current).forEach(([id, ref]) => {
                const element = ref.current;
                console.log("REF: " + element)
                if (element) {
                    const { offsetTop, offsetHeight } = element.getBoundingClientRect();
                    if (scrollPosition >= offsetTop - 70 && scrollPosition < offsetTop + offsetHeight - 70) {
                        setActiveLink(id);
                    }
                }
                console.log("REF processado: " + element)

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
                        ref={sectionRefs.current['index']}
                    >
                        <a href="#index">Início</a>
                    </M.NavbarLi>
                    <M.NavbarLi
                        className={`nav-item ${activeLink === 'about' ? 'active' : ''}`}
                        role="menuItem"
                        onClick={() => handleLinkClick('about')}
                        ref={sectionRefs.current['about']}
                    >
                        <a href="#about">Sobre</a>
                    </M.NavbarLi>
                    <M.NavbarLi
                        className={`nav-item ${activeLink === 'experience' ? 'active' : ''}`}
                        role="menuItem"
                        onClick={() => handleLinkClick('experience')}
                        ref={sectionRefs.current['experience']}
                    >
                        <a href="#experience">Experiência</a>
                    </M.NavbarLi>
                    <M.NavbarLi
                        className={`nav-item ${activeLink === 'skills' ? 'active' : ''}`}
                        role="menuItem"
                        onClick={() => handleLinkClick('skills')}
                        ref={sectionRefs.current['skills']}
                    >
                        <a href="#skills">Skills</a>
                    </M.NavbarLi>
                    <M.NavbarLi
                        className={`nav-item ${activeLink === 'portfolio' ? 'active' : ''}`}
                        role="menuItem"
                        onClick={() => handleLinkClick('portfolio')}
                        ref={sectionRefs.current['portfolio']}
                    >
                        <a href="#portfolio">Portfólio</a>
                    </M.NavbarLi>
                    <M.NavbarLi
                        className={`nav-item ${activeLink === 'course' ? 'active' : ''}`}
                        role="menuItem"
                        onClick={() => handleLinkClick('course')}
                        ref={sectionRefs.current['course']}
                    >
                        <a href="#course">Cursos</a>
                    </M.NavbarLi>
                    <M.NavbarLi
                        className={`nav-item ${activeLink === 'contact' ? 'active' : ''}`}
                        role="menuItem"
                        onClick={() => handleLinkClick('contact')}
                        ref={sectionRefs.current['contact']}
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
                        <M.Active theme={theme}></M.Active>
                    </M.ThemeIcon>
                </M.ThemeContainer>
            </M.Right>
        </M.Container>
    );
};
