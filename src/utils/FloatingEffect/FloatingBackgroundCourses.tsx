// src/components/FloatingBackgroundCourses.tsx
import { Container, FloatingIcon, TransitionTop, TransitionBottom } from "./FloatingBackgroundBase";
import { FaBookOpen, FaCertificate, FaChalkboardTeacher } from "react-icons/fa";

export const FloatingBackgroundCourses = () => {
  return (
    <Container>
      {/* Livro (estudo) */}
      <FloatingIcon sx={{
        top: "20%", left: "25%",
        "--x-mid1": "20px", "--y-mid1": "-15px",
        "--x-mid2": "-15px", "--y-mid2": "20px",
        "--x-mid3": "25px", "--y-mid3": "-20px",
        "--animation-duration": "18s",
      }}>
        <FaBookOpen />
      </FloatingIcon>

      {/* Certificado */}
      <FloatingIcon sx={{
        top: "55%", right: "20%",
        "--x-mid1": "-20px", "--y-mid1": "20px",
        "--x-mid2": "15px", "--y-mid2": "-25px",
        "--x-mid3": "-10px", "--y-mid3": "15px",
        "--animation-duration": "20s",
      }}>
        <FaCertificate />
      </FloatingIcon>

      {/* Professor */}
      <FloatingIcon sx={{
        bottom: "10%", left: "50%",
        "--x-mid1": "15px", "--y-mid1": "-20px",
        "--x-mid2": "-25px", "--y-mid2": "15px",
        "--x-mid3": "20px", "--y-mid3": "-10px",
        "--animation-duration": "19s",
      }}>
        <FaChalkboardTeacher />
      </FloatingIcon>

      <TransitionTop />
      <TransitionBottom />
    </Container>
  );
};
