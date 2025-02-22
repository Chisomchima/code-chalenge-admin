import React, { useState } from "react";
import { Table, TableContainer, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  useDeleteChallenge,
  useGetAllChallenges,
  usePublishChallenge,
} from "../../hooks/react-query/useChallenge";
import { IMappedChallenge, TGetAllChallenge } from "./types";
import SearchBar from "./SearchBar";
import TableHeader from "./TableHeader";
import ChallengesTableBody from "./ChallengesTableBody";
import PaginationControls from "./PaginationControls";
import Loader from "../ui/Loader";
import EmptyState from "../ui/EmptyState";

const ITEMS_PER_PAGE = 10;

const AllChallengesTable: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: challengesData,
    isLoading,
    refetch,
  } = useGetAllChallenges("all");

  const { mutate: deleteChallenge, isLoading: loadingDel } =
    useDeleteChallenge();
  const { mutate: publishChallenge, isLoading: loadingPub } =
    usePublishChallenge();

  const isEmpty = !challengesData?.content.length;

  const challenges: IMappedChallenge[] =
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

  const filteredChallenges = challenges.filter((challenge) => {
    const query = searchQuery.toLowerCase();
    return (
      challenge.name.toLowerCase().includes(query) ||
      challenge.status.toLowerCase().includes(query) ||
      challenge.type.toLowerCase().includes(query) ||
      challenge.completionTime.toLowerCase().includes(query) ||
      challenge.completionRate.toLowerCase().includes(query) ||
      challenge.participants.toString().includes(query) ||
      challenge.points.toLowerCase().includes(query) ||
      challenge.createDate.toLowerCase().includes(query)
    );
  });

  // Pagination logic
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPageData = filteredChallenges.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(filteredChallenges.length / ITEMS_PER_PAGE);

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
    if (selectedChallengeId) {
      deleteChallenge(selectedChallengeId, {
        onSuccess: () => {
          refetch();
        },
      });
      handleClose();
    }
  };

  const handlePublish = () => {
    if (selectedChallengeId) {
      publishChallenge(selectedChallengeId, {
        onSuccess: () => {
          refetch();
        },
      });
      handleClose();
    }
  };

  return (
    <Box className="my-4">
      {isEmpty ? (
        <EmptyState message="No challenge found" />
      ) : isLoading ? (
        <EmptyState message="Getting challenge data" />
      ) : (
        <Box
          sx={{
            borderRadius: "10px",
            padding: "1rem",
            border: "1px solid #E5E5E5",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
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
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </Box>
          </Box>

          <TableContainer>
            <Table>
              <TableHeader />
              <ChallengesTableBody
                currentPageData={currentPageData}
                handleClick={handleClick}
                handleClose={handleClose}
                handleView={handleView}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handlePublish={handlePublish}
                anchorEl={anchorEl}
                open={open}
              />
            </Table>
            {(loadingDel || loadingPub) && <Loader />}
          </TableContainer>
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            totalChallenges={filteredChallenges.length}
          />
        </Box>
      )}
    </Box>
  );
};

export default AllChallengesTable;
