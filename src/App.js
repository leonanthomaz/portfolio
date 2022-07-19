import React, { Fragment, useContext} from "react";
import { HooksContext } from "./contexts/Hooks";

import GlobalStyle from './GlobalStyles';

import Navbar from './components/Navbar';
import Local from "./components/Local";
import Footer from "./components/Footer";
import Loader from './components/Spinner';

import Intro from "./pages/Intro";
import Sobre from "./pages/Sobre";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Cursos from "./pages/Cursos";
import Contato from "./pages/Contato";

const App = () => {
  const { loading } = useContext(HooksContext)

  return (
    <div className="App">
      { loading ? <Loader/> :
      <Fragment>
        <GlobalStyle/>
        <Navbar />
          <section className="sections">
            <Intro />
            <div id="sobre">
              <Sobre  />
            </div>
            <div id="skills">
              <Skills />
            </div>
            <div id="portfolio">
              <Portfolio />
            </div>
            <div id="courses">
              <Cursos />
            </div>
            <div id="contact">
              <Contato />
            </div>
          </section>
          <Local />
          <Footer />
      </Fragment>
      }
    </div>
  );
}

export default App;
