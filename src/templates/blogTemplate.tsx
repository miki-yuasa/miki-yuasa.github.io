import React from "react";
import { graphql } from "gatsby";

import { BlogHeader } from "../components/blog/blogHeader";
import { BlogArticleBySlugQuery } from "../../@types/graphql-types";

const blogArticleTemplate = ({
  data,
  pageContext,
}: {
  data: BlogArticleBySlugQuery;
  pageContext: any;
}) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const frontmatter = markdownRemark?.frontmatter;
  const html = markdownRemark?.html;
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter?.title}</h1>
        <h2>{frontmatter?.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html! }}
        />
      </div>
    </div>
  );
};

export default blogArticleTemplate;

export const pageQuery = graphql`
  query BlogArticleBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        tags
        keyword
      }
    }
  }
`;
