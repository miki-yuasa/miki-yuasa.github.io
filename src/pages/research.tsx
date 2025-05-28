import React from "react";
import { Box, Button, Typography } from "@mui/material";

import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";

// Redirect to the landing pages `#research` section

const ResearchPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Research" />
      <Box sx={{ textAlign: "center", py: 8 }}>
        <Button href="/#research" variant="contained" sx={{ mt: 4 }}>
          Go to Research Section
        </Button>
      </Box>
    </Layout>
  );
};
export default ResearchPage;
