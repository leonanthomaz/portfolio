import GitHubCalendar from 'react-github-calendar';
import { Box, Container } from '@mui/material';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Title } from '../../styles/GlobalStyles';

const GitHub = () => {
  return (
    <Container>
      <Box sx={{ padding: 4, borderRadius: '8px'}}>
        <AnimationOnScroll animateIn="animate__backInLeft">
          <Title>Tempo de código</Title>
        </AnimationOnScroll>

        <GitHubCalendar
          username="leonanthomaz"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />
      </Box>
    </Container>
  );
};

export default GitHub;
