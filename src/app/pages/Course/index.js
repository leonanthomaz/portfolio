import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { WorkIcon } from './WorkIcon';
import * as C from './CourseStyles'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ETitle } from "../../components/Elements/title";

export const Course = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.vertical-timeline-element');
      elements.forEach(element => {
        const bounding = element.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          element.classList.add('active'); // Adiciona a classe 'active' apenas aos elementos visíveis na janela
        } else {
          element.classList.remove('active'); // Remove a classe 'active' dos elementos que não estão visíveis na janela
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Chama a função uma vez para garantir que os elementos visíveis recebam o estilo inicial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Apenas executa a lógica uma vez, após a montagem do componente

  return (
    <C.Container id="course">
      <AnimationOnScroll animateIn="animate__backInLeft">
            <ETitle title={'Cursos'} subtitle={'Habilidades que possuo'}/>
        </AnimationOnScroll>
      <VerticalTimeline>
        <VerticalTimelineElement
          id="1" // Identificador único para o primeiro elemento
          className="vertical-timeline-element--work"
          date="2011 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Work Experience</h3>
          <h4 className="vertical-timeline-element-subtitle">Company Name</h4>
          <p>
            Job Description
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          id="2" // Identificador único para o segundo elemento
          className="vertical-timeline-element--work"
          date="2008 - 2011"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Work Experience</h3>
          <h4 className="vertical-timeline-element-subtitle">Company Name</h4>
          <p>
            Job Description
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          id="3" // Identificador único para o terceiro elemento
          className="vertical-timeline-element--work"
          date="2005 - 2008"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Work Experience</h3>
          <h4 className="vertical-timeline-element-subtitle">Company Name</h4>
          <p>
            Job Description
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          id="4" // Identificador único para o quarto elemento
          className="vertical-timeline-element--work"
          date="2002 - 2005"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Work Experience</h3>
          <h4 className="vertical-timeline-element-subtitle">Company Name</h4>
          <p>
            Job Description
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </C.Container>
  );
};