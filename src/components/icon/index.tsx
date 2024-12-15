import { Box } from "@mui/material";

export const IconHolder: React.FC<{ icon: string }> = ({icon}) => {
    return (
      <Box
        component="span"
        className="svg-color"
        sx={{
          width: 24,
          height: 24,
          display: "inline-block",
          bgcolor: "currentcolor",
          mask: `url(${icon}) no-repeat center / contain`,
          WebkitMask: `url(${icon}) no-repeat center / contain`,
        }}
      />
    );
  };