import { Box, Typography } from "@mui/material";

const EmptyState = ({ message, hide }: { message: string; hide?: boolean }) => (
  <Box className="flex flex-col items-center justify-center p-8 h-[40vh]">
    <Typography
      variant="h6"
      className="text-gray-500 !font-inter !text-2xl !font-semibold"
    >
      {message}
    </Typography>
    {!hide && (
      <Typography
        variant="body2"
        className="text-gray-400 mt-2 text-sm !font-inter"
      >
        {message === "No users found"
          ? "There are no users to display at the moment."
          : "Getting users data"}
      </Typography>
    )}
  </Box>
);

export default EmptyState;
