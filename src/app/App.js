
import React, { useContext, CSSProperties, useState, useEffect, Fragment  } from 'react';
import { Spinner } from './components/Spinner';
import { Menu } from './components/Menu';
import { PortfolioContext } from './sharing/context/portfolio';
import { AppRouter } from './sharing/routes/AppRouter';
import ClipLoader from "react-spinners/ClipLoader";



export const App = () => {
  const { loading, setLoading, closeNavbar } = useContext(PortfolioContext) 

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },0)
  },[])
  
  return(
    <Fragment>
      { loading ?  
      <Spinner/> : 
      <div className="app" onClick={()=>closeNavbar()}> 
        <Menu/>
        <AppRouter/>
      </div> 
    }
    </Fragment>
  )
}
