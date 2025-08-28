// src/components/FloatingBackgroundAbout.tsx
import { Container, FloatingIcon, TransitionTop, TransitionBottom } from "./FloatingBackgroundBase";
import { FaUser, FaLightbulb, FaRocket } from "react-icons/fa";

export const FloatingBackgroundAbout = () => {
  return (
    <Container>
      {/* Usuário (perfil pessoal) */}
      <FloatingIcon sx={{
        top: "20%", left: "25%",
        "--x-mid1": "20px", "--y-mid1": "-15px",
        "--x-mid2": "-15px", "--y-mid2": "20px",
        "--x-mid3": "25px", "--y-mid3": "-20px",
        "--animation-duration": "18s",
      }}>
        <FaUser />
      </FloatingIcon>

      {/* Ideias (insights / visão) */}
      <FloatingIcon sx={{
        top: "55%", right: "25%",
        "--x-mid1": "-20px", "--y-mid1": "20px",
        "--x-mid2": "15px", "--y-mid2": "-25px",
        "--x-mid3": "-10px", "--y-mid3": "15px",
        "--animation-duration": "20s",
      }}>
        <FaLightbulb />
      </FloatingIcon>

      {/* Foguete (trajetória / crescimento) */}
      <FloatingIcon sx={{
        bottom: "15%", left: "50%",
        "--x-mid1": "15px", "--y-mid1": "-20px",
        "--x-mid2": "-25px", "--y-mid2": "15px",
        "--x-mid3": "20px", "--y-mid3": "-10px",
        "--animation-duration": "19s",
      }}>
        <FaRocket />
      </FloatingIcon>

      <TransitionTop />
      <TransitionBottom />
    </Container>
  );
};
