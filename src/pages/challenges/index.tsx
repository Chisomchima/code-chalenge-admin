import React from "react";
import { Box, Grid } from "@mui/material";
import StatsChallenges from "../../components/challenges/StatsChallenges";
import AllChallengesTable from "../../components/challenges/Table";

const Challenges: React.FC = () => {
  return (
    <Box mb={4}>
      <Box>
        <StatsChallenges />
      </Box>
      <Box sx={{ padding: "16px" }}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <AllChallengesTable />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Challenges;
