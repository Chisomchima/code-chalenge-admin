import { Box } from "@mui/material";
import FilterButtons from "../../components/ui/filterButtons";
import StatsBar from "../../components/ui/statsBar";
import { STATS_BAR_DATA } from "./mock_data/stats_bar_data";

const UsersPage = () => {
  return (
    <Box className="py-4 pr-4">
      <FilterButtons />
      <StatsBar data={STATS_BAR_DATA} />
    </Box>
  );
};

export default UsersPage;
