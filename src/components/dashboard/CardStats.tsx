import React from "react";
import { Box, Typography } from "@mui/material";

interface CardStatsProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  growth: string;
  growthPercentage: string;
  isGrowthPositive: boolean;
  isLast?: boolean;
}

const CardStats: React.FC<CardStatsProps> = ({
  title,
  value,
  icon,
  growth,
  growthPercentage,
  isGrowthPositive,
  isLast,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        borderRight: isLast ? "none" : ".3px solid #E5E5E5",
        gap: "1rem",
        padding: "20px",
        width: "25%",
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#2C2C2C" }}>
          {value}
        </Typography>
        <Typography variant="body2" sx={{ color: "#666" }}>
          {title}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: isGrowthPositive ? "green" : "red",
            fontWeight: "bold",
            marginTop: "8px",
            display: "block",
          }}
        >
          {isGrowthPositive ? "▲" : "▼"} {growth} {growthPercentage}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "10%",
          padding: "15px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        {icon}
      </Box>
    </Box>
  );
};

export default CardStats;
