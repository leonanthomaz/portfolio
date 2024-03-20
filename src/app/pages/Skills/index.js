import React from "react";
import * as S from './SkillsStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ETitle } from "../../components/Elements/title";
import { 
  DiJsBadge,
  DiCss3,
  DiGit,
  DiReact,
  DiGithubBadge,
  DiNpm,
  DiVisualstudio,
  DiHtml5,
  DiMysql,
  DiPostgresql,
  DiMsqlServer,
  DiJava,
  DiDocker,
  
} from 'react-icons/di';
import { SiSpring, SiApachemaven } from "react-icons/si";
import { GiTortoise } from "react-icons/gi";
import { LiaJava } from "react-icons/lia";

export const Skills = () => {

    return (
      <S.Container id="skills">
        <AnimationOnScroll animateIn="animate__backInLeft">
            <ETitle title={'Skills Teste'} subtitle={'Habilidades que possuo'}/>
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
                <S.Titulo>Spring</S.Titulo>
                <S.Icon><SiSpring/></S.Icon>
                </S.Item>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp">
                <S.Item>
                <S.Titulo>Maven</S.Titulo>
                <S.Icon><SiApachemaven/></S.Icon>
                </S.Item>
            </AnimationOnScroll> 
            
            <AnimationOnScroll animateIn="animate__fadeInUp">
                <S.Item>
                <S.Titulo>HTML</S.Titulo>
                <S.Icon><DiHtml5/></S.Icon>
                </S.Item>
            </AnimationOnScroll> 
            <AnimationOnScroll animateIn="animate__fadeInUp">
                <S.Item>
                <S.Titulo>CSS</S.Titulo>
                  <S.Icon><DiCss3/></S.Icon>
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
                <S.Titulo>ReactJS</S.Titulo>
                <S.Icon><DiReact/></S.Icon>
                </S.Item>
            </AnimationOnScroll> 

            <AnimationOnScroll animateIn="animate__fadeInUp">
                <S.Item>
                <S.Titulo>GIT</S.Titulo>
                <S.Icon><DiGit/></S.Icon>
                </S.Item>
            </AnimationOnScroll> 
            <AnimationOnScroll animateIn="animate__fadeInUp">
                <S.Item>
                <S.Titulo>Github</S.Titulo>
                <S.Icon><DiGithubBadge/></S.Icon>
                </S.Item>
            </AnimationOnScroll> 
            <AnimationOnScroll animateIn="animate__fadeInUp">
                <S.Item>
                <S.Titulo>NPM</S.Titulo>
                <S.Icon><DiNpm/></S.Icon>
                </S.Item>
            </AnimationOnScroll> 
            <AnimationOnScroll animateIn="animate__fadeInUp">
                <S.Item>
                <S.Titulo>VSCode</S.Titulo>
                <S.Icon><DiVisualstudio/></S.Icon>
                </S.Item>
            </AnimationOnScroll> 
           
           
            <AnimationOnScroll animateIn="animate__fadeInUp">
                <S.Item>
                <S.Titulo>SQL Server</S.Titulo>
                <S.Icon><DiMsqlServer/></S.Icon>
                </S.Item>
            </AnimationOnScroll> 
            <AnimationOnScroll animateIn="animate__fadeInUp">
                <S.Item>
                <S.Titulo>Postgres</S.Titulo>
                <S.Icon><DiPostgresql/></S.Icon>
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
            
            <AnimationOnScroll animateIn="animate__fadeInUp">
                <S.Item>
                <S.Titulo>Tortoise</S.Titulo>
                <S.Icon><GiTortoise/></S.Icon>
                </S.Item>
            </AnimationOnScroll> 
    
          </S.Wrapper>
      </S.Container>
    )
}
