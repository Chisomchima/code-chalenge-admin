// StatsDashboard.tsx
import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import GroupIcon from "@mui/icons-material/Group";
import TimerIcon from "@mui/icons-material/Timer";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CardStats from "../ui/CardStats";

const StatsChallenges: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("Week");

  console.log("Active Filter:", activeFilter);
  const data = [
    {
      title: "Total Challenges",
      value: 224,
      icon: <TrendingUpIcon />,
      growth: "7.2",
      growthPercentage: "+1.51% this week",
      isGrowthPositive: true,
    },
    {
      title: "Number of Participants",
      value: "12,854",
      icon: <GroupIcon />,
      growth: "7.2",
      growthPercentage: "-1.51% this week",
      isGrowthPositive: false,
    },
    {
      title: "Mentor Contributions",
      value: "40%",
      icon: <TrendingUpIcon />,
      growth: "7.2",
      growthPercentage: "+1.51% this week",
      isGrowthPositive: true,
    },
    {
      title: "Completion Time",
      value: "0.32 hrs",
      icon: <TimerIcon />,
      growth: "7.2",
      growthPercentage: "+1.51% this week",
      isGrowthPositive: true,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "16px",
        width: "100%",
      }}
    >
      {/* Filter Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: "8px" }}>
          {["Today", "Week", "Month", "Year", "All Time"].map((filter) => (
            <Button
              key={filter}
              variant="contained"
              onClick={() => {
                setActiveFilter(filter);
                console.log(`${filter} filter clicked`);
              }}
              sx={{
                backgroundColor:
                  activeFilter === filter ? "#28004B" : "#F6F6F6",
                color: activeFilter === filter ? "#F6F6F6" : "#8D8D8D",
                textTransform: "none",
                "&:hover": {
                  backgroundColor:
                    activeFilter === filter ? "#28004B" : "#F6F6F6",
                },
              }}
            >
              {filter}
            </Button>
          ))}
          <Button
            variant="contained"
            startIcon={<DateRangeIcon />}
            sx={{
              backgroundColor: "#28004B",
              color: "white",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#28004B",
              },
            }}
          >
            Filter by Date
          </Button>
        </Box>
      </Box>

      {/* Stats Cards */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
          padding: "16px",
          borderRadius: "8px",
          marginTop: "1rem",
          width: "100%",
        }}
      >
        {data.map((stat, index) => (
          <CardStats key={index} {...stat} isLast={index === data.length - 1} />
        ))}
      </Box>
    </Box>
  );
};

export default StatsChallenges;
