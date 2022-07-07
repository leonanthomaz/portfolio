import React, { Fragment, useContext, useState } from "react";
import { SkillsMainStyled } from "../Skills/SkillsStyles";
import SkillsList from "../SkillsList";
import Progressbar from './Progressbar';
import { HooksContext } from "../../contexts/Hooks";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {BsArrowDown, BsBoxArrowUp} from 'react-icons/bs';

const Skills = () => {
    const { handleFindSkills, selectedSkills, setSelectedSkills, dataSkills } = useContext(HooksContext);
    const [ openList, setOpenList ] = useState(false)

    const handleOpenList = () => {
        setOpenList(!openList)
    }

    const categoria = [
        {
          id: "web",
          title: "WEB",
        },
        {
            id: "languages",
            title: "Linguagens",
        },
        {
          id: "frameworks",
          title: "Frameworks",
        },
        {
            id: "databases",
            title: "Databases",
        },
        {
            id: "version",
            title: "Versionamento",
        },
        {
            id: "tools",
            title: "Ferramentas",
        },
    ];

    return (
        <SkillsMainStyled >
                <div className="">
                    <div className="container">
                        <h2 class="title section-heading text-uppercase text-center">Skills</h2>
                        <AnimationOnScroll animateIn="animate__fadeInDown">
                            <h3 className="section-subheading text-center ">Minhas habilidades</h3>
                        </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeInUp">
                            <ul>
                                {categoria.map((item) => (
                                <SkillsList
                                    id={item.id}
                                    title={item.title}
                                    active={selectedSkills === item.id}
                                    setSelectedSkills={setSelectedSkills}
                                />
                                ))}
                            </ul>
                            </AnimationOnScroll>
                            <div className="skills">
                                {dataSkills.map((item, key) => {
                                    return(
                                    <Fragment key={key}>
                                            <div  className="skills-box">
                                                <div className="skills-header" onClick={()=>handleFindSkills(item.id)}>
                                                {/* <AnimationOnScroll animateIn="animate__fadeIn"> */}
                                                    <div className="skills-icon">
                                                        {item.icon}
                                                    </div>
                                                    <div className="skills-name">
                                                        <h3>{item.name}</h3>
                                                    </div>
                                                {/* </AnimationOnScroll> */}
                                                </div>
                                                
                                                <div className="skills-level">
                                                    <Progressbar bgcolor={item.level >= 70 ? "#99ff66" : "orange"} progress={item.level} height={20} />
                                                </div>
                                                <div className="arrows">
                                                { openList === false
                                                ? 
                                                <BsArrowDown onClick={handleOpenList}/> 
                                                : 
                                                <BsBoxArrowUp onClick={handleOpenList}/>
                                                }
                                                </div>
                                                <div className={openList ? "skills-description" : "hidden"}>
                                                    <ul>{item.description}</ul>
                                                </div>
                                            </div>
                                    </Fragment>
                                    )
                                })} 
                            </div>
                    </div>
                </div>
        </SkillsMainStyled>
    )
}

export default Skills;