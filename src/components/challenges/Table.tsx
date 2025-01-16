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
  IconButton,
  Menu,
  MenuItem,
  InputBase,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
// Clean dataset
const data = [
  {
    name: "Build a Portfolio Website",
    status: "Draft",
    type: "Front End",
    completionTime: "0.32 hrs",
    completionRate: "89%",
    participants: 450,
    points: "50pts",
    createDate: "01/12/2024",
    logo: "https://avatars.githubusercontent.com/u/68823331?v=4",
  },
  {
    name: "Build a Portfolio Website",
    status: "Published",
    type: "Front End",
    completionTime: "0.32 hrs",
    completionRate: "89%",
    participants: 450,
    points: "50pts",
    createDate: "01/12/2024",
    logo: "https://avatars.githubusercontent.com/u/68823331?v=4",
  },
  {
    name: "Build a Portfolio Website",
    status: "Draft",
    type: "Back End",
    completionTime: "0.32 hrs",
    completionRate: "89%",
    participants: 450,
    points: "50pts",
    createDate: "01/12/2024",
    logo: "https://avatars.githubusercontent.com/u/68823331?v=4",
  },
  {
    name: "Build a Portfolio Website",
    status: "Published",
    type: "Back End",
    completionTime: "0.32 hrs",
    completionRate: "89%",
    participants: 450,
    points: "50pts",
    createDate: "01/12/2024",
    logo: "https://avatars.githubusercontent.com/u/68823331?v=4",
  },
  {
    name: "Build a Portfolio Website",
    status: "Published",
    type: "Design",
    completionTime: "0.32 hrs",
    completionRate: "89%",
    participants: 450,
    points: "50pts",
    createDate: "01/12/2024",
    logo: "https://avatars.githubusercontent.com/u/68823331?v=4",
  },
  {
    name: "Build a Portfolio Website",
    status: "Draft",
    type: "Front End",
    completionTime: "0.32 hrs",
    completionRate: "89%",
    participants: 450,
    points: "50pts",
    createDate: "01/12/2024",
    logo: "https://avatars.githubusercontent.com/u/68823331?v=4",
  },
  {
    name: "Build a Portfolio Website",
    status: "Published",
    type: "Front End",
    completionTime: "0.32 hrs",
    completionRate: "89%",
    participants: 450,
    points: "50pts",
    createDate: "01/12/2024",
    logo: "https://avatars.githubusercontent.com/u/68823331?v=4",
  },
  {
    name: "Build a Portfolio Website",
    status: "Draft",
    type: "Back End",
    completionTime: "0.32 hrs",
    completionRate: "89%",
    participants: 450,
    points: "50pts",
    createDate: "01/12/2024",
    logo: "https://avatars.githubusercontent.com/u/68823331?v=4",
  },
  {
    name: "Build a Portfolio Website",
    status: "Published",
    type: "Back End",
    completionTime: "0.32 hrs",
    completionRate: "89%",
    participants: 450,
    points: "50pts",
    createDate: "01/12/2024",
    logo: "https://avatars.githubusercontent.com/u/68823331?v=4",
  },
  {
    name: "Build a Portfolio Website",
    status: "Published",
    type: "Design",
    completionTime: "0.32 hrs",
    completionRate: "89%",
    participants: 450,
    points: "50pts",
    createDate: "01/12/2024",
    logo: "https://avatars.githubusercontent.com/u/68823331?v=4",
  },
  {
    name: "Create a Mobile App",
    status: "Draft",
    type: "Mobile",
    completionTime: "1.5 hrs",
    completionRate: "75%",
    participants: 300,
    points: "100pts",
    createDate: "02/15/2024",
    logo: "https://avatars.githubusercontent.com/u/68823331?v=4",
  },
  {
    name: "Create a Mobile App",
    status: "Published",
    type: "Mobile",
    completionTime: "1.5 hrs",
    completionRate: "75%",
    participants: 300,
    points: "100pts",
    createDate: "02/15/2024",
    logo: "https://avatars.githubusercontent.com/u/68823331?v=4",
  },
  {
    name: "Design a Logo",
    status: "Draft",
    type: "Design",
    completionTime: "0.5 hrs",
    completionRate: "95%",
    participants: 200,
    points: "30pts",
    createDate: "03/10/2024",
    logo: "https://avatars.githubusercontent.com/u/68823331?v=4",
  },
  {
    name: "Design a Logo",
    status: "Published",
    type: "Design",
    completionTime: "0.5 hrs",
    completionRate: "95%",
    participants: 200,
    points: "30pts",
    createDate: "03/10/2024",
    logo: "https://avatars.githubusercontent.com/u/68823331?v=4",
  },
  {
    name: "Develop a REST API",
    status: "Published",
    type: "Back End",
    completionTime: "2 hrs",
    completionRate: "80%",
    participants: 500,
    points: "150pts",
    createDate: "04/05/2024",
    logo: "https://avatars.githubusercontent.com/u/68823331?v=4",
  },
];

