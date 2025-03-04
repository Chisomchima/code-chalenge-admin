import { useMutation, useQuery } from "react-query";
import {
  CreateChallenge,
  DeleteChallenge,
  EditChallenge,
  GetAllChallenges,
  GetChallengeById,
  PublishChallenge,
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
    staleTime: 0,
    cacheTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
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

export const usePublishChallenge = () => {
  return useMutation((challengeId: string) => PublishChallenge(challengeId));
};

export const useUploadChallengeAvatar = () => {
  return useMutation(uploadChallengeAvatar);
};
