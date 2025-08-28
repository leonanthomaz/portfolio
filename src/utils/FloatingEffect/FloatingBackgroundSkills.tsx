// src/components/FloatingBackgroundSkills.tsx
import { Container, FloatingIcon, TransitionTop, TransitionBottom } from "./FloatingBackgroundBase";
import { FaCode, FaDatabase, FaLaptopCode } from "react-icons/fa";

export const FloatingBackgroundSkills = () => {
  return (
    <Container>
      {/* Código */}
      <FloatingIcon sx={{
        top: "20%", left: "20%",
        "--x-mid1": "20px", "--y-mid1": "-15px",
        "--x-mid2": "-15px", "--y-mid2": "20px",
        "--x-mid3": "25px", "--y-mid3": "-20px",
        "--animation-duration": "18s",
      }}>
        <FaCode />
      </FloatingIcon>

      {/* Banco de dados */}
      <FloatingIcon sx={{
        top: "60%", right: "30%",
        "--x-mid1": "-20px", "--y-mid1": "20px",
        "--x-mid2": "15px", "--y-mid2": "-25px",
        "--x-mid3": "-10px", "--y-mid3": "15px",
        "--animation-duration": "20s",
      }}>
        <FaDatabase />
      </FloatingIcon>

      {/* Frontend/Dev laptop */}
      <FloatingIcon sx={{
        bottom: "15%", left: "45%",
        "--x-mid1": "15px", "--y-mid1": "-20px",
        "--x-mid2": "-25px", "--y-mid2": "15px",
        "--x-mid3": "20px", "--y-mid3": "-10px",
        "--animation-duration": "19s",
      }}>
        <FaLaptopCode />
      </FloatingIcon>

      <TransitionTop />
      <TransitionBottom />
    </Container>
  );
};
