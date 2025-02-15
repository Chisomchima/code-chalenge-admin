import GroupIcon from "@mui/icons-material/Group";
import TimerIcon from "@mui/icons-material/Timer";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export interface User {
  name: string;
  email: string;
  role: string;
  medals: string;
  pfpImage?: string;
  challengePoints: string;
  reviews: number;
  completionRate: string;
  achievements: number;
  signupDate: string;
}

export const STATS_BAR_DATA = [
  {
    title: "Total Challenges",
    value: 224,
    icon: <TrendingUpIcon />,
    growth: "7.2",
    growthPercentage: "+1.51% this week",
    isGrowthPositive: true,
  },
  {
    title: "Completion Rate",
    value: "90%",
    icon: <GroupIcon />,
    growth: "7.2",
    growthPercentage: "-1.51% this week",
    isGrowthPositive: false,
  },
  {
    title: "Mentor Contributions",
    value: "40%",
    icon: <TrendingUpIcon />,
    growth: "7.2",
    growthPercentage: "+1.51% this week",
    isGrowthPositive: true,
  },
  {
    title: "Completion Time",
    value: "0.32 hrs",
    icon: <TimerIcon />,
    growth: "7.2",
    growthPercentage: "+1.51% this week",
    isGrowthPositive: true,
  },
];

export const usersMockData: User[] = [
  {
    name: "Fredrick Precious",
    email: "preciousfredrick240@gmail.com",
    role: "Mentor",
    medals: "Explorer",
    challengePoints: "2,300 pt",
    reviews: 0,
    completionRate: "98%",
    achievements: 12,
    signupDate: "01/12/2024",
  },
  {
    name: "Fredrick Precious",
    email: "preciousfredrick240@gmail.com",
    role: "Mentor",
    medals: "Explorer",
    challengePoints: "2,300 pt",
    reviews: 0,
    completionRate: "98%",
    achievements: 12,
    signupDate: "01/12/2024",
  },
  {
    name: "Fredrick Precious",
    email: "preciousfredrick240@gmail.com",
    role: "Mentor",
    medals: "Explorer",
    challengePoints: "2,300 pt",
    reviews: 0,
    completionRate: "98%",
    achievements: 12,
    signupDate: "01/12/2024",
  },
  {
    name: "Fredrick Precious",
    email: "preciousfredrick240@gmail.com",
    role: "Mentor",
    medals: "Explorer",
    challengePoints: "2,300 pt",
    reviews: 0,
    completionRate: "98%",
    achievements: 12,
    signupDate: "01/12/2024",
  },
  {
    name: "Fredrick Precious",
    email: "preciousfredrick240@gmail.com",
    role: "Mentor",
    medals: "Explorer",
    challengePoints: "2,300 pt",
    reviews: 0,
    completionRate: "98%",
    achievements: 12,
    signupDate: "01/12/2024",
  },
  {
    name: "Fredrick Precious",
    email: "preciousfredrick240@gmail.com",
    role: "Mentor",
    medals: "Explorer",
    challengePoints: "2,300 pt",
    reviews: 0,
    completionRate: "98%",
    achievements: 12,
    signupDate: "01/12/2024",
  },
  {
    name: "Fredrick Precious",
    email: "preciousfredrick240@gmail.com",
    role: "Mentor",
    medals: "Explorer",
    challengePoints: "2,300 pt",
    reviews: 0,
    completionRate: "98%",
    achievements: 12,
    signupDate: "01/12/2024",
  },
  {
    name: "Fredrick Precious",
    email: "preciousfredrick240@gmail.com",
    role: "Mentor",
    medals: "Explorer",
    challengePoints: "2,300 pt",
    reviews: 0,
    completionRate: "98%",
    achievements: 12,
    signupDate: "01/12/2024",
  },
];
