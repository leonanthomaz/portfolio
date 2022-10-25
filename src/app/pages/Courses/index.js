import React from "react";
import * as CS from "./CoursesStyles";
import { items } from '../../sharing/db/dataCourses'
import { ETitle } from "../../components/Elements/title";
import { Footer } from "../../components/Footer";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Courses = () => {
    
    return (
        <CS.Container>
            <ETitle title={'Cursos'} subtitle={'Cursos e Bootcamps que já fiz'}/>
            <div className="courses-box">
                <CS.Courses>
                  <CS.Wrapper>
                    {items && items.map((item, index) => {
                        return(
                            <AnimationOnScroll animateIn="animate__fadeIn">
                            <CS.Item key={index}>
                                <CS.ItemImg>
                                    <img src={item.urlImg} alt=''/>
                                </CS.ItemImg>
                                <CS.ItemTitle>
                                    <h2>{item.title}</h2>
                                    <h3>{item.cardSubtitle}</h3>
                                </CS.ItemTitle>
                                <CS.ItemText>
                                 <p>{item.cardDetailedText}</p>
                                </CS.ItemText>
                                <CS.ItemURL>
                                    <a href={item.url}>Ver Certificado</a>
                                </CS.ItemURL>
                            </CS.Item>
                            </AnimationOnScroll>
                        )
                    })}
                  </CS.Wrapper>
                </CS.Courses>                
            </div>
            <Footer/>
        </CS.Container>
    )
}
