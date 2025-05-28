import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { GitHub, Article, YouTube } from "@mui/icons-material"
import { Typography, Box, Grid, Link } from "@mui/material"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { MediaButton, MediaButtonProps } from "../components/Buttons/MediaButton"
import { ArXiv } from "../components/Icons"

export const query = graphql`
    query ProjectById($id: String!) {
        mdx(id: {eq: $id}) {
            frontmatter {
            abstract
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
            title
            }
            body
        }
    }
    `

type AuthorProps = {
    name: string
    url?: string
    affiliation: string
};

type LinkProps = {
    paper?: string
    arxiv?: string
    github?: string
    demo?: string
};


type DataProps = {
    mdx: {
        frontmatter: {
            title: string
            date: string
            authors: AuthorProps[]
            links: LinkProps
            abstract: string
        }
        body: string
    }
}

const getUniqueAffiliations = (authors: AuthorProps[]) => {
    const affiliations = authors.map(author => author.affiliation).filter(Boolean);
    return Array.from(new Set(affiliations));
}

const ProjectTemplate: React.FC<{ data: DataProps }> = ({ data }) => {
    const { title, date, authors, links, abstract } = data.mdx.frontmatter
    const mediaButtons = [
        { name: "Paper", url: links.paper, icon: Article },
        { name: "ArXiv", url: links.arxiv, icon: ArXiv },
        { name: "GitHub", url: links.github, icon: GitHub },
        { name: "Demo", url: links.demo, icon: YouTube },
    ].filter(link => link.url) as MediaButtonProps[];

    const uniqueAffiliations = getUniqueAffiliations(authors);

    return (
        <MDXProvider>
            <SEO title={title} description={abstract} />
            <Layout>
                <Typography align="center" variant="h4" component="h1" gutterBottom>
                    <Box sx={{ fontWeight: 'bold' }}>{title}</Box>
                </Typography>
                <Grid container spacing={2} mb={4} justifyContent="center" alignItems="center">
                    {authors.map((author, index) => (
                        <Grid item key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography variant="h6" color="text.primary">
                                {author.url ? <Link href={author.url} color="primary">{author.name}</Link> : author.name}
                                <sup>{uniqueAffiliations.findIndex(aff => aff === author.affiliation) + 1}</sup>
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
                <Grid container spacing={2} mb={4} justifyContent="center" alignItems="center">
                    {uniqueAffiliations.map((affiliation, index) => (
                        <Grid item key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography variant="h6" color="text.primary">
                                <sup>{index + 1}</sup>{affiliation}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
                <Grid container spacing={2} mb={4} justifyContent="center" alignItems="center">
                    {mediaButtons.map((media) => (
                        <Grid key={media.name} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <MediaButton name={media.name} url={media.url} icon={media.icon} />
                        </Grid>
                    ))}
                </Grid>
                <p><strong>Authors: </strong>
                    {authors.map((author, index) => (
                        <span key={index}>
                            {author.url ? <Link to={author.url}>{author.name}</Link> : author.name}
                            {author.affiliation && ` (${author.affiliation})`}
                            {index < authors.length - 1 && ", "}
                        </span>
                    ))}
                </p>
                <p><strong>Abstract: </strong>{abstract}</p>
                <div>
                    {data.mdx.body}
                </div>
            </Layout>

        </MDXProvider>
    )
}

export default ProjectTemplate