import React from "react";
import { Box, Button, Typography } from "@mui/material";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  handlePrevious: () => void;
  handleNext: () => void;
  totalChallenges: number;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
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
