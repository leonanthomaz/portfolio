import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const ProjetosContainer = styled(Box)`
  color: #fff;
`;

export const ProjetoCard = styled(Box)`
  cursor: pointer;
  border: 2px solid #ffeb3b;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  width: 100%;
  max-width: 300px;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const ProjetoImage = styled('img')`
  width: 100%;
  height: auto;
  border-bottom: 2px solid #ffeb3b;
`;

export const ProjetoDetails = styled(Box)`
  padding: 20px;
`;

export const ProjetoTitle = styled(Typography)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffeb3b;
`;

export const ProjetoSubtitle = styled(Typography)`
  font-size: 1.2rem;
  color: #fff;
`;

export const ProjetoDescription = styled(Typography)`
  font-size: 1rem;
  color: #ccc;
  margin-top: 10px;
`;

// Modificar LinkButton para um styled component baseado em <a>
export const LinkButton = styled('a')`
  display: inline-block;
  background-color: #ffeb3b;
  color: #121212;
  font-size: 1rem;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: #ff9800;
  }
`;

export const ModalContent = styled(Box)`
  .MuiTypography-body1 {
    color: #333;
  }

  .MuiBox-root {
    padding-bottom: 20px;
  }

  /* Estilo da rolagem */
  .MuiBox-root::-webkit-scrollbar {
    width: 8px;
  }

  .MuiBox-root::-webkit-scrollbar-thumb {
    background-color: #ffeb3b;
    border-radius: 10px;
  }

  .MuiBox-root::-webkit-scrollbar-track {
    background-color: #212121;
  }
`;

// Mensagem quando não há projetos disponíveis
export const ProjetoEmpty = styled('div')`
  display: flex;
  flex-direction: column; // Adiciona direção coluna para centralizar ícone e texto
  justify-content: center;
  align-items: center;
  height: 200px; // Ajuste conforme necessário
  border-radius: 10px;
  text-align: center;
  font-size: 18px;
  font-family: 'Josefin Sans', sans-serif;

  svg {
    margin-bottom: 15px; // Espaço entre o ícone e o texto
  }

  p {
    margin: 0;
    padding: 0 20px; // Ajusta o padding horizontal
  }
`;