
import React from "react";
import * as H from './HomeStyles'
import { Intro } from '../../components/Intro'
import { Sobre } from "../About";
import { Footer } from "../../components/Footer";
import { Top } from "../../components/Top";
import { Info } from "../../components/Info";
import { SkillsHome } from "../../components/SkillsHome";

export const Home = () => {
  return (
        <H.Container>
            <Intro/>
            <Sobre/>
            <SkillsHome/>
            <Top/>
            <Info />
            <Footer/>
        </H.Container>
  );
}