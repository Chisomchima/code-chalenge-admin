import { AxiosError } from "axios";
import { axiosInstance, handleError } from "../utils/axiosInstance";
import { toast } from "react-toastify";
import { ChallengeData } from "../components/challenges/types";

export const CreateChallenge = async (data: ChallengeData) => {
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

export const GetAllChallenges = async (param: string) => {
  try {
    const response = await axiosInstance.get(
      `/api/challenges/get-challenges/${param}`
    );
    return response.data;
  } catch (error) {
    handleError(error as AxiosError, "An unexpected error occurred.");
    toast.error("Failed to get challenges.");
    throw error;
  }
};

export const GetChallengeById = async (id: string | undefined) => {
  try {
    const response = await axiosInstance.get(
      `/api/challenges/get-challenge/${id}`
    );
    return response.data;
  } catch (error) {
    handleError(error as AxiosError, "An unexpected error occurred.");
    throw error;
  }
};

export const DeleteChallenge = async (challengeId: string) => {
  try {
    const response = await axiosInstance.delete(
      `/api/challenges/delete-challenge/${challengeId}`
    );
    toast.success("Challenge deleted successfully!");
    return response.data;
  } catch (error) {
    handleError(error as AxiosError, "An unexpected error occurred.");
    toast.error("Failed to delete challenge.");
    throw error;
  }
};

export const EditChallenge = async (
  challengeId: string,
  data: ChallengeData
) => {
  try {
    const response = await axiosInstance.put(
      `/api/challenges/edit-challenge/${challengeId}`,
      data
    );
    toast.success("Challenge edited successfully!");
    return response.data;
  } catch (error) {
    handleError(error as AxiosError, "An unexpected error occurred.");
    toast.error("Failed to edit challenge.");
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
