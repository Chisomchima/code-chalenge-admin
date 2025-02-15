import React, { ReactNode, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

interface TableCompProps {
  tableHeaderTitle: ReactNode;
  tableHead: string[];
  tableBody: ReactNode;
  tableData: unknown[];
  hasSearch?: boolean;
  searchPlaceholder?: string;
}

const UsersTable = ({
  tableHeaderTitle,
  tableHead,
  tableBody,
  searchPlaceholder,
  hasSearch,
  tableData,
}: TableCompProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const ITEMS_PER_PAGE = 10;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPageData = tableData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(tableData.length / ITEMS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <Box className="rounded-lg p-4 shadow-sm border border-gray-200 w-full">
      <div className="flex flex-row items-center justify-between">
        <Typography className="mb-4 w-full !font-bold !font-inter !text-xl">
          {tableHeaderTitle}
        </Typography>

        {hasSearch && (
          <div className="flex flex-row items-center gap-2 pl-2 bg-white ring-1 rounded-md ring-gray-300 shadow-sm w-fit">
            <Search strokeWidth={1.5} className="size-5 text-gray-500" />
            <Input
              type="text"
              className="w-[400px] !outline-none !border-0 !ring-0 shadow-none px-0 py-3 h-full"
              placeholder={searchPlaceholder}
            />
          </div>
        )}
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow className="[&>td]:border-0 [&>th]:border-0">
              {tableHead.map((data, index) => (
                <TableCell
                  key={index}
                  className="!font-normal truncate !font-inter !text-gray-500"
                >
                  {data}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{tableBody}</TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <div>
          <Button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            style={{ marginRight: "0.5rem" }}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
        <Typography variant="body2">
          Total: {tableData.length} - Page {currentPage} of {totalPages}
        </Typography>
      </div>
    </Box>
  );
};

export default UsersTable;
