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

    let categoryPortfolio = [
        {
            id: "react",
            title: "React",
        },
        {
            id: "php",
            title: "PHP",
        },
        {
            id: "java",
            title: "Java",
        },
        {
            id: "web",
            title: "HMTL/CSS",
        },    
        
    ];

    let categorySkills = [
        {
            id: "languages",
            title: "Linguagens",
        },
        {
          id: "web",
          title: "WEB",
        },
        {
          id: "frameworks",
          title: "Frameworks",
        },
        {
            id: "databases",
            title: "Databases",
        },
        {
            id: "version",
            title: "Versionamento",
        },
        {
            id: "others",
            title: "Outros",
        },
    ];

    return (
        <PortfolioContext.Provider value={{ 
            click, 
            setClick,
            handleClick,
            closeNavbar,
            loading,
            setLoading,
            categorySkills,
            categoryPortfolio
            }}>
            {children}
        </PortfolioContext.Provider>
    )
}