export type ChallengeData = {
  avatar: string | null;
  title: string;
  description: string;
  focusArea: string;
  points: number;
  prerequisites: string;
  skillLevel: string;
  acceptanceCriteria: { title: string; description: string }[];
  rulesAndResources: { title: string; description: string }[];
  onlineResources: { title: string; description: string }[];
  attachments: { title: string; description: string }[];
};
