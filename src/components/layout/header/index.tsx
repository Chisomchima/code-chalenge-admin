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
const Header: React.FC<{
  small: boolean;
  large: boolean;
  openSmallClick: () => void;
  openLargeClick: () => void;
}> = ({ large }) => {
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
            variant="h4"
            sx={{ fontWeight: "bold", color: "#28004B" }}
          >
            Dash Board
          </Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>
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
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Precious Fredrick
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
