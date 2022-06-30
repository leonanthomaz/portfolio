import React, { Fragment, useContext} from "react";
import { HooksContext } from "./contexts/Hooks";

import GlobalStyle from './globalStyles';

import Navbar from './components/Navbar';
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
            <Sobre />
            <Skills />
            <Portfolio />
            <Cursos />
            <Contato />
            <Footer />
          </section>
      </Fragment>
      }
    </div>
  );
}

export default App;
