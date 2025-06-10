import * as React from "react";
import { Typography, Button, Box } from "@mui/material";
import { Layout } from "../components/layout";

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <Box sx={{ textAlign: "center", py: 8 }}>
        <Typography variant="h2" gutterBottom>
          Page not found
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sorry 😔, we couldn’t find what you were looking for.
        </Typography>
        <Button href="/" variant="contained" sx={{ mt: 4 }}>
          Go home
        </Button>
      </Box>
    </Layout>
  );
};

export default NotFoundPage;
