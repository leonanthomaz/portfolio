import GitHubCalendar from 'react-github-calendar';
import { Box, Container } from '@mui/material';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ContentBox, SectionContainer, Title } from '../../styles/GlobalStyles';

const GitHub = () => {
  return (
    <SectionContainer>
      <ContentBox>
        <AnimationOnScroll animateIn="animate__backInLeft">
          <Title>Tempo de código</Title>
        </AnimationOnScroll>

        <GitHubCalendar
          username="leonanthomaz"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />
      </ContentBox>
    </SectionContainer>
  );
};

export default GitHub;
