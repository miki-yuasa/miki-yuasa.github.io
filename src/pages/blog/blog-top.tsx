import React from "react";
import { DefaultPalette } from "office-ui-fabric-react";
import { graphql, useStaticQuery } from "gatsby";

import { BlogHeader } from "../../components/blog/blogHeader";
import { BlogTopListItem } from "../../components/blog/blogTopListItem";
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
    <div style={{ background: DefaultPalette.neutralLight }}>
      <BlogHeader />
      <div
        className="articleFrame"
        style={{ background: DefaultPalette.white }}
      >
        <div className="articleBody">
          {articles.map(({ node }) => {
            const frontmatter = node.frontmatter;
            return <BlogTopListItem frontmatter={frontmatter!} />;
          })}
        </div>
        <div
          className="articleSide"
          style={{ background: DefaultPalette.neutralLighter }}
        >
          this is the side
        </div>
      </div>
    </div>
  );
};

export default BlogTop;
