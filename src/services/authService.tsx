import { AxiosError } from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { axiosInstance, handleError } from "../utils/axiosInstance";

export const login = async (data: { id: string }) => {
  try {
    const response = await axiosInstance.post("/api/admin/login", data);
    return response.data;
  } catch (error) {
    handleError(error as AxiosError, "Login failed.");
    throw error;
  }
};

export const verifyOTP = async (data: { email: string; otp: string }) => {
  try {
    const response = await axiosInstance.post("/api/admin/verify", data);

    const { tokens, adminProfile } = response?.data?.content || {};

    if (tokens && adminProfile && response?.data?.success) {
      Cookies.set("authToken", tokens.token, {
        path: "/",
        sameSite: "Strict",
      });

      Cookies.set("adminProfile", JSON.stringify(adminProfile), {
        path: "/",
        sameSite: "Strict",
      });

      toast.success("OTP verification successful!");

      return response.data;
    } else {
      throw new Error(
        "Invalid OTP verification response: Token or User ID is missing."
      );
    }
  } catch (error) {
    handleError(
      error as AxiosError,
      "An unexpected error occurred during OTP verification."
    );
    throw error;
  }
};

export const editUser = async (data: {
  id: string;
  [key: string]: unknown;
}) => {
  try {
    const response = await axiosInstance.put(`/users/update-user/${data.id}`, {
      ...data,
    });
    return response.data;
  } catch (error) {
    handleError(error as AxiosError, "Failed to update user.");
    throw error;
  }
};

export const register = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await axiosInstance.post("/api/auth/signup", data);
    return response.data;
  } catch (error) {
    handleError(error as AxiosError, "Registration failed.");
    throw error;
  }
};

export const getProfile = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/api/users/get-user/${id}`);

    if (response.status !== 200) {
      throw new Error("Unable to fetch profile");
    }

    Cookies.set("userProfile", JSON.stringify(response.data));
    const cookieData = Cookies.get("userProfile");
    const profile = cookieData ? JSON.parse(cookieData) : response.data;
    return profile;
  } catch (error) {
    handleError(error as AxiosError, "Failed to fetch user profile.");
    throw error;
  }
};

export const uploadAvatar = async (data: FormData) => {
  const userId = Cookies.get("userId");
  try {
    // Ensure the auth token is included
    const authToken = Cookies.get("authToken");
    if (!authToken) throw new Error("Authentication token is missing.");

    const response = await axiosInstance.post(
      `/api/auth/upload-avatar/${userId}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    // Check if the upload was successful
    if (response?.data?.success) {
      const userId = Cookies.get("userId");
      if (userId) {
        // Fetch the updated profile
        await getProfile(userId);
      }
      return response.data;
    } else {
      throw new Error(
        "Failed to upload avatar: Server did not return success."
      );
    }
  } catch (error) {
    handleError(
      error as AxiosError,
      "Failed to upload avatar. Please try again."
    );
    throw error;
  }
};
