import React from "react";
import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f1f1f1",
        borderRadius: "8px",
        padding: "5px 10px",
        minWidth: "300px",
      }}
    >
      <SearchIcon
        style={{ color: "gray", marginRight: "10px", fontSize: "24px" }}
      />
      <InputBase
        placeholder="Search"
        sx={{ width: "100%" }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </Box>
  );
};

export default SearchBar;
