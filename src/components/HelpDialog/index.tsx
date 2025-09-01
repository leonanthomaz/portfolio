// components/HelpDialog.tsx
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Stack
} from '@mui/material';
import {
  Science,
  Key,
  AccountTree,
  Chat,
  Settings,
  Code
} from '@mui/icons-material';

interface HelpDialogProps {
  open: boolean;
  onClose: () => void;
}

export const HelpDialog: React.FC<HelpDialogProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 'bold' }}>
        Sandbox – Seu Laboratório de Testes
      </DialogTitle>
      <DialogContent dividers>
        <Stack spacing={2}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Science color="primary" />
            <Typography>
              <strong>Laboratório seguro:</strong> Teste projetos sem medo de quebrar nada.
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Key color="primary" />
            <Typography>
              <strong>Credenciais:</strong> É possível testar logins e permissões.
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <AccountTree color="primary" />
            <Typography>
              <strong>Tree dos projetos:</strong> Visualize a estrutura completa de arquivos e pastas.
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Chat color="primary" />
            <Typography>
              <strong>ChatBot Debug:</strong> Experimente o chatbot em um ambiente de bate-papo com debug.
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Settings color="primary" />
            <Typography>
              <strong>Ambiente controlado:</strong> Explore funcionalidades como se estivesse no projeto real.
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Code color="primary" />
            <Typography>
              <strong>Para acessar:</strong> Peça o código para conferir o sandbox.
            </Typography>
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button 
          onClick={onClose} 
          variant="contained" 
          color="primary"
          sx={{ borderRadius: '8px' }}
        >
          Entendi
        </Button>
      </DialogActions>
    </Dialog>
  );
};