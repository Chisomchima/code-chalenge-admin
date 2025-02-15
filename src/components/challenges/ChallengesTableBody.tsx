import React, { useState } from "react";
import {
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ITableBodyProps } from "./types";

const ChallengesTableBody: React.FC<ITableBodyProps> = ({
  currentPageData,
  handleClick,
  handleClose,
  handleView,
  handleEdit,
  handleDelete,
  handlePublish,
  anchorEl,
  open,
}) => {
  const [selectedRowId, setSelectedRowId] = useState<string | null>(null);

  const handleRowClick = (id: string) => {
    setSelectedRowId(id);
  };

  return (
    <TableBody>
      {currentPageData.map((row) => (
        <TableRow
          key={row.id}
          sx={{
            "& td, & th": { border: 0 },
            backgroundColor:
              selectedRowId === row.id ? "rgba(0, 0, 0, 0.08)" : "inherit",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
              transition: "background-color 0.2s ease",
            },
            cursor: "pointer",
          }}
          onClick={() => handleRowClick(row.id)}
        >
          <TableCell style={{ fontWeight: "lighter", display: "flex" }}>
            <img
              src={row.logo}
              alt={row.name}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                marginRight: "0.5rem",
              }}
            />
            <div>
              <div>{row.name}</div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: row.status === "Draft" ? "#FFAE00" : "#A238FF",
                }}
              >
                {row.status}
              </div>
            </div>
          </TableCell>
          <TableCell style={{ fontWeight: "lighter" }}>
            <span
              style={{
                display: "inline-block",
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                backgroundColor:
                  row.type === "Front End"
                    ? "purple"
                    : row.type === "Back End"
                    ? "orange"
                    : "red",
                marginRight: "0.5rem",
              }}
            ></span>
            <span style={{ marginLeft: "0.5rem" }}>{row.type}</span>
          </TableCell>

          <TableCell style={{ fontWeight: "lighter" }}>
            {row.completionTime}
          </TableCell>
          <TableCell style={{ fontWeight: "lighter" }}>
            {row.completionRate}
          </TableCell>
          <TableCell style={{ fontWeight: "lighter" }}>
            {row.participants}
          </TableCell>
          <TableCell style={{ fontWeight: "lighter" }}>{row.points}</TableCell>
          <TableCell style={{ fontWeight: "lighter" }}>
            {row.createDate}
          </TableCell>
          <TableCell style={{ fontWeight: "lighter" }}>
            <IconButton
              aria-controls={open ? "challenge-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={(event) => {
                event.stopPropagation();
                handleClick(event, row.id);
              }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="challenge-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{
                "& .MuiPaper-root": {
                  borderRadius: "8px",
                  minWidth: "150px",
                  boxShadow: "none",
                  border: "1px solid #E5E5E5",
                },
                size: "small",
              }}
            >
              <MenuItem
                onClick={handlePublish}
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                    transition: "background-color 0.2s ease",
                  },
                  fontWeight: "lighter",
                  size: "small",
                }}
              >
                Publish Challenge
              </MenuItem>
              <MenuItem
                onClick={handleView}
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                    transition: "background-color 0.2s ease",
                  },
                  fontWeight: "lighter",
                  size: "small",
                }}
              >
                View Challenge
              </MenuItem>
              <MenuItem
                onClick={handleEdit}
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                    transition: "background-color 0.2s ease",
                  },
                  fontWeight: "lighter",
                  size: "small",
                }}
              >
                Edit Challenge
              </MenuItem>
              <MenuItem
                onClick={handleDelete}
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                    transition: "background-color 0.2s ease",
                  },
                  fontWeight: "lighter",
                  size: "small",
                }}
              >
                Delete Challenge
              </MenuItem>
            </Menu>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default ChallengesTableBody;
