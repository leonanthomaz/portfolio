// src/components/Intro/index.tsx
import Typewriter from 'typewriter-effect';
import { Box } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { 
  IntroContainer, 
  TypewriterEffect, 
  DownloadButton, 
  ArrowDown, 
  TitleWrapper, 
  Right, 
  Left, 
  NameText, 
  FirstName, 
  LastName 
} from './IntroStyles';
import curriculo from '@/assets/docs/curriculo.pdf';

export const Intro = () => {
  
  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = curriculo;
    link.download = 'Curriculo_Leonan_Thomaz.pdf';
    link.click();
  };

  return (
    <IntroContainer>
      <Box sx={{ textAlign: 'center', zIndex: 2, paddingTop: '20vh', position: 'relative' }}>
        <Left>
          <NameText>
            <FirstName>Leonan</FirstName> <LastName>Thomaz</LastName>
          </NameText>
          <TitleWrapper>
            <TypewriterEffect>
              <Typewriter
                options={{
                  strings: [
                    'Análise de Dados com Python',
                    'Automação de Processos',
                    'Bioinformática em Formação',
                  ],
                  autoStart: true,
                  delay: 75,
                  loop: true,
                }}
              />
            </TypewriterEffect>
          </TitleWrapper>
        </Left>

        <Right>
          <DownloadButton onClick={handleDownloadClick}>
            Baixar Currículo
          </DownloadButton>
          <ScrollLink 
            to="about" 
            smooth={true} 
            duration={500} 
            spy={true}
            offset={-80}
          >
            <ArrowDown />
          </ScrollLink>
        </Right>
      </Box>
    </IntroContainer>
  );
};
