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
import { useGetAllChallenges } from "../../hooks/react-query/useChallenge";
import { TGetAllChallenge } from "./types";

interface MappedChallenge {
  id: string;
  name: string;
  status: string;
  type: string;
  completionTime: string;
  completionRate: string;
  participants: number;
  points: string;
  createDate: string;
  logo: string;
}

const ITEMS_PER_PAGE = 10;

const AllChallengesTable: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const { data: challengesData, isLoading } = useGetAllChallenges("all");

  const challenges: MappedChallenge[] =
    challengesData?.content?.map((el: TGetAllChallenge) => ({
      id: el?.id,
      name: el?.title,
      status: el?.state,
      type: el?.focusArea,
      completionTime: "N/A",
      completionRate: "N/A",
      participants: el?.attemptedUsers?.length || 0,
      points: `${el?.points}pts`,
      createDate: new Date(el?.publication?.publishedOn).toLocaleDateString(),
      logo: el?.challengeImage?.url,
    })) || [];

  // Pagination logic
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPageData = challenges.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(challenges.length / ITEMS_PER_PAGE);

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
  const [selectedChallengeId, setSelectedChallengeId] = useState<string | null>(
    null
  );
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>, id: string) => {
    setAnchorEl(event.currentTarget);
    setSelectedChallengeId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedChallengeId(null);
  };

  const handleView = () => {
    navigate(`/challenges/view/${selectedChallengeId}`);
    handleClose();
  };

  const handleEdit = () => {
    navigate(`/challenges/edit/${selectedChallengeId}`);
    handleClose();
  };

  const handleDelete = () => {
    // Add your delete logic here
    handleClose();
  };

  const handlePublish = () => {
    // Add your publish logic here
    handleClose();
  };

  if (isLoading) {
    return <>Loadin</>;
  }

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
              <TableCell style={{ fontWeight: "normal" }}>Actions</TableCell>
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
                <TableCell style={{ fontWeight: "lighter" }}>
                  <IconButton
                    aria-controls={open ? "challenge-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={(event) => handleClick(event, row.id)}
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
                      onClick={handlePublish}
                      sx={{
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.04)",
                          transition: "background-color 0.2s ease",
                        },
                        fontWeight: "lighter",
                        size: "small",
                      }}
                    >
                      Publish Challenge
                    </MenuItem>
                    <MenuItem
                      onClick={handleView}
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
                      onClick={handleEdit}
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
                      onClick={handleDelete}
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
          Total: {challenges.length} - Page {currentPage} of {totalPages}
        </Typography>
      </div>
    </Box>
  );
};

export default AllChallengesTable;
