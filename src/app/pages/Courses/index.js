import React from "react";
import * as CS from "./CoursesStyles";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ETitle } from "../../components/Elements/title";
import { items } from '../../shared/db/dataCourses'

export const Courses = () => {
    
    return (
        <CS.Container>
            <ETitle title={'Cursos'} subtitle={'Um pouco sobre meus estudos'}/>
            <div className="courses-box">
                <CS.Courses>
                  <CS.Wrapper>
                    {items && items.map((item => {
                        return(
                            <CS.Item>
                                <CS.ItemImg>
                                    <img src={item.urlImg} alt=''/>
                                </CS.ItemImg>
                                <CS.ItemTitle>
                                    <h1>{item.title}</h1>
                                    <h3>{item.cardSubtitle}</h3>
                                </CS.ItemTitle>
                                <CS.ItemText>
                                 <p>{item.cardDetailedText}</p>
                                </CS.ItemText>
                                <CS.ItemURL>
                                    <a href={item.url}>Ver Certificado</a>
                                </CS.ItemURL>
                            </CS.Item>
                        )
                    }))}
                  </CS.Wrapper>
                </CS.Courses>                
            </div>
        </CS.Container>
    )
}
