import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { IPaginationControlsProps } from "./types";

const PaginationControls: React.FC<IPaginationControlsProps> = ({
  currentPage,
  totalPages,
  handlePrevious,
  handleNext,
  totalChallenges,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "1rem",
      }}
    >
      <Box>
        <Button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          sx={{ marginRight: "0.5rem" }}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </Box>
      <Typography variant="body2">
        Total: {totalChallenges} - Page {currentPage} of {totalPages}
      </Typography>
    </Box>
  );
};

export default PaginationControls;
