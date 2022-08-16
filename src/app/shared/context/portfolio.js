import { createContext, useState } from "react";

export const PortfolioContext = createContext()

export const PortfolioProvider = ({ children }) => {
    const [ click, setClick ] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const closeNavbar = () => {
        if(click === true){
          setClick(false)
        }
    }
    return (
        <PortfolioContext.Provider value={{ 
            click, 
            setClick,
            handleClick,
            closeNavbar
            }}>
            {children}
        </PortfolioContext.Provider>
    )
}