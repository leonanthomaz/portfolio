import React from "react";
import { CursosMainStyled } from "./CursosStyles";
import { Chrono } from "react-chrono";
import { items } from "../../db/dataCourses";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Cursos = () => {
    
    return(
       <CursosMainStyled>
        <div className="">
            <div className="container text-center">
                <h2 class="title section-heading text-uppercase text-center">Cursos</h2>
                <AnimationOnScroll animateIn="animate__fadeInDown">
                  <h3 className="section-subheading ">Meus estudos</h3>
                </AnimationOnScroll>
                <div className="courses-box">
                    <Chrono items={items}
                      theme={{
                        primary: '#292929',
                        secondary: '#ffd900',
                        cardBgColor: '#ecececea',
                        cardForeColor: 'black',
                        titleColor: '#ffd900',
                        titleColorActive: '#292929',
                      }}
                      fontSizes={{
                        // cardSubtitle: '1rem',
                        // cardText: '1rem',
                        // cardTitle: '1rem',
                        title: '1.5rem',
                      }}
                     mode="VERTICAL_ALTERNATING"
                     cardHeight={150}
                     scrollable={{ scrollbar: true }}
                    />
                </div>
            </div>
        </div>
       </CursosMainStyled>
    )
}

export default Cursos;