import { Box } from "@mui/material";
import AdminId from "./AdminId";
import OTP from "./OTP";

const Index = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F2E3FF",
          color: "black",
          py: 4,
        }}
      >
        <p className="text-2xl text-center font-light">
          Sign in to manage challenges, track user progress, review mentorship
          contributions,
          <br /> and maintain community engagement
        </p>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: 14,
        }}
      >
        <img src="/images/devspax.svg" className="h-8" alt=" Logo" />
      </Box>
      <Box>
        <AdminId />
        {/* <OTP /> */}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
          flexDirection: "column",
          mt: 20,
        }}
      >
        <p className="text-1xl text-center font-thin">
          © 2025 Devspax. All rights reserved.
        </p>
      </Box>
    </Box>
  );
};

export default Index;
