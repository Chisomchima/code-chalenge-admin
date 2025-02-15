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

export interface IMappedChallenge {
  id: string;
  name: string;
  status: string;
  type: string;
  completionTime: string;
  completionRate: string;
  participants: number;
  points: string;
  createDate: string;
  logo: string;
}

export interface ITableBodyProps {
  currentPageData: IMappedChallenge[];
  handleClick: (event: React.MouseEvent<HTMLElement>, id: string) => void;
  handleClose: () => void;
  handleView: () => void;
  handleEdit: () => void;
  handleDelete: () => void;
  handlePublish: () => void;
  anchorEl: HTMLElement | null;
  open: boolean;
}

export interface IPaginationControlsProps {
  currentPage: number;
  totalPages: number;
  handlePrevious: () => void;
  handleNext: () => void;
  totalChallenges: number;
}

export interface ISearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}
