import { axiosInstance } from "@/utils/axiosInstance";
import { useQuery } from "react-query";
import { User } from "../constant";

interface ApiResponse {
  content: User[];
  total: number;
  page: number;
  limit: number;
}

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

  const fetchUsers = async () => {
    const response = await axiosInstance.get("/api/admin/users?page=1&limit=1");

    return response.data;
  };

  const { data, isLoading } = useQuery<ApiResponse>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  return {
    tableHeadData,
    data: data?.content,
    isLoading,
  };
};
