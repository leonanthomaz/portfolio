import { GlobalStyles } from "./shared/styles/GlobalStyles";

import { Navbar } from "./components/Navbar";

import { Intro } from "./pages/Intro";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Portfolio } from "./pages/Portfolio";
import { Courses } from "./pages/Courses";
import { Contact } from "./pages/Contact";
import { Info } from "./components/Info";

import { Footer } from './components/Footer';
import { useContext } from "react";
import { PortfolioContext } from "./shared/context/portfolio";


const App = () => {
  const { closeNavbar } = useContext(PortfolioContext)
  
  return (
    <div className="App" onClick={closeNavbar}>
      <GlobalStyles/>
      <Navbar/>
      <section >
        <div id="intro">
          <Intro/>
        </div>
        <div id="about">
          <About/>
        </div>
        <div id="skills">
          <Skills/>
        </div>
        <div id="portfolio">
          <Portfolio/>
        </div>
        <div id="courses">
          <Courses/>
        </div>
        <div id="contact">
          <Contact/>
          <Info/>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
