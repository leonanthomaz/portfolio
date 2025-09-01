// components/HelpDialog.tsx
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Stack,
  useTheme
} from '@mui/material';
import {
  Science,
  VpnKey,
  Security,
  Key,
  AccountTree,
  Chat,
  Settings,
  ContactMail
} from '@mui/icons-material';

interface HelpDialogProps {
  open: boolean;
  onClose: () => void;
}

export const HelpDialog: React.FC<HelpDialogProps> = ({ open, onClose }) => {
  const theme = useTheme();

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ 
        fontWeight: 'bold', 
        bgcolor: theme.palette.primary.main, 
        color: 'black',
        textAlign: 'center',
        py: 2,
        mb: 3
      }}>
        <Science sx={{ verticalAlign: 'middle', mr: 1 }} />
        Sandbox - Guia Rápido
      </DialogTitle>
      
      <DialogContent sx={{ p: 4, textAlign: 'center' }}>
        <Stack direction="row" spacing={4} justifyContent="center" mb={4}>
          <Stack spacing={1} alignItems="center">
            <VpnKey color="primary" sx={{ fontSize: 40 }} />
            <Typography variant="subtitle1" fontWeight="bold">O que é</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 120 }}>
              <strong>Sandbox</strong> é um ambiente de testes seguro e controlado.
            </Typography>
          </Stack>

          <Stack spacing={1} alignItems="center">
            <Security color="primary" sx={{ fontSize: 40 }} />
            <Typography variant="subtitle1" fontWeight="bold">Como funciona</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 120 }}>
              Permite testar credenciais, visualizar a árvore de projetos e simular ambientes.
            </Typography>
          </Stack>

          <Stack spacing={1} alignItems="center">
            <ContactMail color="primary" sx={{ fontSize: 40 }} />
            <Typography variant="subtitle1" fontWeight="bold">Como obter acesso</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 120 }}>
              É necessário entrar em contato para solicitar o código de acesso.
            </Typography>
          </Stack>
        </Stack>

        <Typography variant="h6" component="h3" sx={{ mt: 2, mb: 2, fontWeight: 'bold', color: theme.palette.primary.dark }}>
          O Que Você Encontrará no Sandbox
        </Typography>

        <Stack spacing={2} sx={{ textAlign: 'left' }}>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Key color="primary" />
            <Typography variant="body2">
              <strong>Credenciais de Teste:</strong> Explore diferentes perfis de usuário com credenciais simuladas.
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1.5}>
            <AccountTree color="primary" />
            <Typography variant="body2">
              <strong>Visualização da Arquitetura:</strong> Navegue pela estrutura de arquivos e pastas dos projetos.
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Chat color="primary" />
            <Typography variant="body2">
              <strong>ChatBot de Debug:</strong> Teste as funcionalidades do chatbot em um ambiente de depuração.
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Settings color="primary" />
            <Typography variant="body2">
              <strong>Configurações de Ambiente:</strong> Simule diferentes cenários e configurações sem impactar a aplicação real.
            </Typography>
          </Stack>
        </Stack>
      </DialogContent>

      <DialogActions sx={{ p: 3, justifyContent: 'center' }}>
        <Button 
          onClick={onClose} 
          variant="contained" 
          color="primary"
          sx={{ borderRadius: '8px', px: 4, py: 1.5, textTransform: 'none' }}
        >
          Entendido
        </Button>
      </DialogActions>
    </Dialog>
  );
};
