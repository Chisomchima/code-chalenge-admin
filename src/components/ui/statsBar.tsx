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
    <Box className="flex justify-between shadow-sm p-2.5 py-3.5 rounded-lg mt-5 border border-gray-200 w-full">
      {data.map((stat, index) => (
        <CardStats key={index} {...stat} isLast={index === data.length - 1} />
      ))}
    </Box>
  );
};

export default StatsBar;
