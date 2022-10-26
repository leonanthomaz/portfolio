
import React from "react";
import * as H from './HomeStyles'
import { Intro } from '../../components/Intro'
import { Sobre } from "../About";
import { Footer } from "../../components/Footer";
import { Top } from "../../components/Top";
import { Info } from "../../components/Info";
import { SkillsHome } from "../../components/SkillsHome";
// import { Github } from "../../components/Github";

export const Home = () => {
  return (
        <H.Container>
            <Intro/>
            <Sobre/>
            <SkillsHome/>
            {/* <Github/> */}
            <Top/>
            <Info title={'Me chame para um café!'} />
            <Footer/>
        </H.Container>
  );
}