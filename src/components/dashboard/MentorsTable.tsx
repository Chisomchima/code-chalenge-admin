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
    talent: "Front End",
    reviews: 450,
  },
  { no: 2, name: "React Quiz Challenge", talent: "Back End", reviews: 450 },
  { no: 3, name: "Data Science Hackathon", talent: "Design", reviews: 450 },
];

const MentorsTable: React.FC = () => {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        border: "1px solid #E5E5E5",
        padding: "1rem",
      }}
    >
      <Typography variant="h6" style={{ marginBottom: "1rem", width: "100%" }}>
        Top 3 Mentors
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ "& td, & th": { border: 0 } }}>
              <TableCell style={{ fontWeight: "normal" }}>No</TableCell>
              <TableCell style={{ fontWeight: "normal" }}>
                Name of Mentor
              </TableCell>
              <TableCell style={{ fontWeight: "normal" }}>Talent</TableCell>

              <TableCell style={{ fontWeight: "normal" }}>
                No of Reviews
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
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
                        row.talent === "Front End"
                          ? "purple"
                          : row.talent === "Back End"
                          ? "orange"
                          : "red",
                      marginRight: "0.5rem",
                    }}
                  ></span>
                  <span style={{ marginLeft: "0.5rem" }}>{row.talent}</span>
                </TableCell>
                <TableCell style={{ fontWeight: "lighter" }}>
                  {row.reviews}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MentorsTable;
