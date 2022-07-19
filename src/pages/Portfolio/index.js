import React, { useContext, Fragment } from "react";
import { PortfolioMainStyled } from "./PortfolioStyles";
import PortfolioList from "../PortfolioList";
import { Modal } from "react-bootstrap";
import { HooksContext } from "../../contexts/Hooks";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import foto from '../../assets/img/portfolio/clapper1.jpg';
import { TbHandClick } from "react-icons/tb";

const Portfolio = () => {
    const { show, handleFind, list, handleClose, setSelected, selected, data } = useContext(HooksContext);

    const categoria = [
        {
            id: "api",
            title: "API",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "ecommerce",
            title: "E-Commerce",
        },
        {
            id: "sistemas",
            title: "Sistemas",
        },
        
        
    ];

    return (
        <PortfolioMainStyled>
        <div class="portfolio">
            <div class="text-center">
                <h2 class="title section-heading text-uppercase">Portfólio</h2>
                <AnimationOnScroll animateIn="animate__fadeInDown">
                    <h3 class="section-subheading ">Colocando o conhecimento em prática.</h3>
                </AnimationOnScroll>
            </div>
                <AnimationOnScroll animateIn="animate__fadeInUp">
                <ul>
                    {categoria.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                    ))}
                </ul>
                </AnimationOnScroll>
            <div className="portfolio-main">
                {data && data.map((item, index)=>{
                    return(
                    <Fragment key={index}>
                        <AnimationOnScroll animateIn="animate__fadeIn">
                   
                            <div className="portfolio-box text-center" >
                                <div className="portfolio-img">
                                    <img src={item.img} alt={item.title} onClick={()=>handleFind(item.id)}/>
                                </div>
                                <div className="portfolio-img-hover" onClick={()=>handleFind(item.id)}>
                                    <div className="portfolio-img-icon">
                                        <TbHandClick/>
                                    </div>
                                </div>
                                <h4>{item.title}</h4> 
                                <p>{item.preview}</p>
                                <strong>{item.technology}</strong> 
                                {list.map((e)=>{
                                    if(e.id === item.id){
                                        return(
                                            <Modal 
                                            size="lg"
                                            aria-labelledby="contained-modal-title-vcenter"
                                            centered
                                            show={show} 
                                            onHide={handleClose}
                                            style={{background: '#14141498', fontFamily: 'Josefin Sans'}}                    
                                            >
                                            <Modal.Body style={{background: '#ecececce', padding: '30px'}}>
                                                <i class="fa-solid fa-xmark" 
                                                    style={{color: '#14141498', 
                                                    float: 'right', 
                                                    fontSize: '30px',
                                                    cursor: 'pointer'
                                                    }} onClick={handleClose}>
                                                </i>
                                                <h1 style={{
                                                    color: '#14141498', 
                                                    textAlign: 'center', 
                                                    marginTop: '20px',
                                                    borderBottom: '2px solid',
                                                    lineHeight: '5rem',
                                                    fontWeight: 900
                                                    }}>{e.title}</h1><br/>
                                                <h4 style={{textAlign: 'center'}}>{e.subtitle}</h4><br/>
                                                <div className="" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                    <img src={e.img2 ? e.img2 : e.img} alt={e.title} style={{width: '70%'}} />
                                                </div><br/>
                                                <div style={{textAlign: 'center', padding: '20px'}}>
                                                    <p>{e.description}</p>
                                                </div>
                                                <ul style={{
                                                    textAlign: 'center',
                                                    listStyle: 'none',
                                                    marginTop: '10px',
                                                    padding: '20px'
                                                    }}>
                                                        <strong>Data: </strong><span>{e.date}</span><br />
                                                        <strong>Tecnologias: </strong><span>{e.technology}</span>
                                                </ul>
                                                <div style={{ textAlign: 'center'}}>
                                                    <a style={{
                                                        background: 'red', 
                                                        padding: '10px',
                                                        margin: '10px',
                                                        borderRadius: '7px',
                                                        color: 'white',
                                                        textDecoration: 'none',
                                                        }} target="_blank" href={e.url}>Visitar Site</a>
                                                    <a style={{
                                                        background: 'red', 
                                                        padding: '10px',
                                                        margin: '10px',
                                                        borderRadius: '7px',
                                                        color: 'white',
                                                        textDecoration: 'none',
                                                        }} target="_blank" href={e.github}>Repositório</a>
                                                </div>
                            
                                            </Modal.Body >
                                        </Modal>
                                        )
                                    }
                                })}                  
                            </div>
                        </AnimationOnScroll>

                    </Fragment>
                    )
                })}

                <Modal list={list}/>
  
           </div>
                    
            <div class="text-center py-4">
                <p class="section-subheading projetos">Para mais projetos visite o meu <a class="btn btn-warning btn-sm" target="_blank" href="https://github.com/leonanthomaz">GitHub</a>.</p>
            </div> 
        </div>
        
        </PortfolioMainStyled>
    )
}

export default Portfolio;