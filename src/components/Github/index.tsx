import GitHubCalendar from "react-github-calendar";
import { Box } from '@mui/material';
import { Title } from "../../styles/GlobalStyles";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const GitHub = () => {
  return (
    <Box sx={{ padding: 4 }}>
    <AnimationOnScroll animateIn="animate__backInLeft">
      <Title>Github</Title>
    </AnimationOnScroll>
    <GitHubCalendar
        username="leonanthomaz"
        blockSize={15}
        blockMargin={5}
        color="#6102ce"
        fontSize={16}
    />
    </Box>
  );
};

export default GitHub;
