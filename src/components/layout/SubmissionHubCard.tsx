import React from "react";
import { Card, CardContent, Typography, Box} from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export const SubmissionHubCard: React.FC = () => {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        backgroundColor: "#210c52",
        color: "white",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
        padding: 2,
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="start">
          <Typography component={"p"} fontWeight="bold">
            Submission Hub
          </Typography>
          <Box
            sx={{
              display: "inline-block",
              backgroundColor: "#8e44ad",
              color: "white",
              padding: "4px 8px",
              borderRadius: "12px",
              fontSize: "0.75rem",
              fontWeight: 600,
            }}
          >
            UPDATES
          </Box>
        </Box>
        <Typography variant="body2" sx={{ opacity: 0.8, marginTop: 1 }}>
          Centralized location for all submissions and requests.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <NotificationsActiveIcon sx={{ color: "white" }} />
            <Typography variant="subtitle1">Submissions</Typography>
          </Box>
          <Typography variant="h6" sx={{ color: "#FFA500" }}>
            29
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SubmissionHubCard;
