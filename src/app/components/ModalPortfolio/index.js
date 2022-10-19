import React from 'react'
import { Modal } from "react-bootstrap";
import { GrClose } from "react-icons/gr";

export const ModalPortfolio = ({show,
    handleClose,
    id,
    index,
    subtitle,
    title,
    img,
    img2,
    preview,
    description,
    date,
    technology,
    url,
    github
}) => {
    return (
        <div>
            <Modal 
                key={index}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show} 
                onHide={handleClose}
                style={{background: '#14141498', fontFamily: 'Josefin Sans'}}                    
                >
                <Modal.Body style={{background: '#ecececce', padding: '30px'}}>
                    <GrClose 
                    style={{color: '#14141498', 
                    float: 'right', 
                    fontSize: '30px',
                    cursor: 'pointer'
                    }} onClick={handleClose}
                    />
                    <h1 style={{
                        color: '#14141498', 
                        textAlign: 'center', 
                        marginTop: '20px',
                        borderBottom: '2px solid',
                        lineHeight: '5rem',
                        fontWeight: 900
                        }}>{title}</h1><br/>
                    <h4 style={{textAlign: 'center'}}>{subtitle}</h4><br/>
                    <div className="" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img src={img2 ? img2 : img} alt={title} style={{width: '70%'}} />
                    </div><br/>
                    <div style={{textAlign: 'center', padding: '20px'}}>
                        <p>{description}</p>
                    </div>
                    <ul style={{
                        textAlign: 'center',
                        listStyle: 'none',
                        marginTop: '10px',
                        padding: '20px'
                        }}>
                            <strong>Data: </strong><span>{date}</span><br />
                            <strong>Tecnologias: </strong><span>{technology}</span>
                    </ul>
                    <div style={{ textAlign: 'center'}}>
                        {url != "" ? 
                        <a style={{
                            background: 'red', 
                            padding: '10px',
                            margin: '10px',
                            borderRadius: '7px',
                            color: 'white',
                            textDecoration: 'none',
                            }} target="_blank" href={url}>Visitar Site</a>
                        : ""}
                        <a style={{
                            background: 'red', 
                            padding: '10px',
                            margin: '10px',
                            borderRadius: '7px',
                            color: 'white',
                            textDecoration: 'none',
                            }} target="_blank" href={github}>Repositório</a>
                    </div>

                </Modal.Body >
            </Modal>
        </div>
    )
}
