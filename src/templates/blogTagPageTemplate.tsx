import React from "react";
import { graphql } from "gatsby";

import { BlogPageTemplate } from "./blogPageTemplate";
import {
  BlogTagArticleListQuery,
  SitePageContext,
} from "../../@types/graphql-types";
import { BlogListArticles } from "../components/blog/blogListArticles";

const blogTagPageTemplate = ({
  data,
  pageContext,
}: {
  data: BlogTagArticleListQuery;
  pageContext: SitePageContext;
}) => {
  const tagName = pageContext.slug;

  const articles = data.allMarkdownRemark.edges;

  const articleList = articles.map(({ node }) => {
    const frontmatter = node.frontmatter;
    return <BlogListArticles frontmatter={frontmatter!} />;
  });

  const body = (
    <>
      <h3>{tagName}</h3>
      <section>
        <b>{articles.length}</b> articles in total
      </section>
      {articleList}
    </>
  );
  return (
    <BlogPageTemplate
      title={`tag: ${tagName}`}
      description={`List of articles including ${tagName} tags.`}
      body={body}
      side={<div> this is the side</div>}
    />
  );
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
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$slug] } } }
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
