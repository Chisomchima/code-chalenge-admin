import { useMutation, useQuery } from "react-query";
import {
  CreateChallenge,
  DeleteChallenge,
  GetAllChallenges,
  uploadChallengeAvatar,
} from "../../services/challengeService";

export const useCreateChallenge = () => {
  return useMutation(CreateChallenge);
};

export const useGetAllChallenges = (param: string) => {
  return useQuery("getAllChallenges", () => GetAllChallenges(param));
};

export const useDeleteChallenge = () => {
  return useMutation(DeleteChallenge);
};

export const useUploadChallengeAvatar = () => {
  return useMutation(uploadChallengeAvatar);
};
