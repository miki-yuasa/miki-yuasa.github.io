import React from "react";
import { graphql } from "gatsby";

import { BlogArticleBySlugQuery } from "../../@types/graphql-types";
import { BlogPageTemplate } from "./blogPageTemplate";
import Image from "gatsby-image";

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
  const body = (
    <>
      <div
        style={{
          maxWidth: "760px",
          maxHeight: "450px",
          paddingTop: "5%",
          paddingRight: "10%",
          paddingLeft: "10%",
        }}
      >
        <Image fluid={frontmatter?.image?.childImageSharp?.fluid!} />
      </div>
      <p> </p>
      <h1>{frontmatter?.title}</h1>
      <h2>{frontmatter?.date}</h2>
      <div dangerouslySetInnerHTML={{ __html: html! }} />
    </>
  );
  const lang = frontmatter?.language?.toLocaleLowerCase().substr(0, 2);
  return (
    <BlogPageTemplate
      title={frontmatter?.title}
      description={frontmatter?.description}
      lang={lang}
      body={body}
      side={<div> </div>}
    />
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
        keywords
        description
        language
        image {
          childImageSharp {
            fluid(maxWidth: 760, maxHeight: 450, quality: 50) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;
