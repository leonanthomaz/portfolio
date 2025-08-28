// src/components/FloatingBackground.tsx
import { Box, styled, alpha, keyframes } from "@mui/material";
import {
  FaPython, FaDocker, FaGitAlt, FaDatabase,
} from "react-icons/fa";
import {
  SiFastapi, SiFlask, SiDjango, SiSqlalchemy, SiPostgresql
} from "react-icons/si";

// animações
const moveParticle = keyframes`
  0%, 100% {
    transform: translate(var(--x-start), var(--y-start)) rotate(var(--rotate-start, 0deg));
  }
  25% {
    transform: translate(var(--x-mid1), var(--y-mid1)) rotate(var(--rotate-mid1, 5deg));
  }
  50% {
    transform: translate(var(--x-mid2), var(--y-mid2)) rotate(var(--rotate-mid2, -5deg));
  }
  75% {
    transform: translate(var(--x-mid3), var(--y-mid3)) rotate(var(--rotate-mid3, 2deg));
  }
`;

const Container = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  background: theme.palette.background.default ?? "#000",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: `
      radial-gradient(circle at 20% 30%, ${alpha(theme.palette.primary.main, 0.15)} 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, ${alpha(theme.palette.secondary.main, 0.1)} 0%, transparent 50%)
    `,
    zIndex: 1,
  },
}));

const FloatingIcon = styled(Box)(({ theme }) => ({
  position: "absolute",
  color: alpha(theme.palette.secondary.main, 0.08),
  fontSize: "clamp(5rem, 15vw, 12rem)",
  zIndex: 0,
  animation: `${moveParticle} var(--animation-duration, 15s) infinite ease-in-out`,
}));

// efeito de transição (cima/baixo esfumado)
const TransitionTop = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: "200px",
  background: `linear-gradient(to bottom, ${theme.palette.background.default} 20%, transparent)`,
  zIndex: 2,
  pointerEvents: "none",
}));

const TransitionBottom = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: "200px",
  background: `linear-gradient(to top, ${theme.palette.background.default} 20%, transparent)`,
  zIndex: 2,
  pointerEvents: "none",
}));

export const FloatingBackground = () => {
  return (
    <Container>
      {/* Python */}
      <FloatingIcon sx={{
        top: "15%", left: "10%",
        "--x-mid1": "20px", "--y-mid1": "-30px",
        "--x-mid2": "-10px", "--y-mid2": "10px",
        "--x-mid3": "30px", "--y-mid3": "-20px",
        "--animation-duration": "18s",
      }}>
        <FaPython />
      </FloatingIcon>

      {/* Flask */}
      <FloatingIcon sx={{
        top: "30%", left: "40%",
        "--x-mid1": "5px", "--y-mid1": "-15px",
        "--x-mid2": "-20px", "--y-mid2": "10px",
        "--x-mid3": "10px", "--y-mid3": "-5px",
        "--animation-duration": "16s",
      }}>
        <SiFlask />
      </FloatingIcon>

      {/* FastAPI */}
      <FloatingIcon sx={{
        top: "70%", right: "20%",
        "--x-mid1": "-15px", "--y-mid1": "25px",
        "--x-mid2": "20px", "--y-mid2": "-10px",
        "--x-mid3": "-5px", "--y-mid3": "30px",
        "--animation-duration": "17s",
      }}>
        <SiFastapi />
      </FloatingIcon>

      {/* Django */}
      <FloatingIcon sx={{
        top: "45%", right: "30%",
        "--x-mid1": "-5px", "--y-mid1": "25px",
        "--x-mid2": "15px", "--y-mid2": "-15px",
        "--x-mid3": "-20px", "--y-mid3": "5px",
        "--animation-duration": "18s",
      }}>
        <SiDjango />
      </FloatingIcon>

      {/* SQLAlchemy */}
      <FloatingIcon sx={{
        bottom: "5%", left: "60%",
        "--x-mid1": "30px", "--y-mid1": "-10px",
        "--x-mid2": "-10px", "--y-mid2": "20px",
        "--x-mid3": "20px", "--y-mid3": "-5px",
        "--animation-duration": "17s",
      }}>
        <SiSqlalchemy />
      </FloatingIcon>

      {/* Postgres */}
      <FloatingIcon sx={{
        bottom: "20%", right: "5%",
        "--x-mid1": "-20px", "--y-mid1": "5px",
        "--x-mid2": "10px", "--y-mid2": "-25px",
        "--x-mid3": "-30px", "--y-mid3": "10px",
        "--animation-duration": "15s",
      }}>
        <SiPostgresql />
      </FloatingIcon>

      {/* Docker */}
      <FloatingIcon sx={{
        bottom: "10%", left: "20%",
        "--x-mid1": "25px", "--y-mid1": "-10px",
        "--x-mid2": "-5px", "--y-mid2": "20px",
        "--x-mid3": "15px", "--y-mid3": "-25px",
        "--animation-duration": "19s",
      }}>
        <FaDocker />
      </FloatingIcon>

      {/* Git */}
      <FloatingIcon sx={{
        top: "5%", left: "70%",
        "--x-mid1": "-10px", "--y-mid1": "20px",
        "--x-mid2": "25px", "--y-mid2": "-5px",
        "--x-mid3": "-15px", "--y-mid3": "10px",
        "--animation-duration": "21s",
      }}>
        <FaGitAlt />
      </FloatingIcon>

      {/* Extra DB (genérico) */}
      <FloatingIcon sx={{
        top: "60%", left: "5%",
        "--x-mid1": "10px", "--y-mid1": "-20px",
        "--x-mid2": "-30px", "--y-mid2": "5px",
        "--x-mid3": "20px", "--y-mid3": "-15px",
        "--animation-duration": "20s",
      }}>
        <FaDatabase />
      </FloatingIcon>

      <TransitionTop />
      <TransitionBottom />
    </Container>
  );
};
