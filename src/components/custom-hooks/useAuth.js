import { useQuery, useMutation, QueryClient } from "react-query";
import { login, logout, getProfile } from "../../services/auth";
import { Cookies } from "react-cookie";

const queryClient = new QueryClient();
const cookies = new Cookies();

export const useLogin = () => {
  return useMutation(login, {
    onSuccess: (data) => {
      const accessToken = data?.token;
      cookies.set("scriipoAccess", accessToken, { path: "/" });
      queryClient.invalidateQueries("profile");
    },
  });
};

export const useLogout = () => {
  return useMutation(logout, {
    onSuccess: () => {
      queryClient.invalidateQueries("profile");
    },
  });
};

export const useGetProfile = () => {
  return useQuery("profile", getProfile, {
    onSuccess: (data) => {
      const adminProfile = data?.data;
      cookies.set("profile", adminProfile, { path: "/" });
    },
  });
};
