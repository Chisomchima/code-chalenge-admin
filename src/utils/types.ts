import { User } from "@/pages/users/constant";
import { ReactNode } from "react";

export interface TableCompProps {
  tableHeaderTitle: ReactNode;
  tableHead: string[];
  tableBody: ReactNode;
  tableData: unknown[];
  hasSearch?: boolean;
  searchPlaceholder?: string;
}

export interface ApiResponse {
  content: User[];
  total: number;
  page: number;
  limit: number;
}
