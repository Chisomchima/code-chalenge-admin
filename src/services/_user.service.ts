import { axiosInstance, handleError } from "@/utils/axiosInstance";
import { ApiResponse } from "@/utils/types";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const getAllUsersFunc = async (
  page?: number,
  limit?: number
): Promise<ApiResponse> => {
  try {
    const response = await axiosInstance.get<ApiResponse>(
      `/api/admin/users?page=${page}&limit=${limit}`
    );

    return response.data;
  } catch (error) {
    handleError(error as AxiosError, "An unexpected error occurred.");
    toast.error("Failed to get users.");
    throw error;
  }
};
