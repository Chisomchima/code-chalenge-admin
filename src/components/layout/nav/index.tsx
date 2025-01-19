import React from "react";
import { Box, Button, Popover } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { navConfig } from "./config";
import { NavItem } from "./item";
import SubmissionHubCard from "../SubmissionHubCard";
import AlertDialog from "../../Reusable-Dialog";
import { FiLogOut } from "react-icons/fi";
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

const Nav: React.FC<{
  large: boolean;
  small: boolean;
  closeLargeNav: () => void;
  closeSmallNav: () => void;
}> = ({ large, small }) => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleLogout = () => {
    Cookies.remove('authToken', { path: '/' });
    Cookies.remove('adminProfile', { path: '/' });

    toast.success('Logged out successfully!');

    window.location.href = '/login';
  };
  
  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickClose = () => {
    setOpenDialog(false);
  };

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
                    isActive={
                      item.path === "/"
                        ? location.pathname === "/"
                        : location.pathname.startsWith(item.path)
                    }
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
            <Box sx={{ paddingRight: "1rem", paddingTop: "2rem", width: "100%" }}>
              <Button
                variant="outlined"
                onClick={handleClickOpen}
                startIcon={<FiLogOut />}
                sx={{
                  width: "100%",
                  borderRadius: "10px",
                  fontSize: "14px",
                  fontWeight: "500",
                  textTransform: "none",
                  color: "black",
                  justifyContent: "flex-start",
                  textAlign: "left",
                  py: 1,
                }}
              >
                Logout
              </Button>
            </Box>
            <Box
              sx={{
                position: "absolute",
                right: { xs: -40, sm: 0 },
                top: { md: 0 },
                width: "100%", // Make the box wider
              }}
            >
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                sx={{ zIndex: 10000, width: "50rem" }}
              />
              <AlertDialog
                open={openDialog}
                onClose={handleClickClose}
                onAgree={handleLogout}
                title={"Logout"}
                content={" Are you sure?"}
                disagreeText={"Cancel"}
                agreeText={"Yes, continue"}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
