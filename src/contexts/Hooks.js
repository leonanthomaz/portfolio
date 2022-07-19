import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { 
        DesignData, 
        APIListData,
        EcommerceListData,
        SistemasListData
} from "../db/dataPortfolio";
import { webSkills, 
        frameworksDataSkills, 
        toolsDataSkills,
        databasesDataSkills,
        languageDataSkills,
        versionDataSkills
 } from "../db/dataSkills";

export const HooksContext = createContext();

export const HooksContextProvider = ({children}) => {
    const [loading, setLoading] = useState(true);

    const [ click, setClick ] = useState(false);

    const [selected, setSelected] = useState("api");
    const [selectedSkills, setSelectedSkills] = useState("web");
    
    const [data, setData] = useState([]);
    const [dataSkills, setDataSkills] = useState([]);

    const [ list, setList ] = useState([])
    const [ listSkills, setListSkills ] = useState([])

    /**/
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /**/
    const [showModalContact, setShowModalContact] = useState(false);
    const handleCloseModalContact = () => setShowModalContact(false);
    const handleShowModalContact = () => setShowModalContact(true);

    /**/
    const [showModalInfo, setShowModalInfo] = useState(false);
    const handleCloseModalInfo = () => setShowModalInfo(false);
    const handleShowModalInfo = () => setShowModalInfo(true);

    const handleClick = () => {
        setClick(!click)
    }

    useEffect(() => {
    switch (selected) {
        case "api":
        setData(APIListData);
        break;
        case "design":
        setData(DesignData);
        break;
        case "ecommerce":
        setData(EcommerceListData);
        break;
        case "sistemas":
        setData(SistemasListData);
        break;
        default:
        setData(APIListData);
    }
    }, [selected]);

    useEffect(() => {
        switch (selectedSkills) {
            case "web":
            setDataSkills(webSkills);
            break;
            case "frameworks":
            setDataSkills(frameworksDataSkills);
            break;
            case "tools":
            setDataSkills(toolsDataSkills);
            break;
            case "databases":
            setDataSkills(databasesDataSkills);
            break;
            case "languages":
            setDataSkills(languageDataSkills);
            break;
            case "version":
            setDataSkills(versionDataSkills);
            break;
            default:
            setDataSkills(webSkills);
        }
    }, [selectedSkills]);

      
    const handleFind = (id) => {
        // console.log(id)
        const item = data.filter(e => e.id === id)
        setList(item)
        handleShow()
    }

    const handleFindSkills = (id) => {
        // console.log(id)
        const item = dataSkills.filter(e => e.id === id)
        setListSkills(item)
    }

    const handleScroll = () => { 
    if (window) {
            setTimeout(() => {
                setLoading(false)
            }, 3000); 
        } 
    }
    handleScroll()



    return (
        <HooksContext.Provider value={{
            click, 
            loading,
            setLoading,
            setClick, 
            handleClick,
            show,
            setShow,
            handleClose,
            handleShow,
            showModalContact,
            setShowModalContact,
            handleCloseModalContact,
            handleShowModalContact,
            showModalInfo,
            setShowModalInfo,
            handleCloseModalInfo,
            handleShowModalInfo,
            list,
            listSkills,
            handleFind,
            handleFindSkills,
            selected,
            setSelected,
            selectedSkills,
            setSelectedSkills,
            data,
            setData,
            dataSkills,
            setDataSkills
            }}>
            {children}
        </HooksContext.Provider>
      )
}