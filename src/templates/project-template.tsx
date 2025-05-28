import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { GitHub, Article, YouTube } from "@mui/icons-material";
import { Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid";

import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import {
  MediaButton,
  MediaButtonProps,
} from "../components/Buttons/MediaButton";
import { ArXiv } from "../components/Icons";

export const query = graphql`
  query ProjectById($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        links {
          paper
          arxiv
          github
          demo
        }
        authors {
          affiliation
          name
          url
        }
        slug
        venue
        title
        abstract
      }
    }
  }
`;

type AuthorProps = {
  name: string;
  url?: string;
  affiliation: string;
};

type LinkProps = {
  paper?: string;
  arxiv?: string;
  github?: string;
  demo?: string;
};

type DataProps = {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
      authors: AuthorProps[];
      links: LinkProps;
      venue: string;
      abstract: string;
    };
    body: string;
  };
};

const getUniqueAffiliations = (authors: AuthorProps[]) => {
  const affiliations = authors
    .map((author) => author.affiliation)
    .filter(Boolean);
  return Array.from(new Set(affiliations));
};

type ProjectTemplateProps = {
  data: DataProps;
  children: React.ReactNode;
};

const ProjectTemplate = ({ data, children }: ProjectTemplateProps) => {
  const { title, date, authors, abstract, links, venue } = data.mdx.frontmatter;
  const mediaButtons = [
    { name: "Paper", url: links.paper, icon: Article },
    { name: "ArXiv", url: links.arxiv, icon: ArXiv },
    { name: "GitHub", url: links.github, icon: GitHub },
    { name: "Demo", url: links.demo, icon: YouTube },
  ].filter((link) => link.url) as MediaButtonProps[];

  const uniqueAffiliations = getUniqueAffiliations(authors);

  console.log("childre", children);

  return (
    <Layout>
      <SEO title={title} description={abstract} />
      <Typography
        align="center"
        variant="h4"
        component="h1"
        sx={{ fontWeight: "bold" }}
        gutterBottom
      >
        {title}
      </Typography>
      {venue !== "" ? (
        <Typography
          align="center"
          variant="h5"
          gutterBottom
          color="secondary"
          sx={{ fontWeight: 600, fontStyle: "italic" }}
        >
          {venue}
        </Typography>
      ) : (
        <> </>
      )}
      <Grid
        container
        spacing={1}
        mb={2}
        justifyContent="center"
        alignItems="center"
      >
        {authors.map((author, index) => (
          <Grid
            item
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography variant="h6" color="text.primary">
              {author.url ? (
                <Link href={author.url} color="primary">
                  {author.name}
                </Link>
              ) : (
                author.name
              )}
              <sup>
                {uniqueAffiliations.findIndex(
                  (aff) => aff === author.affiliation
                ) + 1}
              </sup>
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        spacing={1}
        mb={4}
        justifyContent="center"
        alignItems="center"
      >
        {uniqueAffiliations.map((affiliation, index) => (
          <Grid
            item
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography variant="h6" color="text.primary">
              <sup>{index + 1}</sup>
              {affiliation}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        spacing={2}
        mb={4}
        justifyContent="center"
        alignItems="center"
      >
        {mediaButtons.map((media) => (
          <Grid
            item
            key={media.name}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <MediaButton name={media.name} url={media.url} icon={media.icon} />
          </Grid>
        ))}
      </Grid>
      <MDXProvider>{children}</MDXProvider>
    </Layout>
  );
};

export default ProjectTemplate;
