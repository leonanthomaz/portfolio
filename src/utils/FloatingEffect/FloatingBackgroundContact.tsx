// src/components/FloatingBackgroundContact.tsx
import { Container, FloatingIcon, TransitionTop, TransitionBottom } from "./FloatingBackgroundBase";
import { FaEnvelope, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

export const FloatingBackgroundContact = () => {
  return (
    <Container>
      {/* Email */}
      <FloatingIcon sx={{
        top: "15%", left: "30%",
        "--x-mid1": "15px", "--y-mid1": "-20px",
        "--x-mid2": "-10px", "--y-mid2": "25px",
        "--x-mid3": "20px", "--y-mid3": "-15px",
        "--animation-duration": "18s",
      }}>
        <FaEnvelope />
      </FloatingIcon>

      {/* Telefone */}
      <FloatingIcon sx={{
        top: "50%", right: "25%",
        "--x-mid1": "-20px", "--y-mid1": "10px",
        "--x-mid2": "25px", "--y-mid2": "-20px",
        "--x-mid3": "-15px", "--y-mid3": "15px",
        "--animation-duration": "20s",
      }}>
        <FaPhoneAlt />
      </FloatingIcon>

      {/* Aviãozinho (enviar mensagem) */}
      <FloatingIcon sx={{
        bottom: "10%", left: "45%",
        "--x-mid1": "20px", "--y-mid1": "-25px",
        "--x-mid2": "-15px", "--y-mid2": "20px",
        "--x-mid3": "25px", "--y-mid3": "-10px",
        "--animation-duration": "19s",
      }}>
        <FaPaperPlane />
      </FloatingIcon>

      <TransitionTop />
      <TransitionBottom />
    </Container>
  );
};
