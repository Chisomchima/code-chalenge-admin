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
  Link,
  Container,
  Grid,
} from "@mui/material";
import {
  useDeleteChallenge,
  useGetChallengeById,
} from "../../hooks/react-query/useChallenge";
import Loader from "../ui/Loader";
import { useNavigate, useParams } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { DetailRowProps, ListSectionProps } from "./types";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
    <Container maxWidth="lg">
      <Box sx={{ position: "relative", mb: 10 }}>
        {/* Hero Banner */}
        <Box
          sx={{
            width: "100%",
            height: 200,
            backgroundImage: `url("/images/formbg.svg")`,
            backgroundSize: "cover",
            borderRadius: 2,
          }}
        />

        {/* Challenge Header Card */}
        <Card
          sx={{
            position: "absolute",
            top: 120,
            left: "50%",
            transform: "translateX(-50%)",
            width: "95%",
            maxWidth: 1100,
            p: 3,
            boxShadow: 3,
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            alignItems={{ xs: "start", sm: "center" }}
            justifyContent="space-between"
          >
            {/* Left Section */}
            <Stack direction="row" spacing={2} alignItems="center">
              <LazyLoadImage
                src={challengeData?.challengeImage?.url}
                alt="banner"
                className="w-10 h-10 object-cover rounded-md"
              />
              <Stack spacing={1}>
                <Typography variant="h5">{challengeData.title}</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <FiberManualRecordIcon
                      sx={{ fontSize: 8, color: "primary.main" }}
                    />
                    <Typography variant="body2">
                      {challengeData.focusArea}
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <CalendarMonthIcon fontSize="small" color="action" />
                    <Typography variant="body2" color="text.secondary">
                      Updated:{" "}
                      {new Date(
                        challengeData.publication.publishedOn
                      ).toLocaleDateString()}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>

            {/* Right Section */}
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleEdit}
                sx={{ minWidth: 100 }}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                color="warning"
                onClick={handleDelete}
                sx={{ minWidth: 100 }}
              >
                Delete
              </Button>
            </Stack>
          </Stack>
        </Card>
      </Box>

      {/* Challenge Details Section */}
      <Box
        sx={{
          mt: 10,
          borderRadius: 2,
          p: 4,
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        {/* Info Grid */}
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <DetailRow label="Description" value={challengeData.description} />
          </Grid>
          <Grid item xs={12}>
            <DetailRow
              label="Prerequisites"
              value={challengeData.prerequisites}
            />
          </Grid>
          <Grid item xs={12}>
            <DetailRow label="Skill Level" value={challengeData.skillLevel} />
          </Grid>
          <Grid item xs={12}>
            <DetailRow label="Focus Area" value={challengeData.focusArea} />
          </Grid>
        </Grid>

        {/* Lists Section */}
        <Stack spacing={4} sx={{ mt: 4 }}>
          {challengeData?.acceptanceCriteria.length > 0 && (
            <ListSection
              title="Acceptance Criteria"
              items={challengeData.acceptanceCriteria}
            />
          )}

          {challengeData.rulesAndResources.length > 0 && (
            <ListSection
              title="Rules and Resources"
              items={challengeData.rulesAndResources}
            />
          )}

          {challengeData?.onlineResources.length > 0 && (
            <ListSection
              title="Online Resources"
              items={challengeData.onlineResources}
              isLink
            />
          )}

          {challengeData?.attachments.length > 0 && (
            <ListSection
              title="Attachments"
              items={challengeData.attachments}
            />
          )}
        </Stack>

        {/* Footer */}
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mt: 4, display: "block" }}
        >
          Published on:{" "}
          {new Date(challengeData.publication.publishedOn).toLocaleDateString()}
        </Typography>
      </Box>
    </Container>
  );
};

// Helper Components

const DetailRow: React.FC<DetailRowProps> = ({ label, value }) => (
  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
    <Typography variant="subtitle1" fontWeight="bold" sx={{ minWidth: 150 }}>
      {label}
    </Typography>
    <Typography variant="body1">{value}</Typography>
  </Stack>
);

const ListSection: React.FC<ListSectionProps> = ({ title, items, isLink }) => (
  <Box>
    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
      {title}
    </Typography>
    <List>
      {items.map((item, index) => (
        <ListItem key={item._id}>
          {isLink ? (
            <Link
              href={item.description}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: "none",
                color: "primary.main",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {`${index + 1}. ${item.title}`}
            </Link>
          ) : (
            <ListItemText
              primary={`${index + 1}. ${item.title}`}
              secondary={item.description}
            />
          )}
        </ListItem>
      ))}
    </List>
  </Box>
);

export default ViewChallenge;
