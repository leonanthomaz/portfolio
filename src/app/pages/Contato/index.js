import React, { useRef, useState } from 'react';
import * as C from './ContatoStyles'
import emailjs from '@emailjs/browser';
import { ETitle } from "../../components/Elements/title";
import { Footer } from "../../components/Footer";

import { ModalContact } from '../../components/ModalContact';

export const Contato = () => {

    const imgPath = process.env.REACT_APP_IMGPATH
    let checked = imgPath + 'checked.png'
    let erroricon = imgPath + 'error-icon.png'

    /**/
    const [showModalContact, setShowModalContact] = useState(false);
    const handleCloseModalContact = () => setShowModalContact(false);
    const handleShowModalContact = () => setShowModalContact(true);

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
        <div>
            <C.Container>
            <ETitle title={'Deixe sua mensagem!'} subtitle={'Retornarei assim que possível!'}/>
            <C.FormBox>
            <C.Form ref={form} onSubmit={sendEmail} id="formContact">
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
            </C.Form>
            </C.FormBox>
            <ModalContact 
            status={status} 
            showModalContact={showModalContact} 
            handleCloseModalContact={handleCloseModalContact}
            checked={checked}
            erroricon={erroricon}
             />
             <Footer/>
            </C.Container>
        </div>
    )
}
