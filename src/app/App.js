
import React, { useContext, useEffect, Fragment  } from 'react';
import { Spinner } from './components/Spinner';
import { Menu } from './components/Menu';
import { PortfolioContext } from './sharing/context/portfolio';
import { Intro } from './components/Intro';
import { Skills } from './pages/Skills';
import { Sobre } from './pages/Sobre';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { SkillsHome } from './components/SkillsHome';
import { Top } from './components/Top';

export const App = () => {
  const { loading, setLoading, closeNavbar } = useContext(PortfolioContext) 

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    }, 500)
  },[])
  
  return(
    <Fragment>
      { loading ?  
      <Spinner/> : 
      <div className="app" onClick={()=>closeNavbar()}> 
        <Menu/>
        <Intro/>
        <Sobre/>
        <SkillsHome/>
        <Skills/>
        <Top/>
        <Portfolio/>
        <Contact/>
      </div> 
    }
    </Fragment>
  )
}
