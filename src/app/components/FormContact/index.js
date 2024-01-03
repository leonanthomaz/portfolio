import React, { useRef, useState } from 'react';
import * as C from './FormContactStyles'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const FormContact = () => {
    
    const notify = () => {
        toast();
    }

    const form = useRef(); 
    const n = useRef();   
    const t = useRef();   
    const m = useRef();   
    const [ values, setValues ] = useState(form.current)

    const sendEmail = (e) => {
        e.preventDefault()
        let celular = t.current.value.replace( /\D/g , "");
        let nome = n.current.value;
        let mensagem = m.current.value;

        if(!celular || !nome || !mensagem){
            toast.warning('Campos obrigatórios não preenchidos. Por favor, verifique.',{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            return false;
        }

        if (celular.length !== 11){
            toast.warning('Número de telefone inválido. Por favor, revise e tente novamente.',{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            return false;
        }

        celular = celular.replace(/^(\d{2})(\d)/g,"($1) $2"); 
        celular.replace(/(\d)(\d{4})$/,"$1-$2");

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE, 'template_1sogban', form.current, process.env.REACT_APP_EMAILJS_ID)
        .then((result) => {
            console.log('SUCCESS!', result.text);
            setValues('')
            toast.success('Mensagem enviada com sucesso! Retornarei em breve.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            window.reload();
            
        }, (error) => {
            console.log('FAILED...', error.text);
            setValues('')
            toast.error('Erro ao enviar mensagem. Por favor, tente novamente.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        });
    }


    return (
        <div>
            <C.Container id="contact">
                <C.FormBox>
                    <C.Form ref={form} onSubmit={sendEmail} id="formContact">
                        <div className="label-float">
                            <input value={values} ref={n} name="name" aria-label="campo nome" type="text" placeholder=" " require minLength={3}/>
                            <label>Nome</label>
                        </div>
                        <div className="label-float">
                            <input value={values} ref={t} name="telephone" aria-label="campo telefone" type="number"  placeholder=" " require minLength={8} maxLength={12}/>
                            <label>Telefone</label>
                        </div>
                        <div className="label-float">
                            <input value={values} ref={m} name="message" aria-label="campo mensagem" className="textarea" type="text" placeholder=" " require/>
                            <label>Mensagem</label>
                        </div>
                        <div className='text-center py-3'>
                            <button onClick={notify} className="btn-form-contact" aria-label="tecla enviar" type="submit">Enviar</button>
                        </div>
                        <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        />
                        <ToastContainer />
                    </C.Form>
                </C.FormBox>
            </C.Container>
        </div>
    )
}
