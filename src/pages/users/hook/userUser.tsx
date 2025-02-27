import { useQuery } from "react-query";
import {
  getAllUsersFunc,
  getSingleUserData,
} from "../../../services/_user.service";

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

  const getSingleUser = (id: string) => {
    return useQuery("getSingleUser", () => getSingleUserData(id));
  };

  return {
    getAllUsers,
    getSingleUser,
    tableHeadData,
  };
};
