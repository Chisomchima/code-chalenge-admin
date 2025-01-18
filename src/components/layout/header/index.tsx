import React, { useEffect } from "react";
import {
  Box,
  Typography,
  InputBase,
  Badge,
  Avatar,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { Navigation } from "../../../utils/Enums";
import Cookies from 'js-cookie'

const Header: React.FC<{
  small: boolean;
  large: boolean;
  openSmallClick: () => void;
  openLargeClick: () => void;
}> = ({ large }) => {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.split('/')[1];

    if (currentPath === "challenges") {
      console.log("We are on the Challenges page!");
    }
  }, [location]);

  const getHeaderTitle = (path: string): string => {
    const firstPath = path.split('/')[1];
    switch (firstPath) {
      case "":
        return Navigation.Dashboard;
      case "challenges":
        return Navigation.ChallengePage;
      case "users":
        return Navigation.users;
      case "community":
        return Navigation.community;
      case "admins":
        return Navigation.admins;
      default:
        return "Unknown Page";
    }
  };

  const profile = Cookies.get('adminProfile')
  let firstName = "";
  let lastName = "";
  if (profile) {
    const profileData = JSON.parse(profile);
    firstName = profileData.firstName;
    lastName = profileData.lastName;
  }

  return (
    <Box
      sx={{
        height: "90px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start", // Align content to the right
        position: "sticky",
        top: 0,
        backgroundColor: "white",
        ...(large && { marginLeft: { xs: "0px", md: "17.5rem" } }),
        zIndex: 1000,
        borderBottom: "1px solid #e0e0e0",
        padding: "0 16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "0 16px",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: "normal", color: "#28004B" }}
          >
            {getHeaderTitle(location.pathname)}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "gray", fontWeight: "lighter" }}
          >
            Monday, 19th August 2024.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f1f1f1",
              borderRadius: "8px",
              padding: "5px 10px",
              minWidth: "300px",
              marginRight: "5rem",
            }}
          >
            <SearchIcon sx={{ color: "gray", marginRight: "10px" }} />
            <InputBase placeholder="Search" sx={{ width: "100%" }} />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Avatar
              src="https://avatars.githubusercontent.com/u/68823331?v=4"
              alt="User Avatar"
              sx={{ width: "40px", height: "40px", marginRight: "10px" }}
            />
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="body1" sx={{ fontWeight: "normal" }}>
                {firstName} {lastName}
              </Typography>
              <Typography variant="caption" sx={{ color: "gray" }}>
                @Admin001
              </Typography>
            </Box>
            <IconButton sx={{ marginRight: "10px" }}>
              <Badge badgeContent={2} color="error">
                <IoNotificationsCircleOutline />
              </Badge>
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
