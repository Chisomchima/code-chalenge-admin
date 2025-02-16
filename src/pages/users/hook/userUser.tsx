export const useUser = () => {
  const tableHeadData: string[] = [
    "Name/Email",
    "Medals",
    "Challenge Points",
    "Reviews",
    "Completion Rate",
    "Achievments",
    "Signup Date",
  ];

  return [tableHeadData] as const;
};
