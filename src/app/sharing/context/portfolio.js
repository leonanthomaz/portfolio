import { createContext, useEffect, useState } from "react";

export const PortfolioContext = createContext()

export const PortfolioProvider = ({ children }) => {
    const [ click, setClick ] = useState(false)
    const [ loading, setLoading ] = useState(true)

    const handleClick = () => {
        setClick(!click)
    }

    const closeNavbar = () => {
        if(click === true){
          setClick(false)
        }
    }

    useEffect(()=>{
        setLoading(false)
    },[loading])

    return (
        <PortfolioContext.Provider value={{ 
            click, 
            setClick,
            handleClick,
            closeNavbar,
            loading,
            setLoading
            }}>
            {children}
        </PortfolioContext.Provider>
    )
}