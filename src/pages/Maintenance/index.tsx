import { Box, Typography, Button, useTheme } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";

export const MaintenancePage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(to right, #181818ff, #323232ff)",
        color: "white",
        p: 4,
      }}
    >
      <ConstructionIcon
        sx={{ fontSize: 80, mb: 2, color: theme.palette.primary.main }}
      />
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        🚧 Site em manutenção 🚧
      </Typography>
      <Typography
        variant="h6"
        sx={{
          mb: 3,
          maxWidth: "600px",
          color: theme.palette.text.secondary,
        }}
      >
        Estou ajustando alguns detalhes no meu portfólio.  
        Volte em breve para conferir as novidades! 🚀
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => window.location.reload()}
      >
        Tentar novamente
      </Button>
    </Box>
  );
};