const ITEMS_PER_PAGE = 10;

const AllChallengesTable: React.FC = () => {
  const navigate = useNavigate();
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

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        borderRadius: "10px",
        padding: "1rem",
        border: "1px solid #E5E5E5",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Typography
          variant="h6"
          style={{ marginBottom: "1rem", width: "100%" }}
        >
          Challenges
        </Typography>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#A238FF",
              width: "13rem",
              "&:hover": {
                backgroundColor: "#8A1FCC",
              },
            }}
            onClick={() => navigate("/challenges/new")}
          >
            Create Challenge
          </Button>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f1f1f1",
              borderRadius: "8px",
              padding: "5px 10px",
              minWidth: "300px",
            }}
          >
            <SearchIcon
              style={{ color: "gray", marginRight: "10px", fontSize: "24px" }}
            />
            <InputBase placeholder="Search" sx={{ width: "100%" }} />
          </Box>
        </Box>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ "& td, & th": { border: 0 } }}>
              <TableCell style={{ fontWeight: "normal" }}>
                Name/Status
              </TableCell>
              <TableCell style={{ fontWeight: "normal" }}>Type</TableCell>
              <TableCell style={{ fontWeight: "normal" }}>
                Completion Time
              </TableCell>
              <TableCell style={{ fontWeight: "normal" }}>
                Completion Rate
              </TableCell>
              <TableCell style={{ fontWeight: "normal" }}>
                Participants
              </TableCell>
              <TableCell style={{ fontWeight: "normal" }}>Points</TableCell>
              <TableCell style={{ fontWeight: "normal" }}>
                Create Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPageData.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  "& td, & th": { border: 0 },
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                    transition: "background-color 0.2s ease",
                  },
                  cursor: "pointer",
                }}
              >
                <TableCell style={{ fontWeight: "lighter", display: "flex" }}>
                  <img
                    src={row.logo}
                    alt={row.name}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      marginRight: "0.5rem",
                    }}
                  />
                  <div>
                    <div>{row.name}</div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: row.status === "Draft" ? "#FFAE00" : "#A238FF",
                      }}
                    >
                      {row.status}
                    </div>
                  </div>
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
                  {row.completionTime}
                </TableCell>
                <TableCell style={{ fontWeight: "lighter" }}>
                  {row.completionRate}
                </TableCell>
                <TableCell style={{ fontWeight: "lighter" }}>
                  {row.participants}
                </TableCell>
                <TableCell style={{ fontWeight: "lighter" }}>
                  {row.points}
                </TableCell>
                <TableCell style={{ fontWeight: "lighter" }}>
                  {row.createDate}
                </TableCell>
                <>
                  <IconButton
                    aria-controls={open ? "challenge-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="challenge-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    sx={{
                      "& .MuiPaper-root": {
                        borderRadius: "8px",
                        minWidth: "150px",
                        boxShadow: "none",
                        border: "1px solid #E5E5E5",
                      },
                      size: "small",
                    }}
                  >
                    <MenuItem
                      onClick={handleClose}
                      sx={{
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.04)",
                          transition: "background-color 0.2s ease",
                        },
                        fontWeight: "lighter",
                        size: "small",
                      }}
                    >
                      View Challenge
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      sx={{
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.04)",
                          transition: "background-color 0.2s ease",
                        },
                        fontWeight: "lighter",
                        size: "small",
                      }}
                    >
                      Edit Challenge
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      sx={{
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.04)",
                          transition: "background-color 0.2s ease",
                        },
                        fontWeight: "lighter",
                        size: "small",
                      }}
                    >
                      Delete Challenge
                    </MenuItem>
                  </Menu>
                </>
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

export default AllChallengesTable;
