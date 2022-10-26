import React from 'react'
import { Modal } from "react-bootstrap";
import { GrClose } from "react-icons/gr";
import * as MPS from './MPStyles'

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
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show} 
                onHide={handleClose}
                style={{background: '#14141498', fontFamily: 'Josefin Sans'}}                    
                >
                <Modal.Body style={{background: '#ecececce', padding: '20px'}}>
                
                <MPS.Container>

                    <MPS.Header>
                        <GrClose 
                        style={{color: '#14141498', 
                        float: 'right', 
                        fontSize: '20px',
                        cursor: 'pointer'
                        }} onClick={handleClose}
                        />
                    </MPS.Header>
                    
                    <MPS.Title>{title}</MPS.Title>
                    
                    <MPS.SubtitleContainer>
                        <MPS.Subtitle>{subtitle}</MPS.Subtitle>
                    </MPS.SubtitleContainer>

                    <MPS.ContainerImg>
                        <img src={img2 ? img2 : img} alt={title} loading='lazy' />
                    </MPS.ContainerImg>

                    <MPS.Description>{description}</MPS.Description>

                    <MPS.Date>
                        <strong>Data: </strong><span>{date}</span><br />
                        <strong>Tecnologias: </strong><span>{technology}</span>
                    </MPS.Date>

                    <MPS.ContainerButton>
                        {url ?  <MPS.Button target="_blank" href={url}>Visitar Site</MPS.Button> : ''}
                        <MPS.Button target="_blank" href={github}>Repositório</MPS.Button>
                    </MPS.ContainerButton>
                    
                    </MPS.Container>
                </Modal.Body >
            </Modal>
        </div>
    )
}
