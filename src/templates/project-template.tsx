import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

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
    affiliation?: string
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


const ProjectTemplate: React.FC<{ data: DataProps }> = ({ data }) => {
    const { title, date, authors, links, abstract } = data.mdx.frontmatter
    console.log("links", links)

    return (
        <MDXProvider>
            <Layout>
                <SEO title={title} description={abstract} />
                <article>
                    <h1>{title}</h1>
                    <p><strong>Date: </strong> {date}</p>
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
                    <p><strong>Links: </strong>
                        {links.paper && <Link to={links.paper}>Paper</Link>}
                        {links.arxiv && <Link to={links.arxiv}>ArXiv</Link>}
                        {links.github && <Link to={links.github}>GitHub</Link>}
                        {links.demo && <Link to={links.demo}>Demo</Link>}
                    </p>
                    <div>
                        {data.mdx.body}
                    </div>
                </article>
            </Layout>

        </MDXProvider>
    )
}

export default ProjectTemplate