import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Typography, Box } from "@mui/material";

import { Layout } from "../components/layout";
import { SEO } from "../components/SEO";

interface ProjectTemplateProps {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    title: string;
    abstract: string;
    venue: string;
    date: string;
    // ...other fields as needed
  };
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({
  source,
  frontMatter,
}) => {
  return (
    <Layout>
      <SEO title={frontMatter.title} description={frontMatter.abstract} />
      <Box>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          {frontMatter.title}
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ textAlign: "center", color: "text.secondary" }}
        >
          {frontMatter.venue} |{" "}
          {new Date(frontMatter.date).toLocaleDateString("en-US", {
            year: "numeric",
          })}
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ textAlign: "center", mb: 4 }}
        >
          {frontMatter.abstract}
        </Typography>
        <MDXRemote {...source} />
      </Box>
    </Layout>
  );
};

export default ProjectTemplate;
