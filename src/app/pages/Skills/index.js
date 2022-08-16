import React, { Fragment, useContext, useEffect, useState } from "react";
import * as S from './SkillsStyles';
// import SkillsList from "../SkillsList";
import Progressbar from '../../shared/utils/progressbar_skills';
// import { HooksContext } from "../../contexts/Hooks";
import { category } from '../../shared/utils/category_skills';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {BsArrowDown, BsArrowUp} from 'react-icons/bs';
import { webSkills, 
  frameworksDataSkills, 
  toolsDataSkills,
  databasesDataSkills,
  languageDataSkills,
  versionDataSkills
} from "../../shared/db/dataSkills";
import { SkillsList } from "../../components/Cards/CardSkills";
import { ETitle } from "../../components/Elements/title";

export const Skills = () => {
    const [ openList, setOpenList ] = useState(false)

    const [selectedSkills, setSelectedSkills] = useState("web");
    const [dataSkills, setDataSkills] = useState([]);
    const [ listSkills, setListSkills ] = useState([])

    const handleOpenList = () => {
        setOpenList(!openList)
    }

    useEffect(() => {
      switch (selectedSkills) {
          case "web":
          setDataSkills(webSkills);
          break;
          case "frameworks":
          setDataSkills(frameworksDataSkills);
          break;
          case "tools":
          setDataSkills(toolsDataSkills);
          break;
          case "databases":
          setDataSkills(databasesDataSkills);
          break;
          case "languages":
          setDataSkills(languageDataSkills);
          break;
          case "version":
          setDataSkills(versionDataSkills);
          break;
          default:
          setDataSkills(webSkills);
      }
  }, [selectedSkills]);

    const handleFindSkills = (id) => {
      // console.log(id)
      const item = dataSkills.filter(e => e.id === id)
      setListSkills(item)
  }

    return (
      <S.Container>
          <ETitle title={'Skills'} subtitle={'Minhas habilidades'}/>
          <AnimationOnScroll animateIn="animate__fadeInUp">
          
          <S.MenuSkillsGroup>
            <S.MenuSkills>
                {category.map((item) => (
                <SkillsList
                    id={item.id}
                    title={item.title}
                    active={selectedSkills === item.id}
                    setSelectedSkills={setSelectedSkills}
                />
                ))}
            </S.MenuSkills>
          </S.MenuSkillsGroup>

          </AnimationOnScroll>

          <S.Wrapper>
            {dataSkills.map((item, key) => {
              return(
                <Fragment key={key}>
                  <S.Grid>
                  <AnimationOnScroll animateIn="animate__fadeIn">
                    <S.SkillsItems onClick={()=>handleFindSkills(item.id)}>
                      
                        <div className="skills-header">
                          <div className="skills-icon">
                                {item.icon}
                            </div>
                            <div className="skills-name">
                                <h3>{item.name}</h3>
                          </div>
                        </div>
                          
                      
                      <div className="skills-level">
                        <Progressbar bgcolor={item.level >= 70 ? "#99ff66" : "orange"} progress={item.level} height={20} />
                      </div>
                    </S.SkillsItems>
                  </AnimationOnScroll>
                  </S.Grid>
                </Fragment>
                )
            })} 
          </S.Wrapper>
      </S.Container>
    )
}
