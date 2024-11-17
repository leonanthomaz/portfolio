import React from 'react';
import { Title } from '../../styles/GlobalStyles';
import {
  SobreContainer,
  Description,
  HighlightText,
  ImageSection,
  ProfileImage,
} from './SobreStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Box } from '@mui/material';
import photo from '@/assets/img/foto-leonan-atual.webp';

export const About: React.FC = () => {
  return (
    <SobreContainer>
      <AnimationOnScroll animateIn="animate__backInLeft">
        <Title>Sobre Mim</Title>
      </AnimationOnScroll>
      <ImageSection>
        <ProfileImage
          src={photo ? photo : 'https://via.placeholder.com/200'}
          alt="Minha foto"
        />
      </ImageSection>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'left',
        }}
      >
        <Description>
          Sou um <HighlightText>desenvolvedor de software</HighlightText> com experiência em <HighlightText>front-end</HighlightText> e <HighlightText>back-end</HighlightText>. Trabalhei com <HighlightText>HTML, CSS, JavaScript</HighlightText> e apliquei <HighlightText>SEO</HighlightText>. No back-end, minha principal ferramenta é <HighlightText>Python</HighlightText>, utilizada para automação, integração de sistemas, e criação de APIs, além de <HighlightText>SQL</HighlightText> para bancos de dados.

          Em minha experiência profissional, além de atuar com <HighlightText>Python</HighlightText>, também trabalhei com <HighlightText>Java</HighlightText>, desenvolvendo soluções que atendem a demandas específicas. No entanto, foi com <HighlightText>Python</HighlightText> que encontrei maior versatilidade e eficiência.

          Hoje, sou freelancer, criando soluções personalizadas como automação de processos, desenvolvimento de APIs e scripts sob demanda para empresas. A flexibilidade de atuar por conta própria me permite explorar profundamente as possibilidades do <HighlightText>Python</HighlightText>.

          Paralelamente, estou cursando <HighlightText>Biomedicina</HighlightText>, com foco em <HighlightText>bioinformática</HighlightText> e <HighlightText>biotecnologia</HighlightText>, buscando explorar como a tecnologia pode contribuir para o avanço dessas áreas.
        </Description>
      </Box>
    </SobreContainer>
  );
};
