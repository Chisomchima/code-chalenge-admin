import { useMutation } from "react-query";
import { CreateChallenge, uploadChallengeAvatar } from "../../services/challengeService";

export const useCreateChallenge = () => {
  return useMutation(CreateChallenge);
};
export const useUploadChallengeAvatar = () => {
  return useMutation(uploadChallengeAvatar);
};