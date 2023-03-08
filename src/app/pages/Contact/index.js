import React, { useRef, useState } from 'react';
import * as C from './ContactStyles'
import emailjs from '@emailjs/browser';
import { ETitle } from "../../components/Elements/title";
import { Footer } from "../../components/Footer";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { ModalContact } from '../../components/ModalContact';
import { Info } from '../../components/Info';

import checked from '../../sharing/assets/img/checked.webp';
import erroricon from '../../sharing/assets/img/error-icon.webp';

export const Contact = () => {

    /**/
    const [showModalContact, setShowModalContact] = useState(false);
    const handleCloseModalContact = () => setShowModalContact(false);
    const handleShowModalContact = () => setShowModalContact(true);

    const form = useRef(); 
    const n = useRef();   
    const t = useRef();   
    const m = useRef();   
    const [ values, setValues ] = useState(form.current)
    const [ status, setStatus ] = useState({
        type: '',
        mensagem: ''
    })

    const sendEmail = (e) => {
        e.preventDefault()
        let celular = t.current.value.replace( /\D/g , "");
        let nome = n.current.value;
        let mensagem = m.current.value;

        if(!celular || !nome || !mensagem){
            setStatus({
                type: 'erro',
                mensagem: 'Por favor, preencha todos os campos!'
            })
            handleShowModalContact();
            return false;
        }

        if (celular.length !== 11){
            setStatus({
                type: 'erro',
                mensagem: 'Digite um telefone válido!'
            })
            handleShowModalContact();
            return false;
        }

        celular = celular.replace(/^(\d{2})(\d)/g,"($1) $2"); 
        celular.replace(/(\d)(\d{4})$/,"$1-$2");

        emailjs.sendForm('service_6lh3joz', 'template_1sogban', form.current, 'p8wpY9wEmPZdsAgdo')
        .then((result) => {
            // console.log('SUCCESS!', result.text);
            setValues('')
            setStatus({
                type: 'sucesso',
                mensagem: 'Mensagem enviada com sucesso!'
            })
            handleShowModalContact()
        }, (error) => {
            // console.log('FAILED...', error.text);
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
            <C.Container id="contact">
            <AnimationOnScroll animateIn="animate__backInLeft">
                <ETitle title={'Dúvidas?'} subtitle={'Deixe sua mensagem!'}/>
            </AnimationOnScroll>
            <C.FormBox>
            <C.Form ref={form} onSubmit={sendEmail} id="formContact">
                <div className="label-float">
                    <input value={values} ref={n} name="name" aria-label="campo nome" type="text" placeholder=" " require minLength={3} maxLength={20}/>
                    <label>Nome</label>
                </div>
                <div className="label-float">
                    <input value={values} ref={t} name="telephone" aria-label="campo telefone" type="number"  placeholder=" " require/>
                    <label>Telefone</label>
                </div>
                <div className="label-float">
                    <input value={values} ref={m} name="message" aria-label="campo mensagem" className="textarea" type="text" placeholder=" " require/>
                    <label>Mensagem</label>
                </div>
                <div className='text-center py-3'>
                    <button className="btn-form-contact" aria-label="tecla enviar" type="submit">Enviar</button>
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
             <Info title={'Contato'}/>
             <Footer/>
            </C.Container>
        </div>
    )
}
