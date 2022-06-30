import React, { useContext} from "react";
import { Modal } from "react-bootstrap";
import { HooksContext } from "../../contexts/Hooks";

const Info = () => {
    const { showModalInfo, handleCloseModalInfo } = useContext(HooksContext);

    return(
        <>
        <Modal 
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={showModalInfo} 
            onHide={handleCloseModalInfo}
            style={{background: '#14141498'}}                    
            >
            <Modal.Body style={{background: '#ecececce', padding: '30px'}}>
                <i class="fa-solid fa-xmark" 
                    style={{color: '#14141498', 
                    float: 'right', 
                    fontSize: '30px',
                    cursor: 'pointer'
                    }} onClick={handleCloseModalInfo}>
                </i>
                <div style={{}}>
                    <h1 style={{marginTop: '30px'}}>Tecnologias aplicadas neste portfólio:</h1>
                    <br/>
                    <h3>Linguagem de programação: </h3>
                    <div>
                        <div>Javascript</div>
                        <div>HTML</div>
                    </div>
                    <br/>
                    <h3>Framework: </h3>
                    <div>
                        <div>React</div>
                    </div>
                    <br/>
                    <h3>Ferramentas: </h3>
                    <div >
                        <div>Hooks</div>
                        <div>Context API</div>
                    </div>
                    <br/>
                    <h3>Bibliotecas: </h3>
                    <div>
                        <div>
                        <strong> react-animation-on-scroll</strong> (Animações em scroll)
                        </div>
                        <div>
                        <strong>  react-bootstrap</strong> (Estilo)
                        </div>
                        <div>
                        <strong>   react-animations</strong> (Animações)
                        </div>
                        <div>
                        <strong>   Bootstrap</strong> (Estilo)
                        </div>
                        <div>
                        <strong>  react-chrono</strong> (Design da seção "Cursos")
                        </div>
                        <div>
                        <strong>  react-modal </strong>(Para os modais)
                        </div>
                        <div>
                        <strong>   typewriter-effect</strong> (Efeito "máquina de escrever" na seção Intro)
                        </div>
                        <div>
                        <strong>   @emailjs/browser</strong> (Para envio de emails no contato)
                        </div>
                    </div>
                    <br/>
                    <h3>Estilo: </h3>
                    <div>
                        <div>Styled-Components</div>
                        <div>CSS</div>
                    </div>
                </div>
            </Modal.Body >
        </Modal>
        </>
    )
}

export default Info;