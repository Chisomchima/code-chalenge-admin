import { Box } from "@mui/material";
import { ReactNode } from "react";

const MainContent: React.FC<{
  children: ReactNode;
  isSmallNavOpen: boolean;
  isLargeNavOpen: boolean;
}> = ({ children, isSmallNavOpen, isLargeNavOpen }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        ...(isSmallNavOpen && {
          margin: 0,
          height: { xs: "100%", md: "100vh" },
          overflow: { xs: "hidden", md: "visible" },
        }),
        ...(isLargeNavOpen && { marginLeft: { xs: "0px", md: "300px" } }),
      }}
    >
      {children}
    </Box>
  );
};

export default MainContent;
