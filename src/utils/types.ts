import { ReactNode } from "react";

export interface TableCompProps {
  tableHeaderTitle: ReactNode;
  tableHead: string[];
  tableBody: ReactNode;
  tableData: unknown[];
  hasSearch?: boolean;
  searchPlaceholder?: string;
}
