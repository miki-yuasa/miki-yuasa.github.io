import * as React from "react";
import { Typography, Button, Box } from "@mui/material";

const NotFoundPage = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", py: 8 }}>
        <Typography variant="h2" gutterBottom>
          404: Page not found
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sorry 😔, we couldn’t find what you were looking for.
        </Typography>
        <Button href="/" variant="contained" sx={{ mt: 4 }}>
          Go home
        </Button>
      </Box>
    </>
  );
};

export default NotFoundPage;
