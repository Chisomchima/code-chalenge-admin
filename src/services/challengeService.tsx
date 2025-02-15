import { AxiosError } from "axios";
import { axiosInstance, handleError } from "../utils/axiosInstance";
import { toast } from "react-toastify";

export const CreateChallenge = async (data: any) => {
  try {
    const response = await axiosInstance.post(
      "/api/admin/create-challenge",
      data
    );
    toast.success("Challenge created successfully!");
    return response.data;
  } catch (error) {
    handleError(error as AxiosError, "An unexpected error occurred.");
    toast.error("Failed to create challenge.");
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
    toast.success("Challenge avatar uploaded successfully!");
    return response.data;
  } catch (error) {
    handleError(error as AxiosError, "An unexpected error occurred.");
    toast.error("Failed to upload challenge avatar.");
    throw error;
  }
};
