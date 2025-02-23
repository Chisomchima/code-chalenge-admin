import React from "react";
import {
  Card,
  Avatar,
  Stack,
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  useDeleteChallenge,
  useGetChallengeById,
} from "../../hooks/react-query/useChallenge";
import Loader from "../ui/Loader";
import { useNavigate, useParams } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const ViewChallenge: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { mutate: deleteChallenge, isLoading: loadingDel } =
    useDeleteChallenge();
  const { data: response, isLoading: isFetching } = useGetChallengeById(id);
  const challengeData = response?.content;

  if (isFetching || loadingDel) return <Loader />;

  if (!challengeData) {
    return (
      <Box>
        <Typography>Challenge not found</Typography>
      </Box>
    );
  }

  const handleEdit = () => {
    // Force a hard reload by using window.location
    window.location.href = `/challenges/edit/${challengeData?.id}`;
  };

  const handleDelete = () => {
    if (challengeData?.id) {
      deleteChallenge(challengeData.id, {
        onSuccess: () => {
          navigate("/challenges");
        },
      });
    }
  };
  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            width: "100%",
            height: 150,
            backgroundImage: `url("../../../public/images/formbg.svg")`,
            backgroundSize: "cover",
            borderRadius: 2,
            padding: 2,
          }}
        />
        <Card
          sx={{
            position: "absolute",
            top: 100,
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 2,
            boxShadow: 3,
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ flexGrow: 1 }}
          >
            <Avatar
              variant="rounded"
              src={challengeData?.challengeImage?.url}
              sx={{ width: 60, height: 60 }}
            />
            <Stack direction="column" spacing={1} alignItems="start">
              <Typography variant="h6">{challengeData.title}</Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <FiberManualRecordIcon
                  sx={{ fontSize: 10, color: "primary.main" }}
                />

                <Typography variant="body2" component="span">
                  {challengeData.focusArea}
                </Typography>

                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <CalendarMonthIcon
                    fontSize="small"
                    sx={{ color: "text.secondary" }}
                  />
                  <Typography
                    variant="body2"
                    component="span"
                    color="text.secondary"
                  >
                    Updated:{" "}
                    {new Date(
                      challengeData.publication.publishedOn
                    ).toLocaleDateString()}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              color="primary"
              variant="outlined"
              sx={{ textTransform: "initial" }}
              onClick={handleEdit}
            >
              Edit
            </Button>
            <Button
              color="warning"
              variant="outlined"
              sx={{ textTransform: "initial" }}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Stack>
        </Card>
      </Box>

      <Box
        sx={{
          marginTop: "80px",
          borderRadius: "10px",
          padding: "2rem",
          border: "1px solid #E5E5E5",
        }}
      >
        <Stack direction="row" spacing={15} sx={{ mt: 3, mb: 3 }}>
          <Typography variant="body1" fontWeight={900}>
            Description
          </Typography>
          <Typography variant="body1">{challengeData.description}</Typography>
        </Stack>

        <Stack direction="row" spacing={13} sx={{ mt: 3, mb: 3 }}>
          <Typography variant="body1" fontWeight={900}>
            Prerequisites
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {challengeData.prerequisites}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={17} sx={{ mt: 3, mb: 3 }}>
          <Typography variant="body1" fontWeight={900}>
            Skill Level
          </Typography>
          <Typography variant="body1">{challengeData.skillLevel}</Typography>
        </Stack>
        <Stack direction="row" spacing={17} sx={{ mt: 3, mb: 3 }}>
          <Typography variant="body1" fontWeight={900}>
            Focus Area
          </Typography>
          <Typography variant="body1">{challengeData.focusArea}</Typography>
        </Stack>
        {challengeData?.acceptanceCriteria.length > 0 && (
          <>
            <Typography variant="body1" fontWeight={900}>
              Acceptance Criteria
            </Typography>
            <List>
              {challengeData.acceptanceCriteria.map(
                (criteria: any, index: number) => (
                  <ListItem key={criteria._id}>
                    <ListItemText
                      primary={`${index + 1}. ${criteria.title}`}
                      secondary={criteria.description}
                    />
                  </ListItem>
                )
              )}
            </List>
          </>
        )}

        {challengeData.rulesAndResources.length > 0 && (
          <>
            <Typography variant="body1" fontWeight={900}>
              Rules and Resources
            </Typography>
            <List>
              {challengeData.rulesAndResources.map((rule: any, index: any) => (
                <ListItem key={rule._id}>
                  <ListItemText
                    primary={`${index + 1}. ${rule.title}`}
                    secondary={rule.description}
                  />
                </ListItem>
              ))}
            </List>
          </>
        )}

        {challengeData?.onlineResources.length > 0 && (
          <>
            <Typography variant="body1" fontWeight={900}>
              Online Resources
            </Typography>
            <List>
              {challengeData.onlineResources.map(
                (resource: any, index: React.Key | null | undefined) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={`${(index as number) + 1}. ${resource}`}
                    />
                  </ListItem>
                )
              )}
            </List>
          </>
        )}

        <Box sx={{ mt: 3 }}>
          <Typography variant="caption" color="textSecondary">
            Published on:{" "}
            {new Date(
              challengeData.publication.publishedOn
            ).toLocaleDateString()}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ViewChallenge;
