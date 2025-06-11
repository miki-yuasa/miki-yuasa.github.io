import React from "react";
import { Box, Card, CardContent, Typography, Link } from "@mui/material";
// import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

import { AuthorProps, LinkProps } from "../../types";

export type ProjectProps = {
  title: string;
  slug: string;
  date: string;
  abstract: string;
  links: LinkProps;
  venue: string;
  authors: AuthorProps[];
  featuredImage: {
    childImageSharp: {
      gatsbyImageData: string;
    };
  };
};

const linkStyle = {
  underline: "hover" as const,
  target: "_blank" as const,
  rel: "noopener noreferrer" as const,
  variant: "body2" as const,
};

// Vertical cards to display projects
export const ProjectCards: React.FC<{
  projects: ProjectProps[];
}> = ({ projects }) => (
  <Box>
    {projects.map((project) => (
      <Card key={project.slug} sx={{ mb: 2, boxShadow: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "stretch", sm: "center" },
            minHeight: 180,
          }}
        >
          {project.featuredImage?.childImageSharp?.gatsbyImageData && (
            <Link
              href={project.slug}
              underline="none"
              sx={{
                display: "block",
                minWidth: { xs: "100%", sm: 200 },
                maxWidth: { xs: 200, sm: 200 },
                maxHeight: 180,
                height: { xs: 180, sm: "auto" },
                ml: { xs: 0, sm: 2 },
                mr: { xs: 2, sm: 0 },
                mb: { xs: 2, sm: 0 },
                flexShrink: 0,
              }}
              aria-label={project.title + " project page"}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <GatsbyImage
                  image={
                    getImage(
                      project.featuredImage.childImageSharp.gatsbyImageData
                    )!
                  }
                  alt={project.title + " featured"}
                  style={{
                    borderRadius: 8,
                    maxHeight: "180px",
                    maxWidth: "300px",
                    width: "100%",
                  }}
                /> */}
              </Box>
            </Link>
          )}
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="body1" fontWeight={700} gutterBottom>
              {project.title}
            </Typography>
            {project.authors && project.authors.length > 0 && (
              <Typography variant="body2" gutterBottom>
                {project.authors.map((author, idx) => (
                  <React.Fragment key={author.name}>
                    {author.name === "Mikihisa Yuasa" ? (
                      <b>{author.name}</b>
                    ) : (
                      author.name
                    )}
                    {idx < project.authors.length - 1 && ", "}
                  </React.Fragment>
                ))}
              </Typography>
            )}
            {project.venue && (
              <>
                <Typography
                  variant="body2"
                  sx={{ fontStyle: "italic" }}
                  gutterBottom
                >
                  {project.venue}
                  {` (${new Date(project.date).toLocaleDateString("en-US", {
                    year: "numeric",
                  })}) `}
                </Typography>
              </>
            )}
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {project.abstract}
            </Typography>
            {/* Optionally, add links or authors if present */}
            {project.links && (
              <Box
                sx={{
                  mt: 1,
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                {[
                  project.slug && (
                    <Link
                      href={project.slug}
                      underline="hover"
                      key="project"
                      variant="body2"
                    >
                      Project Page
                    </Link>
                  ),
                  project.links.paper && (
                    <Link href={project.links.paper} {...linkStyle} key="paper">
                      Paper
                    </Link>
                  ),
                  project.links.arxiv && (
                    <Link href={project.links.arxiv} {...linkStyle} key="arxiv">
                      arXiv
                    </Link>
                  ),
                  project.links.github && (
                    <Link
                      href={project.links.github}
                      {...linkStyle}
                      key="github"
                    >
                      GitHub
                    </Link>
                  ),
                  project.links.demo && (
                    <Link href={project.links.demo} {...linkStyle} key="demo">
                      Demo
                    </Link>
                  ),
                ]
                  .filter(Boolean)
                  .map((link, idx, arr) => [
                    link,
                    idx < arr.length - 1 && <span key={"sep-" + idx}> / </span>,
                  ])}
              </Box>
            )}
          </CardContent>
        </Box>
      </Card>
    ))}
  </Box>
);
