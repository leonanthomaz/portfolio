import React, { useRef, useState, useContext } from 'react';
import { ContatoMainStyled } from "./ContatoStyles";
import emailjs from '@emailjs/browser';
import { Modal } from "react-bootstrap";
import { HooksContext } from "../../contexts/Hooks";
import checked from '../../assets/img/checked.png';
import erroricon from '../../assets/img/error-icon.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Contato = () => {
    const { showModalContact, handleShowModalContact, handleCloseModalContact } = useContext(HooksContext);
    const form = useRef();    
    const [ values, setValues ] = useState(form.current)
    const [ status, setStatus ] = useState({
        type: '',
        mensagem: ''
    })

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_6lh3joz', 'template_1sogban', form.current, 'p8wpY9wEmPZdsAgdo')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            setValues('')
            setStatus({
                type: 'sucesso',
                mensagem: 'Mensagem enviada com sucesso!'
            })
            handleShowModalContact()
        }, (error) => {
            console.log('FAILED...', error.text);
            setValues('')
            setStatus({
                type: 'erro',
                mensagem: 'Falha ao enviar a mensagem.'
            })
            handleShowModalContact()
        });
    }

    return (
        <ContatoMainStyled id="contact">
            <div className="py-5">
                <div className="contact-main">
                    <AnimationOnScroll animateIn="animate__fadeInDown">
                        <h2 class="title section-heading text-uppercase text-center">Deixe sua mensagem!</h2>
                    </AnimationOnScroll>
                    <h3 className="section-subheading text-center">Retornarei assim que posssível</h3>
                    <div className="contact-box">
                        <div className="contact-form-box-main">
                            <div className="contact-form-box">                                
                                <Modal 
                                    size="md"
                                    aria-labelledby="contained-modal-title-vcenter"
                                    centered
                                    show={showModalContact} 
                                    onHide={handleCloseModalContact}
                                    style={{background: '#14141498'}}                    
                                    >
                                    <Modal.Body style={{background: '#ecececce', padding: '30px'}}>
                                        <i class="fa-solid fa-xmark" 
                                            style={{color: '#14141498', 
                                            float: 'right', 
                                            fontSize: '30px',
                                            cursor: 'pointer'
                                            }} onClick={handleCloseModalContact}>
                                        </i>
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
                                                <h4 style={{ marginTop: '20px'}}>Tente novamente mais tarde...</h4>
                                            </div> 
                                            }
                                        </div>
                                    </Modal.Body >
                                </Modal>
                                <form ref={form} onSubmit={sendEmail} id="formContact">
                                    <div className="label-float">
                                        <input value={values} name="name" type="text" placeholder=" " required/>
                                        <label>Nome</label>
                                    </div>
                                    <div className="label-float">
                                        <input value={values} name="subject" type="text" placeholder=" " required/>
                                        <label>Assunto</label>
                                    </div>
                                    <div className="label-float">
                                        <input value={values} name="telephone" type="text" placeholder=" " required/>
                                        <label>Telefone</label>
                                    </div>
                                    <div className="label-float">
                                        <input value={values} name="message" className="textarea" type="text" placeholder=" " required/>
                                        <label>Mensagem</label>
                                    </div>
                                    <div className='text-center py-3'>
                                        <button className="btn-form-contact" type="submit">Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContatoMainStyled>
    )
}

export default Contato;