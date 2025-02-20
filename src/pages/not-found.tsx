// src/pages/NotFoundPage.tsx
import React from "react";
import { Box, Typography, Button, Container, Paper } from "@mui/material";
import { styled } from "@mui/system";

const Background = styled(Box)({
  backgroundImage: "url(/images/devspaxbg.svg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  color: "white",
});

const Overlay = styled(Box)({
  position: "absolute",
  inset: 0,
  backgroundColor: "black",
  opacity: 0.5,
});

const NotFoundPage: React.FC = () => {
  return (
    <Background>
      <Overlay />
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{ position: "relative", zIndex: 10, p: 6, textAlign: "center" }}
        >
          <Typography variant="h1" component="h1" color="red" gutterBottom>
            404
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="textSecondary"
            gutterBottom
          >
            Oops! The page you’re looking for doesn’t exist.
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            It seems like you've wandered off the beaten path. Let's get you
            back on track.
          </Typography>
          <Box mt={4}>
            <Button variant="contained" href="/" sx={{ px: 4, py: 2 }}>
              Go to Homepage
            </Button>
          </Box>
        </Paper>
      </Container>
    </Background>
  );
};

export default NotFoundPage;
