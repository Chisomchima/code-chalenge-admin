import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  Box,
} from "@mui/material";

// Clean dataset
const data = [
  {
    no: 1,
    name: "Build a Portfolio Website",
    type: "Front End",
    participants: 450,
  },
  { no: 2, name: "React Quiz Challenge", type: "Back End", participants: 450 },
  { no: 3, name: "Data Science Hackathon", type: "Design", participants: 450 },
  {
    no: 4,
    name: "Build a Portfolio Website",
    type: "Front End",
    participants: 450,
  },
  { no: 5, name: "React Quiz Challenge", type: "Back End", participants: 450 },
  { no: 6, name: "Data Science Hackathon", type: "Design", participants: 450 },
  {
    no: 7,
    name: "Build a Portfolio Website",
    type: "Front End",
    participants: 450,
  },
  { no: 8, name: "React Quiz Challenge", type: "Back End", participants: 450 },
  { no: 9, name: "Data Science Hackathon", type: "Design", participants: 450 },
  {
    no: 10,
    name: "Build a Portfolio Website",
    type: "Front End",
    participants: 450,
  },
  { no: 11, name: "React Quiz Challenge", type: "Back End", participants: 450 },
  { no: 12, name: "Data Science Hackathon", type: "Design", participants: 450 },
  {
    no: 13,
    name: "Build a Portfolio Website",
    type: "Front End",
    participants: 450,
  },
  { no: 14, name: "React Quiz Challenge", type: "Back End", participants: 450 },
  { no: 15, name: "Data Science Hackathon", type: "Design", participants: 450 },
  {
    no: 16,
    name: "Build a Portfolio Website",
    type: "Front End",
    participants: 450,
  },
];

const ITEMS_PER_PAGE = 10;

const ChallengesTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPageData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <Box
      sx={{
        borderRadius: "10px",
        padding: "1rem",
        border: "1px solid #E5E5E5",
      }}
    >
      <Typography variant="h6" style={{ marginBottom: "1rem", width: "100%" }}>
        Challenges
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ "& td, & th": { border: 0 } }}>
              <TableCell style={{ fontWeight: "normal" }}>No</TableCell>
              <TableCell style={{ fontWeight: "normal" }}>Name</TableCell>
              <TableCell style={{ fontWeight: "normal" }}>Type</TableCell>
              <TableCell style={{ fontWeight: "normal" }}>
                Participants
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPageData.map((row) => (
              <TableRow
                key={row.no}
                sx={{
                  "& td, & th": { border: 0 },
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                    transition: "background-color 0.2s ease",
                  },
                  cursor: "pointer",
                }}
              >
                <TableCell style={{ fontWeight: "lighter" }}>
                  {row.no}
                </TableCell>
                <TableCell style={{ fontWeight: "lighter" }}>
                  {row.name}
                </TableCell>
                <TableCell style={{ fontWeight: "lighter" }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      backgroundColor:
                        row.type === "Front End"
                          ? "purple"
                          : row.type === "Back End"
                          ? "orange"
                          : "red",
                      marginRight: "0.5rem",
                    }}
                  ></span>
                  <span style={{ marginLeft: "0.5rem" }}>{row.type}</span>
                </TableCell>
                <TableCell style={{ fontWeight: "lighter" }}>
                  {row.participants}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <div>
          <Button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            style={{ marginRight: "0.5rem" }}
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
        </div>
        <Typography variant="body2">
          Total: {data.length} - Page {currentPage} of {totalPages}
        </Typography>
      </div>
    </Box>
  );
};

export default ChallengesTable;
