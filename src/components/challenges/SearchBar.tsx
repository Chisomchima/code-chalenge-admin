import React from "react";
import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ISearchBarProps } from "./types";

const SearchBar: React.FC<ISearchBarProps> = ({
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
