import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import theme from '../../styles/theme';

export const IntroContainer = styled(Box)`
  height: 100vh;
  width: 100%;
  background-image: url('https://img.freepik.com/vetores-gratis/fundo-de-formas-abstratas-brancas_79603-1362.jpg?w=2000');
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);
    z-index: 1;
  }
`;

export const NameText = styled('h1')`
  font-size: 4rem;
  font-weight: 900;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 10px;
  text-transform: uppercase;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const FirstName = styled('span')`
  color: ${theme.palette.text.primary};
`;

export const LastName = styled('span')`
  color: ${theme.palette.primary.main};
`;

export const StaticText = styled('span')`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const TypewriterEffect = styled('div')`
  font-size: 2.5rem;
  font-weight: bold;
  color: yellow;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const TitleWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Left = styled('div')``;

export const Right = styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const DownloadButton = styled(Button)`
  width: 250px;
  height: 45px;
  margin-top: 30px;
  background-color: ${theme.palette.primary.main};
  color: #242424;
  font-size: 16px;
  border-radius: 8px;
  text-transform: none;
  padding: 8px 16px;
  &:hover {
    background-color: ${theme.palette.secondary.main};
  }
`;

export const ArrowDown = styled(ArrowDownwardIcon)`
  margin-top: 20px;
  font-size: 3rem;
  color: ${theme.palette.primary.main};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(10px);
  }
`;
