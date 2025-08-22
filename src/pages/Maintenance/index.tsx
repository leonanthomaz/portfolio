import { Box, Typography, Button } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";

export const MaintenancePage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(to right, #1e3c72, #2a5298)",
        color: "white",
        p: 4,
      }}
    >
      <ConstructionIcon sx={{ fontSize: 80, mb: 2 }} />
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        🚧 Site em manutenção 🚧
      </Typography>
      <Typography variant="h6" sx={{ mb: 3, maxWidth: "600px" }}>
        Estou ajustando alguns detalhes no meu portfólio.  
        Volte em breve para conferir as novidades! 🚀
      </Typography>
      <Button
        variant="contained"
        sx={{
          borderRadius: "2rem",
          px: 4,
          py: 1.5,
          fontWeight: "bold",
          background: "linear-gradient(135deg, #ff6a00, #ee0979)",
          "&:hover": {
            background: "linear-gradient(135deg, #ee0979, #ff6a00)",
          },
        }}
        onClick={() => window.location.reload()}
      >
        Tentar novamente
      </Button>
    </Box>
  );
};
