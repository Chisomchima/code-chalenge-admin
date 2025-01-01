import React from "react";
import StatsDashboard from "../../components/dashboard/StatsDashboard";
import { Box, Grid, Stack } from "@mui/material";
import TopFiveTable from "../../components/dashboard/TopFiveTable";
import MentorsTable from "../../components/dashboard/MentorsTable";
import ChallengesTable from "../../components/dashboard/ChallengesTable";

const Home: React.FC = () => {
  return (
    <Box mb={4}>
      <Box>
        <StatsDashboard />
      </Box>
      <Box sx={{ padding: "16px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ChallengesTable />
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <TopFiveTable />
              <MentorsTable />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
