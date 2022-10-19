
import React from "react";
import { Navbar } from "../../components/Menu";
import * as H from './HomeStyles'
import { Intro } from '../../components/Intro'
import { Sobre } from "../Sobre";
import { Footer } from "../../components/Footer";
import { Tour } from "../../components/Tour";
import { Info } from "../../components/Info";

export const Home = () => {
  return (
        <H.Container>
            <Intro/>
            {/* <H.Parallax/> */}
            <Sobre/>
            <Tour/>
            <Info />
            <Footer/>
        </H.Container>
  );
}