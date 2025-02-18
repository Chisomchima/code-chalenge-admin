import { useQuery } from "react-query";
import { getAllUsersFunc } from "../../../services/_user.service";

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

  const getAllUsers = (page: number, limit: number) => {
    return useQuery("getAllUsers", () => getAllUsersFunc(page, limit));
  };

  return {
    getAllUsers,
    tableHeadData,
  };
};
