
import React, { useContext, Fragment } from 'react';
import { PortfolioContext } from './sharing/context/portfolio';
import { Spinner } from './components/Spinner';
import { Navbar } from './components/Navbar';
import { Intro } from './pages/Intro';
// import { SkillsDescription } from './components/SkillsDescription';
import { Footer } from './components/Footer';
import { Skills } from './pages/Skills';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { Experience } from './pages/Experience';
import { Course } from './pages/Course';

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
        {/* <SkillsDescription/> */}
        <Skills/>
        <Experience/>
        <Portfolio/>
        <Course/>
        <Contact/>
        <Footer/>
      </div> 
    }
    </Fragment>
  )
}
