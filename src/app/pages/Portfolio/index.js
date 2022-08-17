import React, { Fragment, useState, useEffect } from "react";
import * as P from './PortfolioStyles';
import { PortfolioList } from '../../components/Cards/CardPortfolio';
import { category } from '../../shared/utils/category_portfolio';
import { 
    DesignData, 
    APIListData,
    EcommerceListData,
    SistemasListData
} from "../../shared/db/dataPortfolio";
import {ModalPortfolio} from '../../components/ModalPortfolio'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ETitle } from "../../components/Elements/title";

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
            // console.log(id)
            const item = data.filter(e => e.id === id)
            setList(item)
            handleShow()
        }

    return (
        <P.Container>
            <ETitle title={'Portfólio'} subtitle={'Conhecimentos em prática!'}/>
            <P.MenuPortfolioGroup>
                <P.MenuPortfolio>
                    {category.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                    ))}
                </P.MenuPortfolio>
          </P.MenuPortfolioGroup>

          <P.Wrapper>
          {data && data.map((item, index) => {
              return(
                <Fragment key={index}>
                 
                  <P.Box>
                        <AnimationOnScroll animateIn="animate__fadeIn">
                        
                            <P.ImgContainer>
                                <img src={item.img} alt={item.title} onClick={()=>handleFind(item.id)}/>
                            </P.ImgContainer>
                            
                            <h4>{item.title}</h4> 
                            <p>{item.preview}</p>
                            <div className="text-center">
                                <span>{item.technology}</span>
                            </div>
                        </AnimationOnScroll>                     

                        {list.map((e)=>{
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
                                    />
                                )
                            }
                        })} 
                    </P.Box>                  
                </Fragment>
                )
            })} 
          </P.Wrapper>

        </P.Container>
    )
}
