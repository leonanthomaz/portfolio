import React, { useRef, useState } from 'react';
import { Box, Typography, TextField, Button, CircularProgress } from '@mui/material';
import { FaFacebook, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Title } from '../../styles/GlobalStyles';

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const n = useRef<HTMLInputElement>(null);
  const t = useRef<HTMLInputElement>(null);
  const m = useRef<HTMLTextAreaElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const celular = t.current?.value.replace(/\D/g, '') || '';
    const nome = n.current?.value || '';
    const mensagem = m.current?.value || '';

    console.log('DADOS DO FORMULÁRIO:', celular, nome, mensagem);

    if (!celular || !nome || !mensagem) {
      toast.warning('Campos obrigatórios não preenchidos. Por favor, verifique.', {
        position: 'top-right',
        autoClose: 5000,
        theme: 'light',
      });
      setLoading(false);
      return;
    }

    if (celular.length !== 11) {
      toast.warning('Número de telefone inválido. Por favor, revise e tente novamente.', {
        position: 'top-right',
        autoClose: 5000,
        theme: 'light',
      });
      setLoading(false);
      return;
    }

    if (!form.current) {
      toast.error('Erro no envio do formulário. Tente novamente.', {
        position: 'top-right',
        autoClose: 5000,
        theme: 'light',
      });
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE,
        'template_1sogban',
        form.current,
        import.meta.env.VITE_EMAILJS_ID
      )
      .then(() => {
        toast.success('Mensagem enviada com sucesso! Retornarei em breve.', {
          position: 'top-right',
          autoClose: 5000,
          theme: 'light',
        });
        form.current?.reset(); // Limpa o formulário
      })
      .catch(() => {
        toast.error('Erro ao enviar mensagem. Por favor, tente novamente.', {
          position: 'top-right',
          autoClose: 5000,
          theme: 'light',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box sx={{ padding: 4, borderRadius: '8px', backgroundColor: '#121212' }}>
      <AnimationOnScroll animateIn="animate__backInLeft">
        <Title>Contato</Title>
      </AnimationOnScroll>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: 4,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <form ref={form} onSubmit={sendEmail}>
            <TextField
              label="Nome"
              name="name"
              fullWidth
              margin="normal"
              inputRef={n}
              required
              sx={{
                input: { color: '#FFD700' },
                '& .MuiInputLabel-root': { color: '#FFD700' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#FFD700' },
                  '&:hover fieldset': { borderColor: '#FFD700' },
                  '&.Mui-focused fieldset': { borderColor: '#FFD700' },
                },
              }}
            />
            <TextField
              label="Telefone (com DDD)"
              name="telephone"
              fullWidth
              margin="normal"
              inputRef={t}
              required
              sx={{
                input: { color: '#FFD700' },
                '& .MuiInputLabel-root': { color: '#FFD700' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#FFD700' },
                  '&:hover fieldset': { borderColor: '#FFD700' },
                  '&.Mui-focused fieldset': { borderColor: '#FFD700' },
                },
              }}
            />
            <TextField
              label="Mensagem"
              name="message"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              inputRef={m}
              required
              sx={{
                textarea: { color: '#FFD700' },
                '& .MuiInputLabel-root': { color: '#FFD700' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#FFD700' },
                  '&:hover fieldset': { borderColor: '#FFD700' },
                  '&.Mui-focused fieldset': { borderColor: '#FFD700' },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} sx={{ color: '#FFD700' }} /> : 'Enviar Mensagem'}
            </Button>
          </form>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <Typography variant="h6" sx={{ color: '#FFD700', marginBottom: 2 }}>
            Minhas Redes Sociais
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={40} color="#FFD700" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={40} color="#FFD700" />
            </a>
            <a href="https://github.com/leonanthomaz" target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} color="#FFD700" />
            </a>
            <a href="https://wa.me/55XXXXXXXXXXX" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={40} color="#FFD700" />
            </a>
          </Box>
        </Box>
      </Box>

      <ToastContainer />
    </Box>
  );
};
