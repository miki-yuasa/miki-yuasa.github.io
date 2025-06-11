import React from "react";
import { Box, Button } from "@mui/material";

import { SEO } from "@/components/SEO";

// Redirect to the landing pages `#research` section

const ResearchPage: React.FC = () => {
  return (
    <>
      <SEO title="Research" />
      <Box sx={{ textAlign: "center", py: 8 }}>
        <Button href="/#research" variant="contained" sx={{ mt: 4 }}>
          Go to Research Section
        </Button>
      </Box>
    </>
  );
};
export default ResearchPage;
