import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import SectionTemplate from "../templates/sectionTemplate";
import { ArticleCard } from "../components/cards/articleCard";
import { BlogCardListQuery } from "../../@types/graphql-types";

export default function Blog() {
  const data: BlogCardListQuery = useStaticQuery(graphql`
    query BlogCardList {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 5
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "YYYY-MM-DD")
              title
              description
              tags
              slug
              image {
                childImageSharp {
                  fluid(maxWidth: 320, maxHeight: 200, quality: 30) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const articleCards: JSX.Element[] = data.allMarkdownRemark.edges.map(
    (edge) => {
      return (
        <ArticleCard
          title={edge.node.frontmatter?.title!}
          href={edge.node.frontmatter?.slug!}
          imageSrc={edge.node.frontmatter?.image?.childImageSharp?.fluid?.src!}
        />
      );
    }
  );

  return (
    <SectionTemplate title="Blog">
      <p>
        These links are for the software repositories of my past research and
        personal projects hosted on Bitbucket. The codes for some on-going
        projects have restricted access for internal use.
      </p>
      <div className="docCard">{articleCards}</div>
      <Link to="/blog/blog-top">about</Link>
    </SectionTemplate>
  );
}
