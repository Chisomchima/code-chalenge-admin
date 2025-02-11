import { AxiosError } from "axios";
import { axiosInstance, handleError } from "../utils/axiosInstance";

export const CreateChallenge = async (data: any) => {
  try {
    const response = await axiosInstance.post(
      "/api/admin/create-challenge",
      data
    );
    return response.data;
  } catch (error) {
    handleError(error as AxiosError, "An unexpected error occurred.");
    throw error;
  }
};
export const uploadChallengeAvatar = async (data: any) => {
  try {
    const response = await axiosInstance.post(
      "/api/admin/upload-challenge-image",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    handleError(error as AxiosError, "An unexpected error occurred.");
    throw error;
  }
};
