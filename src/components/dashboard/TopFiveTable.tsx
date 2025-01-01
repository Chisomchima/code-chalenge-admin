import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
} from "@mui/material";

// Clean dataset
const data = [
  {
    no: 1,
    name: "Build a Portfolio Website",
    points: "450,009",
    challenges: 450,
    completionTime: "12h 30m",
  },
  {
    no: 2,
    name: "React Quiz Challenge",
    points: "590,689",
    challenges: 450,
    completionTime: "2h 40m",
  },
  {
    no: 3,
    name: "Data Science Hackathon",
    points: "302,94",
    challenges: 450,
    completionTime: "1h 10m",
  },
  {
    no: 4,
    name: "Build a Portfolio Website",
    points: "400,009",
    challenges: 450,
    completionTime: "4h 30m",
  },
  {
    no: 5,
    name: "React Quiz Challenge",
    points: "876,454",
    challenges: 450,
    completionTime: "5h 3m",
  },
];

const TopFiveTable: React.FC = () => {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        border: "1px solid #E5E5E5",
        padding: "1rem",
      }}
    >
      <Typography variant="h6" style={{ marginBottom: "1rem" }}>
        Top 5 Challenges
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "normal" }}>No</TableCell>
              <TableCell style={{ fontWeight: "normal" }}>User Name</TableCell>
              <TableCell style={{ fontWeight: "normal" }}>Points</TableCell>
              <TableCell style={{ fontWeight: "normal" }}>Challenges</TableCell>
              <TableCell style={{ fontWeight: "normal" }}>
                completion Time
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
                  {row.points}
                </TableCell>
                <TableCell style={{ fontWeight: "lighter" }}>
                  {row.challenges}
                </TableCell>
                <TableCell style={{ fontWeight: "lighter" }}>
                  {row.completionTime}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TopFiveTable;
