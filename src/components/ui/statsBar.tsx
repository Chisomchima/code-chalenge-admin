import { Box } from "@mui/material";
import CardStats from "./CardStats";

interface DashboardDataItem {
  title: string;
  value: number | string;
  icon: JSX.Element;
  growth: string;
  growthPercentage: string;
  isGrowthPositive: boolean;
}

interface StatsBarProps {
  data: DashboardDataItem[];
}

const StatsBar = ({ data }: StatsBarProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
        padding: "16px",
        borderRadius: "8px",
        marginTop: "1rem",
        width: "100%",
      }}
    >
      {data.map((stat, index) => (
        <CardStats key={index} {...stat} isLast={index === data.length - 1} />
      ))}
    </Box>
  );
};

export default StatsBar;
