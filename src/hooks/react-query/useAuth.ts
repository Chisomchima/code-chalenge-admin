import { useQuery, useMutation } from "react-query";
import {
  editUser,
  getBadge,
  getProfile,
  login,
  uploadAvatar,
  verifyOTP,
} from "../../services/authService";

export const useLogin = () => {
  return useMutation(login);
};

export const useVerifyOTP = () => {
  return useMutation(verifyOTP);
};

export const useGetProfile = (id: string) => {
  return useQuery(["profile", id], () => getProfile(id));
};
export const useGetBadge = (uid: string, bid: string) => {
  return useQuery(["badge", uid], () => getBadge(uid, bid));
};

export const useUploadAvatar = () => {
  return useMutation(uploadAvatar);
};

export const useUpdateUser = () => {
  return useMutation(editUser);
};
