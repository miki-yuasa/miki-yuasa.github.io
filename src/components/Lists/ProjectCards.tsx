import React from "react";
import { Box, Card, CardContent, Typography, Link } from "@mui/material";
// import Image from 'next/image'; // Will use Next.js Image for images
import { AuthorProps, LinkProps } from "../../types";

export type ProjectProps = {
  title: string;
  slug: string;
  date: string;
  abstract: string;
  links: LinkProps;
  venue: string;
  authors: AuthorProps[];
  featuredImage?: {
    src: string;
    alt?: string;
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
          {/* Image rendering will be updated to use Next.js Image */}
          {project.featuredImage && (
            <Box sx={{ minWidth: 160, minHeight: 120, mr: 2 }}>
              {/* <Image src={project.featuredImage.src} alt={project.featuredImage.alt || project.title} width={160} height={120} style={{ objectFit: 'cover', borderRadius: 8 }} /> */}
            </Box>
          )}
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h6" component="div">
              <Link href={project.slug} color="inherit" underline="hover">
                {project.title}
              </Link>
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {project.venue} | {project.date}
            </Typography>
            <Typography variant="body1" paragraph>
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
