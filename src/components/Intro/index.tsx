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
    window.location.href = curriculo;
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
                  strings: ['Desenvolvedor Python', 'Automação de Processos', 'Desenvolvimento de APIs', 'Integração de Sistemas'],
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
            Meu Currículo
          </DownloadButton>
          <ScrollLink 
            to="about" 
            smooth={true} 
            duration={500} 
            offset={-60}
            spy={true}
          >
            <ArrowDown />
          </ScrollLink>
        </Right>
      </Box>
    </IntroContainer>
  );
};
