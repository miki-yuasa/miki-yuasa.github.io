import React from "react";
import { graphql } from "gatsby";

import {
  BlogDateArticleListQuery,
  SitePageContext,
} from "../../@types/graphql-types";
import { BlogResDatePageTemplate } from "../components/blog/blogResultDate";

const blogTagPageTemplate = ({
  data,
  pageContext,
}: {
  data: BlogDateArticleListQuery;
  pageContext: SitePageContext;
}) => {
  return <BlogResDatePageTemplate data={data} pageContext={pageContext} />;
};

export default blogTagPageTemplate;

export const pageQuery = graphql`
  query BlogDateArticleList($periodStartDate: Date, $periodEndDate: Date) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      filter: {
        frontmatter: { date: { gte: $periodStartDate, lt: $periodEndDate } }
      }
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
