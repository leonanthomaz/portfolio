import GitHubCalendar from 'react-github-calendar';
import { Box } from '@mui/material';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Title } from '../../styles/GlobalStyles';

const GitHub = () => {
  return (
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
  );
};

export default GitHub;
