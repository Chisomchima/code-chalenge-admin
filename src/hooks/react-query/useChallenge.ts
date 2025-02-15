import { useMutation, useQuery } from "react-query";
import {
  CreateChallenge,
  DeleteChallenge,
  EditChallenge,
  GetAllChallenges,
  GetChallengeById,
  uploadChallengeAvatar,
} from "../../services/challengeService";
import { ChallengeData } from "../../components/challenges/types";

export const useCreateChallenge = () => {
  return useMutation(CreateChallenge);
};

export const useGetAllChallenges = (param: string) => {
  return useQuery("getAllChallenges", () => GetAllChallenges(param));
};

export const useGetChallengeById = (id: string | undefined) => {
  return useQuery(["getChallengeById", id], () => GetChallengeById(id), {
    enabled: !!id,
  });
};

export const useDeleteChallenge = () => {
  return useMutation(DeleteChallenge);
};

export const useEditChallenge = () => {
  return useMutation((params: { challengeId: string; data: ChallengeData }) =>
    EditChallenge(params.challengeId, params.data)
  );
};

export const useUploadChallengeAvatar = () => {
  return useMutation(uploadChallengeAvatar);
};
