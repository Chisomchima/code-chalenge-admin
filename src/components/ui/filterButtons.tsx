import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";

// Array of filter options
const FILTER_OPTIONS = ["Today", "Week", "Month", "Year", "All Time"];

// Helper function to format filter text so that only the first letter is uppercase
const formatFilter = (filter: string) =>
  filter.charAt(0).toUpperCase() + filter.slice(1).toLowerCase();

const FilterButtons = () => {
  // Track which filter is currently active
  const [activeFilter, setActiveFilter] = useState("Week");

  // Handle clicking a filter button
  const handleFilterClick = (filter: React.SetStateAction<string>) => {
    setActiveFilter(filter);
    console.log(`${filter} filter clicked`);
  };

  return (
    <Box className="flex justify-between">
      <Box className="flex gap-2">
        {FILTER_OPTIONS.map((filter) => {
          const isActive = activeFilter === filter;
          // Base classes including forced normal-case
          const baseClasses =
            "!shadow-sm hover:!shadow-md !duration-300 !ease-in !normal-case !rounded-md";
          // Dynamic classes based on the active state
          const dynamicClasses = isActive
            ? "!bg-co-tertiary !text-white hover:!bg-co-tertiary"
            : "!bg-[#F6F6F6] !text-[#8D8D8D] hover:!bg-[#F6F6F6]";
          return (
            <Button
              key={filter}
              variant="contained"
              onClick={() => handleFilterClick(filter)}
              className={`${baseClasses} ${dynamicClasses}`}
            >
              {formatFilter(filter)}
            </Button>
          );
        })}
        <Button
          variant="contained"
          startIcon={<DateRangeIcon />}
          className="!bg-co-tertiary !text-white !rounded-md !normal-case hover:!bg-co-tertiary"
        >
          Filter by Date
        </Button>
      </Box>
    </Box>
  );
};

export default FilterButtons;
