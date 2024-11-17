import Typewriter from 'typewriter-effect';
import { Box } from '@mui/material';
import { Link } from 'react-scroll';
import { IntroContainer, TypewriterEffect, DownloadButton, ArrowDown, TitleWrapper, TitleText, Right, Left, NameText, FirstName, LastName } from './IntroStyles';
import curriculo from '@/assets/docs/curriculo.pdf';

const Intro = () => {
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
            <TitleText>Desenvolvedor</TitleText>
            <TypewriterEffect>
              <Typewriter
                options={{
                  strings: ['FullStack', 'Frontend', 'Backend'],
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

          <Link to="about" smooth={true} duration={500}>
            <ArrowDown />
          </Link>
        </Right>
      </Box>
    </IntroContainer>
  );
};

export default Intro;
