import { Box } from "@mui/material";
import React from "react";

export const LogoImageFrame: React.FC<{ image: string }> = ({ image }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "100% 100%",
        width: "154px",
        height: "70px",
      }}
    />
  );
};

export const ImageFrameRectangular117By53: React.FC<{ image: string }> = ({
  image,
}) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "100% 100%",
        width: "100rem",
        height: "53rem",
      }}
    />
  );
};

export const ImageFrame40: React.FC<{ image: string }> = ({ image }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "100% 100%",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        backgroundColor: "#E7E7E7",
      }}
    />
  );
};

export const ImageFrameCircular70: React.FC<{ image: string }> = ({
  image,
}) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "100% 100%",
        width: "70px",
        height: "70px",
        borderRadius: "50%",
      }}
    />
  );
};

export const ImageFrameCircular80: React.FC<{ image: string }> = ({
  image,
}) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "100% 100%",
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        backgroundColor: "#E7E7E7",
      }}
    />
  );
};

export const HeroImageFrame: React.FC<{ image: string }> = ({ image }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "100% 100%",
        width: "421px",
        height: "492.49px",
      }}
    />
  );
};

export const ProfileImageFrame: React.FC<{ initials: string }> = ({
  initials,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#519E33",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "21px",
        textTransform: "uppercase",
      }}
    >
      {initials}
    </Box>
  );
};
export const PhotoUploadFrame: React.FC<{
  image: string | { url: string };
  url?: string;
}> = ({ image }) => {
  let imageUrl: string | undefined;

  if (typeof image === "string") {
    imageUrl = image;
  } else if (image && image.url) {
    imageUrl = image.url;
  }

  return (
    <Box
      sx={{
        backgroundImage: `url(${imageUrl || ""})`,
        backgroundSize: "100% 100%",
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5F5F5",
        borderRadius: "50%",
        width: "110px",
        height: "110px",
      }}
    ></Box>
  );
};
