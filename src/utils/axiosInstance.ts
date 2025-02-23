import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosHeaders,
  AxiosError,
} from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import axiosRetry from "axios-retry";

interface ApiError {
  error?: {
    error?: string;
    message?: string;
    code?: string;
  };
}

const TOKEN_STORAGE_KEY = "authToken";
const REFRESH_TOKEN_KEY = "refreshToken";
const USER_ID_KEY = "userId";
const USER_PROFILE_KEY = "userProfile";

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
  timeoutErrorMessage: "Request timeout - please try again",
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

axiosRetry(axiosInstance, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
  retryCondition: (error: AxiosError) => {
    return (
      axiosRetry.isNetworkOrIdempotentRequestError(error) ||
      error.response?.status === 429
    );
  },
});

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

export const redirectToLogin = () => {
  const keysToRemove = [
    TOKEN_STORAGE_KEY,
    REFRESH_TOKEN_KEY,
    USER_ID_KEY,
    USER_PROFILE_KEY,
  ];
  keysToRemove.forEach((key) => Cookies.remove(key));
  window.location.replace("/login");
};

export const createCancelToken = () => {
  const source = axios.CancelToken.source();
  return source;
};

// Function to handle errors and display toast notifications
export const handleError = (
  error: AxiosError<ApiError>,
  fallbackMessage: string
) => {
  const errorMessage =
    error?.response?.data?.error?.message ||
    error?.response?.data?.error?.error ||
    error.message ||
    fallbackMessage;

  console.error("Error details:", {
    status: error?.response?.status,
    message: errorMessage,
    path: error?.config?.url,
  });

  toast.error(errorMessage);
};
