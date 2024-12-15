import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Typography } from "@mui/material";

export interface AlertDialogProps {
  open: boolean;
  onClose: () => void;
  onAgree?: () => void;
  title?: string;
  content?: string;
  disagreeText?: string;
  agreeText?: string;
  deleteColor?: boolean;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  open,
  onClose,
  onAgree,
  title,
  content,
  disagreeText,
  agreeText,
  deleteColor,
}) => {
  const handleAgree = () => {
    if (onAgree) {
      onAgree();
    }
    onClose(); // Close the modal after triggering the agreed action
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{ zIndex: 10000 }}
    >
      <Box
        sx={{
          py: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <DialogTitle id="alert-dialog-title">
          <Typography
            variant="h6"
            sx={{
              fontSize: "20px",
              fontWeight: 600,
              color: "black",
              mb: { xs: "5px", sm: "0px" },
              wordBreak: "break-all",
              textTransform: "capitalize",
            }}
          >
            {title}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography
              sx={{
                fontSize: "16px",
                textAlign: "center",
                color: "black",
                mb: { xs: "5px", sm: "0px" },
                textTransform: "capitalize",
              }}
            >
              {content}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onClose}
            sx={{
              borderRadius: "1rem",
              textTransform: "capitalize",
              backgroundColor: "black",
              color: "white",
              px: "20px",
              "&:hover": {
                backgroundColor: "darkgray",
              },
            }}
          >
            {disagreeText}
          </Button>
          {agreeText && (
            <Button
              onClick={handleAgree}
              autoFocus
              sx={{
                borderRadius: "1rem",
                textTransform: "capitalize",
                backgroundColor: deleteColor ? "#FF0000" : "#2E7D31",
                color: "white",
                px: "20px",
                "&:hover": {
                  backgroundColor: deleteColor ? "#FF0000" : "#2E7D31",
                },
              }}
            >
              {agreeText}
            </Button>
          )}
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default AlertDialog;
