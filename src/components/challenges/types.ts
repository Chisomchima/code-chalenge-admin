export type ChallengeData = {
  avatar?: File | null;
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

export type TGetAllChallenge = {
  challengeImage: {
    url: string;
    public_id: string;
  };
  publication: {
    publishedBy: string;
    publishedOn: string;
  };
  title: string;
  description: string;
  acceptanceCriteria: {
    title: string;
    description: string;
    _id: string;
  }[];
  focusArea: string;
  skillLevel: string;
  rules: any[];
  prerequisites: string;
  points: number;
  rulesAndResources: {
    title: string;
    description: string;
    _id: string;
  }[];
  attemptedUsers: any[];
  completedUsers: any[];
  results: any[];
  state: string;
  onlineResources: any[];
  attachments: any[];
  id: string;
};
