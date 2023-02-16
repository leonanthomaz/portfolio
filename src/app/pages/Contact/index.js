import React, { useRef, useState } from 'react';
import * as C from './ContactStyles'
import emailjs from '@emailjs/browser';
import { ETitle } from "../../components/Elements/title";
import { Footer } from "../../components/Footer";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { ModalContact } from '../../components/ModalContact';
import { Info } from '../../components/Info';

export const Contact = () => {

    const imgPath = process.env.REACT_APP_IMGPATH
    let checked = imgPath + 'checked.webp'
    let erroricon = imgPath + 'error-icon.webp'

    /**/
    const [showModalContact, setShowModalContact] = useState(false);
    const handleCloseModalContact = () => setShowModalContact(false);
    const handleShowModalContact = () => setShowModalContact(true);

    const form = useRef(); 
    const n = useRef();   
    const a = useRef();   
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
        if (celular.length === 11){
            celular = celular.replace(/^(\d{2})(\d)/g,"($1) $2"); 
            celular.replace(/(\d)(\d{4})$/,"$1-$2");
            // console.log(celular)

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
          } else {
            setStatus({
                type: 'erro',
                mensagem: 'Digite um telefone válido!'
            })
            handleShowModalContact()
          }
        
        
        
        // console.log(n.current.value, a.current.value, t.current.value, m.current.value)

    }

    // const sendEmail = (e) => {
    //     e.preventDefault()
    //     emailjs.sendForm('service_6lh3joz', 'template_1sogban', form.current, 'p8wpY9wEmPZdsAgdo')
    //     .then((result) => {
    //         console.log('SUCCESS!', result.text);
    //         setValues('')
    //         setStatus({
    //             type: 'sucesso',
    //             mensagem: 'Mensagem enviada com sucesso!'
    //         })
    //         handleShowModalContact()
    //     }, (error) => {
    //         console.log('FAILED...', error.text);
    //         setValues('')
    //         setStatus({
    //             type: 'erro',
    //             mensagem: 'Falha ao enviar a mensagem.'
    //         })
    //         handleShowModalContact()
    //     });
    // }

    return (
        <div>
            <C.Container>
            <AnimationOnScroll animateIn="animate__backInLeft">
                <ETitle title={'Dúvidas?'} subtitle={'Deixe sua mensagem!'}/>
            </AnimationOnScroll>
            <C.FormBox>
            <C.Form ref={form} onSubmit={sendEmail} id="formContact">
                <div className="label-float">
                    <input value={values} ref={n} name="name" aria-label="campo nome" type="text" placeholder=" " required minLength={3}/>
                    <label>Nome</label>
                </div>
                <div className="label-float">
                    <input value={values} ref={a} name="subject" aria-label="campo assunto" type="text" placeholder=" " required minLength={5}/>
                    <label>Assunto</label>
                </div>
                <div className="label-float">
                    <input value={values} ref={t} name="telephone" aria-label="campo telefone" type="number"  placeholder=" " required/>
                    <label>Telefone</label>
                </div>
                <div className="label-float">
                    <input value={values} ref={m} name="message" aria-label="campo mensagem" className="textarea" type="text" placeholder=" " required minLength={12}/>
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
