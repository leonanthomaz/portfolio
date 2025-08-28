// src/components/FloatingBackgroundIntro.tsx
import { Container, FloatingIcon, TransitionTop, TransitionBottom } from "./FloatingBackgroundBase";
import { FaUserAstronaut, FaRocket } from "react-icons/fa";
import { SiPython, SiDjango, SiFlask } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";

export const FloatingBackgroundIntro = () => {
  return (
    <Container>
      {/* Python (principal) */}
      <FloatingIcon sx={{
        top: "15%", left: "10%",
        "--x-start": "0px", "--y-start": "0px",
        "--x-mid1": "25px", "--y-mid1": "-20px",
        "--x-mid2": "-15px", "--y-mid2": "15px",
        "--x-mid3": "20px", "--y-mid3": "-10px",
        "--rotate-start": "0deg", "--rotate-mid1": "8deg",
        "--rotate-mid2": "-5deg", "--rotate-mid3": "3deg",
        "--animation-duration": "25s",
        color: "rgba(55, 118, 171, 0.15)", // Azul Python
        fontSize: "clamp(6rem, 18vw, 15rem)",
      }}>
        <SiPython />
      </FloatingIcon>

      {/* Astronauta (exploração) */}
      <FloatingIcon sx={{
        top: "40%", right: "15%",
        "--x-start": "0px", "--y-start": "0px",
        "--x-mid1": "-30px", "--y-mid1": "25px",
        "--x-mid2": "20px", "--y-mid2": "-20px",
        "--x-mid3": "-15px", "--y-mid3": "15px",
        "--rotate-start": "-3deg", "--rotate-mid1": "5deg",
        "--rotate-mid2": "-7deg", "--rotate-mid3": "2deg",
        "--animation-duration": "22s",
        color: "rgba(255, 255, 255, 0.12)",
        fontSize: "clamp(4rem, 10vw, 8rem)",
      }}>
        <FaUserAstronaut />
      </FloatingIcon>

      {/* Django */}
      <FloatingIcon sx={{
        bottom: "20%", left: "20%",
        "--x-start": "0px", "--y-start": "0px",
        "--x-mid1": "15px", "--y-mid1": "-25px",
        "--x-mid2": "-20px", "--y-mid2": "15px",
        "--x-mid3": "10px", "--y-mid3": "-20px",
        "--rotate-start": "2deg", "--rotate-mid1": "-4deg",
        "--rotate-mid2": "3deg", "--rotate-mid3": "-2deg",
        "--animation-duration": "18s",
        color: "rgba(9, 70, 45, 0.12)", // Verde Django
        fontSize: "clamp(3rem, 8vw, 6rem)",
      }}>
        <SiDjango />
      </FloatingIcon>

      {/* Foguete (crescimento/progresso) */}
      <FloatingIcon sx={{
        top: "25%", right: "40%",
        "--x-start": "0px", "--y-start": "0px",
        "--x-mid1": "10px", "--y-mid1": "-30px",
        "--x-mid2": "-25px", "--y-mid2": "20px",
        "--x-mid3": "15px", "--y-mid3": "-25px",
        "--rotate-start": "-5deg", "--rotate-mid1": "10deg",
        "--rotate-mid2": "-8deg", "--rotate-mid3": "5deg",
        "--animation-duration": "20s",
        color: "rgba(253, 106, 6, 0.12)", // Laranja foguete
        fontSize: "clamp(3.5rem, 9vw, 7rem)",
      }}>
        <FaRocket />
      </FloatingIcon>

      {/* Flask */}
      <FloatingIcon sx={{
        bottom: "35%", right: "25%",
        "--x-start": "0px", "--y-start": "0px",
        "--x-mid1": "-15px", "--y-mid1": "20px",
        "--x-mid2": "25px", "--y-mid2": "-15px",
        "--x-mid3": "-10px", "--y-mid3": "25px",
        "--rotate-start": "3deg", "--rotate-mid1": "-6deg",
        "--rotate-mid2": "4deg", "--rotate-mid3": "-3deg",
        "--animation-duration": "17s",
        color: "rgba(0, 0, 0, 0.1)", // Preto Flask
        fontSize: "clamp(2.5rem, 7vw, 5rem)",
      }}>
        <SiFlask />
      </FloatingIcon>

      {/* VS Code */}
      <FloatingIcon sx={{
        top: "65%", left: "30%",
        "--x-start": "0px", "--y-start": "0px",
        "--x-mid1": "20px", "--y-mid1": "-15px",
        "--x-mid2": "-10px", "--y-mid2": "25px",
        "--x-mid3": "15px", "--y-mid3": "-20px",
        "--rotate-start": "-2deg", "--rotate-mid1": "4deg",
        "--rotate-mid2": "-3deg", "--rotate-mid3": "2deg",
        "--animation-duration": "19s",
        color: "rgba(36, 159, 223, 0.12)", // Azul VS Code
        fontSize: "clamp(2.8rem, 7.5vw, 5.5rem)",
      }}>
        <TbBrandVscode />
      </FloatingIcon>

      {/* Inteligência Artificial */}
      <FloatingIcon sx={{
        top: "50%", left: "60%",
        "--x-start": "0px", "--y-start": "0px",
        "--x-mid1": "-20px", "--y-mid1": "15px",
        "--x-mid2": "10px", "--y-mid2": "-25px",
        "--x-mid3": "-15px", "--y-mid3": "20px",
        "--rotate-start": "4deg", "--rotate-mid1": "-7deg",
        "--rotate-mid2": "5deg", "--rotate-mid3": "-4deg",
        "--animation-duration": "21s",
        color: "rgba(0, 209, 178, 0.12)", // Verde AI
        fontSize: "clamp(3.2rem, 8.5vw, 6.5rem)",
      }}>
        <GiArtificialIntelligence />
      </FloatingIcon>

      <TransitionTop />
      <TransitionBottom />
    </Container>
  );
};