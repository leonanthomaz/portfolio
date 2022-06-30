import React, { useContext, useEffect, useState, Fragment } from "react";
import { PortfolioMainStyled } from "./PortfolioStyles";
import { PortfolioData } from "../../db/dataPortfolio";
import { Modal } from "react-bootstrap";
// import Modal from '../../components/Modal';
// import Modal from 'react-modal';

// import { HooksContext } from "../../contexts/Hooks";

const Portfolio = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const { show, setShow, handleShow, handleClose } = useContext(HooksContext);
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(false);

    const [ list, setList ] = useState([])

    const handleFind = (id) => {
        // console.log(id)
        const item = PortfolioData.filter(e => e.id === id)
        setList(item)
        handleShow()
    }

    console.log(list)

    return (
        <PortfolioMainStyled id="portfolio">
        <div class="container p-2">
            <div class="text-center">
                <h2 class="title section-heading text-uppercase mt-3"><div class="wow fadeInDown">Portfólio</div></h2>
                <h3 class="section-subheading ">Colocando o conhecimento em prática.</h3>
            </div>

           <div className="portfolio-main">

                {PortfolioData && PortfolioData.map((item, index)=>{
                    return(
                    <Fragment key={index}>
                    <div  className="portfolio-box" >
                        <div className="portfolio-img">
                            <img src={item.img} alt={item.title} onClick={()=>handleFind(item.id)}/>
                        </div>
                        <h4>{item.title}{item.id}</h4>    
                        {list.map((e)=>{
                            if(e.title === item.title){
                                return(
                                    <Modal 
                                    size="lg"
                                    aria-labelledby="contained-modal-title-vcenter"
                                    centered
                                    show={show} 
                                    onHide={handleClose}
                                    style={{background: '#000000d0'}}                    
                                    >
                                    <Modal.Body style={{background: 'red'}}>
                                        <h1 style={{color: 'white', textAlign: 'center'}}>{e.title}</h1>
                                        <img src={e.img} alt={e.title} style={{width: '100%'}} />
                                    </Modal.Body >
                                  </Modal>
                                )
                            }
                        })}                  
                    </div>

                    </Fragment>
                    )
                })}

                <Modal list={list}/>
  
           </div>
                    
            <div class="text-center py-4">
                <p class="section-subheading projetos">Para mais projetos visite o meu <a class="btn btn-warning btn-sm" target="_blank" href="https://github.com/leonanthomaz">GitHub</a>.</p>
            </div> 
        </div>

            {/* <div class="portfolio-modal modal fade" id="brasilCovid" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="close-modal" data-dismiss="modal"><img src="../../public/img/close-icon.svg" /></div>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <div class="modal-body">
                                        
                                        <h2 class="text-uppercase">Brasil Covid</h2>
                                        <p class="item-intro ">API de estatísticas da Covid no Brasil</p>
                                        <img class="img-fluid d-block mx-auto" src="../../public/img/portfolio/brasilcovid2.png" alt="" />
                                        <p>API básica, contendo os números da pandemia do Covid-19 por Estados brasileiros. Neste mini-projeto pude desenvolver ainda mais minhas habilidades com Axios e Hooks.</p>
                                        <ul class="list-inline">
                                            <li>Data: Junho 2021</li>
                                            <li>Tecnologias: React, JavaScript, CSS e HTML5</li>
                                            <li><a target="_blank" href="https://brasilcovid.herokuapp.com/">Site</a></li>
                                            <li><a target="_blank" href="https://github.com/leonanthomaz/BrasilCovid">Repositório</a></li>
                                        </ul>
                                        <button class="btn btn-warning" data-dismiss="modal" type="button"><i class="fas fa-times mr-1"></i> Fechar o Projeto</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </PortfolioMainStyled>
    )
}

export default Portfolio;