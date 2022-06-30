import React, { useContext, useEffect, useState, Fragment } from "react";
import { PortfolioMainStyled } from "./PortfolioStyles";
import { PortfolioData } from "../../db/dataPortfolio";
// import { Modal } from "react-bootstrap";
import Modal from '../../components/Modal';
// import Modal from 'react-modal';

// import { HooksContext } from "../../contexts/Hooks";

const Portfolio = () => {
    // const { show, setShow, handleShow, handleClose } = useContext(HooksContext);
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(false);

    const [ list, setList ] = useState([])

    const handleFind = (id) => {
        // console.log(id)
        const item = PortfolioData.filter(e => e.id === id)
        setList(item)
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
                                    title={e.title}
                                    />
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



/* display:block; position:relative; background:#ffc; width:300px; height:180px ;

        ::before, ::after { 
            content:""; 
            display:block; 
            box-sizing:border-box;
                            
            z-index:5; 
            pointer-events: none; 
                            
            width:0; 
            height:0; 
            opacity:0; 
            border:2px solid red }

        ::before { 
            border-left:none; 
            border-bottom:none; 
            left:0; 
            top:0;
            transition:width .5s linear 1.5s, height .5s linear 1s, 
            opacity .1s 2s 
        }
        ::after  { 
            border-top:none; border-right:none; right:0; bottom:0;
                    
            transition:width .5s linear .5s, height .5s linear, 
            opacity .1s 1s 
        }

        :hover::before, :hover::after  { 
            width:100%; 
            height:100%; 
            opacity:1 
        }

        :hover::before { 
            transition:width .5s linear, 
            height .5s linear .5s, 
            opacity .1s 
        }
        a:hover::after  { 
            transition:width .5s linear 1s, 
            height .5s linear 1.5s, 
            opacity 
        } */
  