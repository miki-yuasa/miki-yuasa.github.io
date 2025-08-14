"use client";

import React from "react";
import { Box, Button } from "@mui/material";
import { PictureAsPdf } from "@mui/icons-material";

interface PDFEmbedProps {
  src: string;
  title?: string;
  height?: string | number;
  width?: string | number;
  showDownloadButton?: boolean;
}

export const PDFEmbed: React.FC<PDFEmbedProps> = ({
  src,
  title = "PDF Document",
  height = "600px",
  width = "100%",
  showDownloadButton = false,
}) => {
  return (
    <Box sx={{ width: "100%", my: 3 }}>
      {showDownloadButton && (
        <Box sx={{ mb: 2, display: "flex", justifyContent: "center" }}>
          <Button
            component="a"
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<PictureAsPdf fontSize="large" />}
            sx={{
              textTransform: "none",
              fontWeight: 500,
              fontSize: "1rem",
              whiteSpace: "nowrap",
              width: 180,
              borderRadius: 4,
            }}
            variant="outlined"
            aria-label="Open PDF in New Tab"
            disableElevation
          >
            Open PDF in New Tab
          </Button>
        </Box>
      )}
      <Box
        sx={{
          width: "100%",
          border: "1px solid #e0e0e0",
          borderRadius: 1,
          overflow: "hidden",
        }}
      >
        <iframe
          src={src}
          title={title}
          width={width}
          height={height}
          style={{
            border: "none",
            display: "block",
          }}
        />
      </Box>
    </Box>
  );
};

export default PDFEmbed;
