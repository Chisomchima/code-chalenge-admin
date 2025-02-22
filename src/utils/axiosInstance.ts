import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosHeaders,
  AxiosError,
} from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

// Ensure the baseURL is defined and correctly typed
const baseURL: string = import.meta.env.VITE_API_URL as string;

if (!baseURL) {
  throw new Error(
    "No baseURL found. Ensure there is an environment variable called `VITE_API_URL`."
  );
}

// Create an Axios instance
export const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 10000,
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const authToken = Cookies.get("authToken");
    if (authToken) {
      config.headers = config.headers || new AxiosHeaders();
      config.headers.set("Authorization", `Bearer ${authToken}`);
    }
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized! Redirecting to login.");
      redirectToLogin();
    } else {
      console.error("Response error:", error);
    }
    return Promise.reject(error);
  }
);

// Function to handle redirection to login
export const redirectToLogin = () => {
  Cookies.remove("authToken");
  Cookies.remove("userId");
  Cookies.remove("userProfile");
  window.location.href = "/login";
};

// Function to handle errors and display toast notifications
export const handleError = (error: AxiosError, fallbackMessage: string) => {
  const errorMessage =
    (error?.response?.data as { error?: { error?: string } })?.error?.error ||
    fallbackMessage;
  console.error("Handled error:", error);
  toast.error(errorMessage);
};
