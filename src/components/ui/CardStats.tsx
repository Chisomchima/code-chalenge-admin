import React from "react";

interface CardStatsProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  growth: string;
  growthPercentage: string;
  isGrowthPositive: boolean;
  isLast?: boolean;
}

const CardStats: React.FC<CardStatsProps> = ({
  title,
  value,
  icon,
  growth,
  growthPercentage,
  isGrowthPositive,
  isLast,
}) => {
  return (
    <div
      className={`flex flex-row items-start justify-between bg-white ${
        !isLast && "border-r border-gray-300"
      } gap-4 p-5 w-1/4`}
    >
      <div>
        <h6 className="font-bold text-[#2C2C2C] text-3xl">{value}</h6>
        <p className="text-[#666] text-sm">{title}</p>
        <span
          className={`block mt-2 text-xs ${
            isGrowthPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isGrowthPositive ? "▲" : "▼"} {growth} {growthPercentage}
        </span>
      </div>
      <div className="bg-white rounded-lg p-3 shadow-md">{icon}</div>
    </div>
  );
};

export default CardStats;
