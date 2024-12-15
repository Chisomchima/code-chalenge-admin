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
        paddingTop: "90px", // Adjust for the fixed header height
        ...(isSmallNavOpen && {
          margin: 0,
          height: { xs: "100%", md: "100vh" },
          overflow: { xs: "hidden", md: "visible" },
        }),
        ...(isLargeNavOpen && { marginLeft: { xs: "0px", md: "300px" } }),
        padding: "5px 30px 80px 25px",
      }}
    >
      {children}
    </Box>
  );
};

export default MainContent;
