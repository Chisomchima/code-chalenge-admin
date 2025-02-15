import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";

const TableHeader: React.FC = () => {
  return (
    <TableHead>
      <TableRow sx={{ "& td, & th": { border: 0 } }}>
        <TableCell style={{ fontWeight: "normal" }}>Name/Status</TableCell>
        <TableCell style={{ fontWeight: "normal" }}>Type</TableCell>
        <TableCell style={{ fontWeight: "normal" }}>Completion Time</TableCell>
        <TableCell style={{ fontWeight: "normal" }}>Completion Rate</TableCell>
        <TableCell style={{ fontWeight: "normal" }}>Participants</TableCell>
        <TableCell style={{ fontWeight: "normal" }}>Points</TableCell>
        <TableCell style={{ fontWeight: "normal" }}>Create Date</TableCell>
        <TableCell style={{ fontWeight: "normal" }}>Actions</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
