import React from 'react'
import { Modal } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";

export const ModalContact = ({
    status,
    showModalContact,
    handleCloseModalContact,
    checked,
    erroricon }) => {

    return (
        <div>
        <Modal 
            size="md"
            aria-labelledby="Modal do projeto"
            centered
            show={showModalContact} 
            onHide={handleCloseModalContact}
            style={{background: '#14141498'}}                    
            >
            <Modal.Body style={{background: '#ecececce', padding: '30px'}}>
                <AiOutlineClose style={{color: '#14141498', 
                    float: 'right', 
                    fontSize: '30px',
                    cursor: 'pointer'
                    }} onClick={handleCloseModalContact}/>
                <div style={{ textAlign: 'center'}}>
                    {status.type === 'sucesso' ? 
                    <div style={{ marginTop: '50px'}}>
                        <h2 style={{color: 'green'}}>{status.mensagem}</h2>
                        <img style={{width: '80px', marginTop: '20px'}} src={checked} alt='Ícone sucesso' />
                        <h4 style={{ marginTop: '20px'}}>Irei retornar em breve. Obrigado!</h4>
                    </div> 
                    :
                    <div style={{ marginTop: '50px'}}>
                        <h2 style={{color: 'red'}}>{status.mensagem}</h2>
                        <img style={{width: '80px', marginTop: '20px'}} src={erroricon} alt='Ícone sucesso' />
                        <h5 style={{ marginTop: '20px'}}>Tente novamente!</h5>
                    </div> 
                    }
                </div>
            </Modal.Body >
        </Modal> 
        </div>
    )
}
