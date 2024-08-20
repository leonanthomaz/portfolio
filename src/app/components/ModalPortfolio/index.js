import React from 'react';
import { GrClose } from "react-icons/gr";
import * as MPS from './MPStyles';
import { Modal } from "react-bootstrap";

export const ModalPortfolio = ({
    show,
    handleClose,
    index,
    subtitle,
    title,
    img,
    img2,
    description,
    date,
    technology,
    url,
    github
}) => {
    return (
        <MPS.CustomModal
            key={index}
            aria-labelledby="Modal exibindo detalhes do projeto"
            centered
            show={show}
            onHide={handleClose}
        >
            <MPS.Header>
                <GrClose 
                    onClick={handleClose} 
                    style={{
                        color: '#ffeb3b',
                        cursor: 'pointer',
                        fontSize: '24px'
                    }} 
                />
            </MPS.Header>
            <Modal.Body>
                <MPS.Container>
                    <MPS.Title>{title}</MPS.Title>
                    
                    <MPS.SubtitleContainer>
                        <MPS.Subtitle>{subtitle}</MPS.Subtitle>
                    </MPS.SubtitleContainer>

                    <MPS.ContainerImg>
                        <img src={img2 || img} alt={title} loading='lazy' />
                    </MPS.ContainerImg>

                    <MPS.Description>{description}</MPS.Description>

                    <MPS.Date>
                        <strong>Data: </strong><span>{date}</span><br />
                        <strong>Tecnologias: </strong><span>{technology}</span>
                    </MPS.Date>

                    <MPS.ContainerButton>
                        {url && <MPS.Button aria-label={title} href={url} target="_blank">Visitar Site</MPS.Button>}
                        <MPS.Button aria-label={title} href={github} target="_blank">Repositório</MPS.Button>
                    </MPS.ContainerButton>
                </MPS.Container>
            </Modal.Body>
        </MPS.CustomModal>
    );
};
