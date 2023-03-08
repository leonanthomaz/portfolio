
import React, { useContext, Fragment } from 'react';
import { PortfolioContext } from './sharing/context/portfolio';
import { Spinner } from './components/Spinner';
import { Navbar } from './components/Navbar';
import { Intro } from './components/Intro';
import { SkillsInfo } from './components/SkillsInfo';
import { Footer } from './components/Footer';
import { Skills } from './pages/Skills';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';

export const App = () => {
  const { loading, closeNavbar } = useContext(PortfolioContext) 
  
  return(
    <Fragment>
      { loading ?  
      <Spinner/> : 
      <div className="app" onClick={()=>closeNavbar()}> 
        <Navbar/>
        <Intro />
        <About/>
        <SkillsInfo/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div> 
    }
    </Fragment>
  )
}
