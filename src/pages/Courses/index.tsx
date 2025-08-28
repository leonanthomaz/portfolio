import { Box, Typography, styled, useTheme, alpha, useMediaQuery } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  timelineOppositeContentClasses,
} from '@mui/lab';
import { FaUniversity, FaCertificate } from 'react-icons/fa';
import { Title } from '../../styles/GlobalStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';

// Componente estilizado para o container principal
const CoursesContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4, 2),
  width: '100%',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.default,
}));

// Componente estilizado para o TimelineDot (fundo amarelo com ícones pretos)
const CustomTimelineDot = styled(TimelineDot)(({ theme }) => ({
  width: 'clamp(40px, 8vw, 60px)',
  height: 'clamp(40px, 8vw, 60px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.getContrastText(theme.palette.warning.main),
  backgroundColor: theme.palette.warning.main,
  border: `2px solid ${theme.palette.warning.dark}`,
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: `0 0 15px ${alpha(theme.palette.warning.main, 0.7)}`,
  },
}));

// Componente estilizado para o TimelineContent
const CustomTimelineContent = styled(TimelineContent)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  backgroundColor: alpha(theme.palette.background.paper, 0.7),
  borderRadius: '8px',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  boxShadow: `0 4px 12px ${alpha(theme.palette.background.paper, 0.2)}`,
  [`&.${timelineOppositeContentClasses.root}`]: {
    padding: theme.spacing(2, 3),
  },
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 8px 20px ${alpha(theme.palette.background.paper, 0.4)}`,
  },
}));

const courses = [
  {
    id: 1,
    icon: <FaUniversity size={24} />,
    title: "Análise e Desenvolvimento de Sistemas",
    year: "2021",
    description:
      "Graduação com foco em desenvolvimento de software, programação e banco de dados. Fundamentou minha base técnica para atuar em TI.",
    animation: "animate__fadeInRight",
  },
  {
    id: 2,
    icon: <FaUniversity size={24} />,
    title: "Engenharia de Software",
    year: "2024",
    description:
      "Pós-graduação com ênfase em metodologias ágeis, engenharia de requisitos e arquitetura de software, voltada para soluções modernas.",
    animation: "animate__fadeInLeft",
  },
  {
    id: 3,
    icon: <FaCertificate size={24} />,
    title: "Bootcamp de Automação em Python - Dio",
    year: "2024",
    description:
      "Bootcamp cobrindo automação com bibliotecas essenciais como Selenium, BeautifulSoup, Pandas, NumPy e Requests.",
    animation: "animate__fadeInRight",
  },
];

export const Courses = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <CoursesContainer id="courses">
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <Title>Formação</Title>
      </AnimationOnScroll>
      
      {isLargeScreen ? (
        // Layout para telas grandes (web) - cards alternados
        <Timeline
          position="alternate"
          sx={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: 0,
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
          }}
        >
          {courses.map((course, index) => (
            <TimelineItem key={course.id}>
              <TimelineSeparator>
                <CustomTimelineDot>{course.icon}</CustomTimelineDot>
                {index < courses.length - 1 && (
                  <TimelineConnector
                    sx={{ 
                      backgroundColor: theme.palette.warning.main, 
                      width: '2px',
                      height: '100px'
                    }}
                  />
                )}
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  width: '100%',
                  maxWidth: '700px',
                  paddingY: 2,
                  display: 'flex',
                  justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                }}
              >
                <AnimationOnScroll animateIn={course.animation}>
                  <CustomTimelineContent
                    sx={{
                      width: '100%',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                        textAlign: index % 2 === 0 ? 'left' : 'right',
                      }}
                    >
                      {course.title}
                    </Typography>
                    {course.year && (
                      <Typography
                        color="text.secondary"
                        sx={{ 
                          fontSize: '1rem',
                          textAlign: index % 2 === 0 ? 'left' : 'right',
                        }}
                      >
                        {course.year}
                      </Typography>
                    )}
                    <Typography
                      variant="body2"
                      sx={{
                        marginTop: 1.5,
                        fontSize: '1rem',
                        color: theme.palette.text.primary,
                        lineHeight: 1.6,
                        textAlign: 'left',
                      }}
                    >
                      {course.description}
                    </Typography>
                  </CustomTimelineContent>
                </AnimationOnScroll>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      ) : (
        // Layout para telas pequenas (mobile) - todos os cards à direita
        <Box sx={{ 
          width: '100%', 
          maxWidth: '800px',
          margin: '0 auto',
          padding: { xs: '0 16px', sm: '0 24px' }
        }}>
          <Timeline
            sx={{
              padding: 0,
              margin: 0,
              '& .MuiTimelineItem-root:before': {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {courses.map((course, index) => (
              <TimelineItem key={course.id}>
                <TimelineSeparator>
                  <CustomTimelineDot>{course.icon}</CustomTimelineDot>
                  {index < courses.length - 1 && (
                    <TimelineConnector
                      sx={{ 
                        backgroundColor: theme.palette.warning.main, 
                        width: '2px',
                        height: '80px'
                      }}
                    />
                  )}
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    padding: '12px 16px',
                    marginBottom: 2,
                    flex: 1,
                    maxWidth: '100%',
                    marginLeft: 2,
                  }}
                >
                  <AnimationOnScroll animateIn={course.animation}>
                    <CustomTimelineContent
                      sx={{
                        width: '100%',
                        maxWidth: '100%',
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: theme.palette.text.primary,
                          textAlign: 'left',
                        }}
                      >
                        {course.title}
                      </Typography>
                      {course.year && (
                        <Typography
                          color="text.secondary"
                          sx={{ 
                            fontSize: '0.875rem',
                            marginTop: 0.5
                          }}
                        >
                          {course.year}
                        </Typography>
                      )}
                      <Typography
                        variant="body2"
                        sx={{
                          marginTop: 1.5,
                          fontSize: '0.875rem',
                          color: theme.palette.text.primary,
                          lineHeight: 1.6,
                        }}
                      >
                        {course.description}
                      </Typography>
                    </CustomTimelineContent>
                  </AnimationOnScroll>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      )}
    </CoursesContainer>
  );
};