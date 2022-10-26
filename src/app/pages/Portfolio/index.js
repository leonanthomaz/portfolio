import React, { Fragment, useState, useEffect } from "react";
import * as P from './PortfolioStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ETitle } from "../../components/Elements/title";

import { PortfolioList } from '../../components/Cards/CardPortfolio';
import { category } from '../../sharing/utils/category_portfolio';
import { 
    DesignData, 
    APIListData,
    EcommerceListData,
    SistemasListData
} from "../../sharing/db/dataPortfolio";
import {ModalPortfolio} from '../../components/ModalPortfolio'
import { Footer } from "../../components/Footer";

export const Portfolio = () => {

    const [selected, setSelected] = useState("api");    
    const [data, setData] = useState([]);
    const [ list, setList ] = useState([])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    const handleFind = (id) => {
        const item = data.filter(e => e.id === id)
        setList(item)
        handleShow()
    }

    return (
        <P.Container>
            <ETitle title={'Portfólio'} subtitle={'Conhecimentos em prática!'}/>
            <P.MenuPortfolio>
                {category.map((item, index) => (
                <PortfolioList
                    title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                    key={index}
                />
                ))}
            </P.MenuPortfolio>

          <P.Wrapper>
            {data && data.map((item, index) => {
                return(
                    <Fragment key={index}>
                        <P.Box>
                            <P.ImgContainer>
                                <img src={item.img} alt={item.title}/>
                            </P.ImgContainer>
                            
                            <h2>{item.title}</h2> 
                            <p>{item.preview}</p>
                            <div className="text-center">
                                <span>{item.technology}</span>
                            </div>
                            <div className="btn-container">
                                <button onClick={()=>handleFind(item.id)}>Ver mais</button>
                            </div>

                            {list.map((e, index)=>{
                                if(e.id === item.id){
                                    return(
                                        <ModalPortfolio
                                        show={show}
                                        handleClose={handleClose}
                                        id={e.id}
                                        subtitle={e.subtitle}
                                        title={e.title}
                                        img={e.img}
                                        img2={e.img2}
                                        preview={e.preview}
                                        description={e.description}
                                        date={e.date}
                                        technology={e.technology}
                                        url={e.url}
                                        github={e.github}
                                        key={index}
                                        />
                                    )
                                }
                            })} 
                        </P.Box>   
                    </Fragment>
                )
            })} 
            </P.Wrapper>
            <Footer/>
        </P.Container>
    )
}
