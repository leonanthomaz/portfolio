import GitHubCalendar from 'react-github-calendar';
import { Box } from '@mui/material';

const GitHub = () => {
  return (
    <Box sx={{ padding: 4 }}>
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
