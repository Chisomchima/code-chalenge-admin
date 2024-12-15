import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { navConfig } from "./config";
import { NavItem } from "./item";
import SubmissionHubCard from "../SubmissionHubCard";

const Nav: React.FC<{
  large: boolean;
  small: boolean;
  closeLargeNav: () => void;
  closeSmallNav: () => void;
}> = ({ large, small }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        ...(large
          ? {
              ...(small
                ? {
                    position: { xs: "fixed", md: "static" },
                    zIndex: { xs: 10000, md: 0 },
                    backgroundColor: {
                      xs: "rgba(0, 0, 0, 0.3)",
                      md: "transparent",
                    },
                    width: { xs: "100%", md: "auto" },
                    minHeight: { xs: "100vh", md: 0 },
                    display: { xs: "block", md: "block" },
                  }
                : {}),
            }
          : {
              ...(small
                ? {
                    position: "fixed",
                    zIndex: 10000,
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    width: "100%",
                    minHeight: "100vh",
                    display: { xs: "block", md: "none" },
                  }
                : {
                    /**No style applied when both navs are closed */
                  }),
            }),
      }}
    >
      <Box
        sx={{
          ...(large
            ? {
                ...(small
                  ? {
                      width: { xs: "200px", sm: "250px", md: "280px" },
                      display: "block",
                      paddingLeft: "20px",
                      position: { xs: "static", md: "fixed" },
                      backgroundColor: { xs: "white", md: "transparent" },
                      minHeight: { xs: "100vh", md: 0 },
                    }
                  : {
                      width: "280px",
                      display: { xs: "none", md: "block" },
                      paddingLeft: "1rem",
                      position: "fixed",
                    }),
              }
            : {
                ...(small
                  ? {
                      width: { xs: "200px", sm: "250px" },
                      display: { xs: "block", md: "none" },
                      paddingLeft: "20px",
                      backgroundColor: "white",
                      minHeight: "100vh",
                    }
                  : {
                      display: "none",
                    }),
              }),
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            height: "90px",
            ...(large && { paddingRight: "5px" }),
            ...(small && { paddingRight: "15px" }),
            borderRight: "1px solid #e0e0e0",
          }}
        >
          <img src="/images/devspax.svg" className="h-8" alt=" Logo" />
        </Box>
        <Box
          sx={{
            height: "100vh",
            overflow: "auto",
            borderRight: "1px solid #e0e0e0",
          }}
        >
          <Box
            sx={{
              paddingTop: "50px",
              position: "relative",
              height: "80%",
            }}
          >
            {navConfig.map((item: any) => (
              <Box key={item.title} sx={{ mb: "1rem", mr: "20px" }}>
                <Box onClick={() => navigate(item.path)}>
                  <NavItem
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    isActive={location.pathname === item.path}
                  />
                </Box>
              </Box>
            ))}
            <Box
              sx={{
                paddingRight: "1rem",
                paddingTop: "5rem",
              }}
            >
              <SubmissionHubCard />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
