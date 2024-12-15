import { Box, Skeleton, Typography } from "@mui/material";

export const SummaryCard: React.FC<{
  title: string;
  number: number;
  icon: any;
}> = ({ title, number, icon }) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "15px",
        border: "1px solid #E4E4E7",
      }}
    >
      <Box sx={{ marginBottom: "11px" }}>
        <Typography sx={{ fontSize: "12px", color: "#908E8F" }}>
          {title}
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flexGrow: 1 }}>
          {number ? (
            <Typography sx={{ fontSize: "21px", fontWeight: "bold" }}>
              {number}
            </Typography>
          ) : (
            <Skeleton
              variant="text"
              width={40}
              height={25}
              sx={{ mt: 1, display: "block" }}
            />
          )}
        </Box>
        <Box>{icon}</Box>
      </Box>
    </Box>
  );
};
