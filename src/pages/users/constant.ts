interface Achievement {
  title: string;
  points: number;
}

interface Avatar {
  url: string;
  public_id: string;
}

interface AttemptedChallenge {
  challenge: string;
  as: string;
  _id: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  signInMethod: string;
  avatar: Avatar;
  points: number;
  results: any[];
  badges: string[];
  skills: any[];
  linkedin: string;
  github: string;
  portfolio: string;
  achievements: Achievement[];
  challenges: any[];
  attemptedChallenges: AttemptedChallenge[];
  medals: any[];
  badgeAchievements: any[];
  challengeAchievements: any[];
  mentorAchievements: any[];
  createdAt: string;
  reviews: any[];
}
