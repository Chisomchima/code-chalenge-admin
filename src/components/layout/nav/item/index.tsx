import { Box } from "@mui/material";
import { ReactNode } from "react";

export const NavItem: React.FC<{
  icon: ReactNode; // Change icon type to ReactNode
  title: string;
  isActive: boolean;
}> = ({ icon, title, isActive }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        "&:hover": { color: "#A238FF" },
        ...(isActive && {
          backgroundColor: "#F2E3FF",
          color: "#A238FF",
          "&:hover": { color: "#A238FF" },
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }),
        pt: "15px",
        pb: "10px",
        px: "10px",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ mr: { xs: "20px", md: "10px" } }}>{icon}</Box>
      <Box>{title}</Box>
    </Box>
  );
};
