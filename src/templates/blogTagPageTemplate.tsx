import React from "react";
import { graphql } from "gatsby";

import {
  BlogTagArticleListQuery,
  SitePageContext,
} from "../../@types/graphql-types";
import { BlogResPageTemplate } from "../components/blog/blogResultTag";

const blogTagPageTemplate = ({
  data,
  pageContext,
}: {
  data: BlogTagArticleListQuery;
  pageContext: SitePageContext;
}) => {
  return <BlogResPageTemplate data={data} pageContext={pageContext} />;
};

export default blogTagPageTemplate;

export const pageQuery = graphql`
  query BlogTagArticleList($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      filter: { frontmatter: { tags: { eq: $slug } } }
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
`;
