// src/components/FloatingBackgroundExperience.tsx
import { Container, FloatingIcon, TransitionTop, TransitionBottom } from "./FloatingBackgroundBase";
import { FaBriefcase, FaProjectDiagram, FaTools } from "react-icons/fa";

export const FloatingBackgroundExperience = () => {
  return (
    <Container>
      {/* Maleta (trabalho) */}
      <FloatingIcon sx={{
        top: "15%", left: "20%",
        "--x-mid1": "15px", "--y-mid1": "-20px",
        "--x-mid2": "-10px", "--y-mid2": "25px",
        "--x-mid3": "20px", "--y-mid3": "-15px",
        "--animation-duration": "18s",
      }}>
        <FaBriefcase />
      </FloatingIcon>

      {/* Projetos */}
      <FloatingIcon sx={{
        top: "45%", right: "30%",
        "--x-mid1": "-20px", "--y-mid1": "10px",
        "--x-mid2": "25px", "--y-mid2": "-20px",
        "--x-mid3": "-15px", "--y-mid3": "15px",
        "--animation-duration": "20s",
      }}>
        <FaProjectDiagram />
      </FloatingIcon>

      {/* Ferramentas */}
      <FloatingIcon sx={{
        bottom: "15%", left: "40%",
        "--x-mid1": "20px", "--y-mid1": "-25px",
        "--x-mid2": "-15px", "--y-mid2": "20px",
        "--x-mid3": "25px", "--y-mid3": "-10px",
        "--animation-duration": "19s",
      }}>
        <FaTools />
      </FloatingIcon>

      <TransitionTop />
      <TransitionBottom />
    </Container>
  );
};
