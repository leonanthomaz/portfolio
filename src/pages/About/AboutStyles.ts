import styled from 'styled-components';
import { Box, Typography, Button } from '@mui/material';

export const AboutContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  /* Garantir que os itens estejam centralizados */
  color: #ffeb3b;
  padding: 60px 20px;
  text-align: center;
  min-height: 100vh;
`;

export const Description = styled(Typography)`
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 800px;
  margin-bottom: 30px;
  color: #ddd;
  font-weight: 400;
  text-align: center; /* Adicionado para centralizar o texto */
`;

export const HighlightText = styled.span`
  font-weight: bold;
  color: #ffeb3b;
`;

export const ImageSection = styled(Box)`
  margin: 40px 0;
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #ffeb3b;
`;

export const AboutButton = styled(Button)`
  background-color: #ffeb3b;
  color: #121212;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 30px;
  margin-top: 20px;
  text-transform: uppercase;

  &:hover {
    background-color: #ff9800;
  }
`;
