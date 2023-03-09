import React, { Fragment, useContext, useEffect, useState } from "react";
import * as S from './SkillsStyles';
import Progressbar from '../../sharing/utils/progressbar_skills';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { 
  languageDataSkills,
  webSkills, 
  frameworksDataSkills, 
  othersDataSkills,
  databasesDataSkills,
  versionDataSkills
} from "../../sharing/db/dataSkills";
import { SkillsList } from "../../components/Navs/Skills";
import { ETitle } from "../../components/Elements/title";
import { PortfolioContext } from "../../sharing/context/portfolio";

export const Skills = () => {

    const { categorySkills } = useContext(PortfolioContext)

    const [selectedSkills, setSelectedSkills] = useState("languages");
    const [dataSkills, setDataSkills] = useState([]);
    const [ listSkills, setListSkills ] = useState([])

    useEffect(() => {
      switch (selectedSkills) {
          case "languages":
          setDataSkills(languageDataSkills);
          break;
          case "web":
          setDataSkills(webSkills);
          break;
          case "frameworks":
          setDataSkills(frameworksDataSkills);
          break;
          case "others":
          setDataSkills(othersDataSkills);
          break;
          case "databases":
          setDataSkills(databasesDataSkills);
          break;
          case "version":
          setDataSkills(versionDataSkills);
          break;
          default:
          setDataSkills(languageDataSkills);
      }
  }, [selectedSkills]);

    const handleFindSkills = (id) => {
      const item = dataSkills.filter(e => e.id === id)
      setListSkills(item)
    }

    return (
      <S.Container id="skills">
        <AnimationOnScroll animateIn="animate__backInLeft">
            <ETitle title={'Skills'} subtitle={'Habilidades que possuo'}/>
        </AnimationOnScroll>

        <S.NavbarSkills>
                {categorySkills.map((item, index) => (
                <SkillsList
                    id={item.id}
                    title={item.title}
                    active={selectedSkills === item.id}
                    setSelectedSkills={setSelectedSkills}
                    key={index}
                />
                ))}
            </S.NavbarSkills>

          <S.Wrapper>
            {dataSkills.map((item, key) => {
              return(
                <Fragment key={key}>
                  <S.Grid>
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
                        <Progressbar bgcolor={item.level >= 70 ? "#99ff66" : "orange"} progress={item.level} height={20}/>
                      </div>
                    </S.SkillsItems>
                  </S.Grid>
                </Fragment>
                )
            })} 
          </S.Wrapper>
      </S.Container>
    )
}
