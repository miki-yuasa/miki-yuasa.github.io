import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { BlogPageTemplate } from "../../templates/blogPageTemplate";
import { BlogListArticles } from "../../components/blog/blogListArticles";
import { BlogArticleListQuery } from "../../../@types/graphql-types";

const BlogTop = () => {
  const data: BlogArticleListQuery = useStaticQuery(graphql`
    query BlogArticleList {
      site {
        siteMetadata {
          title
          description
        }
      }

      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "YYYY-MM-DD")
              title
              description
              tags
              slug
            }
          }
        }
      }
    }
  `);

  const articles = data.allMarkdownRemark.edges;

  return (
    <BlogPageTemplate
      title={`Miki's Blog Top Page`}
      description={`The top page of Miki's blog`}
      body={articles.map(({ node }) => {
        const frontmatter = node.frontmatter;
        return <BlogListArticles frontmatter={frontmatter!} />;
      })}
      side={<div> this is the side</div>}
    />
  );
};

export default BlogTop;
