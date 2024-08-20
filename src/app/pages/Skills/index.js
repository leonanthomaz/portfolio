import React from "react";
import * as S from './SkillsStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ETitle } from "../../components/Elements/title";
import { 
  DiJsBadge,
  DiReact,
  DiMysql,
  DiDocker,
  DiPython,
//   DiCss3,
//   DiGit,
//   DiGithubBadge,
//   DiVisualstudio,
//   DiHtml5,
//   DiPostgresql,
//   DiMsqlServer,
//   DiPhp,
  
} from 'react-icons/di';
import { SiSpring } from "react-icons/si";
import { LiaJava } from "react-icons/lia";
import { TbBrandReactNative } from "react-icons/tb";
// import { Github } from "../../components/Github";


export const Skills = () => {

    return (
      <S.Container id="skills">
        <AnimationOnScroll animateIn="animate__backInLeft">
            <ETitle title={'Skills'} subtitle={'Habilidades que possuo'}/>
        </AnimationOnScroll>

          <S.Wrapper>
                <AnimationOnScroll animateIn="animate__fadeInUp">
                    <S.Item>
                    <S.Titulo>Java</S.Titulo>
                    <S.Icon>
                    <LiaJava/>
                    </S.Icon>
                    </S.Item>
                </AnimationOnScroll> 

                <AnimationOnScroll animateIn="animate__fadeInUp">
                    <S.Item>
                    <S.Titulo>Javascript</S.Titulo>
                    <S.Icon><DiJsBadge/></S.Icon>
                    </S.Item>
                </AnimationOnScroll> 

                <AnimationOnScroll animateIn="animate__fadeInUp">
                    <S.Item>
                    <S.Titulo>Python</S.Titulo>
                    <S.Icon><DiPython /></S.Icon>
                    </S.Item>
                </AnimationOnScroll> 

                <AnimationOnScroll animateIn="animate__fadeInUp">
                    <S.Item>
                    <S.Titulo>Spring</S.Titulo>
                    <S.Icon><SiSpring/></S.Icon>
                    </S.Item>
                </AnimationOnScroll>
              
                <AnimationOnScroll animateIn="animate__fadeInUp">
                    <S.Item>
                    <S.Titulo>ReactJS</S.Titulo>
                    <S.Icon><DiReact/></S.Icon>
                    </S.Item>
                </AnimationOnScroll> 

                <AnimationOnScroll animateIn="animate__fadeInUp">
                    <S.Item>
                    <S.Titulo>React Native</S.Titulo>
                    <S.Icon><TbBrandReactNative/></S.Icon>
                    </S.Item>
                </AnimationOnScroll> 
                
                <AnimationOnScroll animateIn="animate__fadeInUp">
                    <S.Item>
                    <S.Titulo>MySQL</S.Titulo>
                    <S.Icon><DiMysql/></S.Icon>
                    </S.Item>
                </AnimationOnScroll> 
                <AnimationOnScroll animateIn="animate__fadeInUp">
                    <S.Item>
                    <S.Titulo>Docker</S.Titulo>
                    <S.Icon><DiDocker/></S.Icon>
                    </S.Item>
                </AnimationOnScroll> 
            {/* <AnimationOnScroll animateIn="animate__fadeInUp">
                <S.Item>
                <S.Titulo>SQL Server</S.Titulo>
                <S.Icon><DiMsqlServer/></S.Icon>
                </S.Item>
            </AnimationOnScroll>  */}
            {/* <AnimationOnScroll animateIn="animate__fadeInUp">
                <S.Item>
                <S.Titulo>Maven</S.Titulo>
                <S.Icon><SiApachemaven/></S.Icon>
                </S.Item>
            </AnimationOnScroll>  */}
            {/* <AnimationOnScroll animateIn="animate__fadeInUp">
                <S.Item>
                <S.Titulo>HTML</S.Titulo>
                <S.Icon><DiHtml5/></S.Icon>
                </S.Item>
            </AnimationOnScroll>  */}
            {/* <AnimationOnScroll animateIn="animate__fadeInUp">
                <S.Item>
                <S.Titulo>CSS</S.Titulo>
                  <S.Icon><DiCss3/></S.Icon>
                </S.Item>
            </AnimationOnScroll>  */}
            {/* <AnimationOnScroll animateIn="animate__fadeInUp">
                <S.Item>
                <S.Titulo>PHP</S.Titulo>
                <S.Icon><DiPhp/></S.Icon>
                </S.Item>
            </AnimationOnScroll> */}
            {/* <AnimationOnScroll animateIn="animate__fadeInUp">
                <S.Item>
                <S.Titulo>GIT</S.Titulo>
                <S.Icon><DiGit/></S.Icon>
                </S.Item>
            </AnimationOnScroll>  */}
            {/* <AnimationOnScroll animateIn="animate__fadeInUp">
                <S.Item>
                <S.Titulo>Github</S.Titulo>
                <S.Icon><DiGithubBadge/></S.Icon>
                </S.Item>
            </AnimationOnScroll>  */}
            {/* <AnimationOnScroll animateIn="animate__fadeInUp">
                <S.Item>
                <S.Titulo>VSCode</S.Titulo>
                <S.Icon><DiVisualstudio/></S.Icon>
                </S.Item>
            </AnimationOnScroll>  */}
           
           

            {/* <AnimationOnScroll animateIn="animate__fadeInUp">
                <S.Item>
                <S.Titulo>Postgres</S.Titulo>
                <S.Icon><DiPostgresql/></S.Icon>
                </S.Item>
            </AnimationOnScroll>  */}

        
          </S.Wrapper>
            <div className="github">
                <div className="container">
                    {/* <Github/> */}
                </div>
            </div>
      </S.Container>
    )
}
