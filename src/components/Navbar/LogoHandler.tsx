import { Typography, Link } from "@mui/material";
import { GitHub } from "@mui/icons-material";

function LogoHandler() {
  return (
    <Link
      href="https://github.com/leonanthomaz"
      target="_blank"
      underline="none"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        color: "inherit",
        "&:hover": { opacity: 0.8 },
      }}
    >
      <GitHub sx={{ fontSize: 26, color: "text.primary" }} />
      <Typography
        variant="h6"
        sx={{
          fontFamily: "JetBrains Mono, monospace",
          fontWeight: 600,
        }}
      >
        @leonanthomaz
      </Typography>
    </Link>
  );
}

export default LogoHandler;
