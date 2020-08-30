import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";

import {
  BlogArticleBySlugQuery,
  MarkdownRemarkFrontmatter,
  SitePageContext,
} from "../../@types/graphql-types";
import { BlogPageTemplate } from "./blogPageTemplate";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
} from "../components/icons/infoIcons";
import { NavCommandButton } from "../components/buttons/navCommandButton";

const blogArticleTemplate = ({
  data,
  pageContext,
}: {
  data: BlogArticleBySlugQuery;
  pageContext: SitePageContext;
}) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const frontmatter = markdownRemark?.frontmatter;
  const html = markdownRemark?.html;
  const nextFrontmatter: MarkdownRemarkFrontmatter = pageContext.next
    ?.frontmatter!;
  const prevFrontmatter: MarkdownRemarkFrontmatter = pageContext.previous
    ?.frontmatter!;

  const nextButton = nextFrontmatter ? (
    <NavCommandButton href={nextFrontmatter.slug!}>
      Next <ChevronRightIcon />
    </NavCommandButton>
  ) : (
    <NavCommandButton href=""> </NavCommandButton>
  );

  const prevButton = prevFrontmatter ? (
    <NavCommandButton href={prevFrontmatter.slug!}>
      <ChevronLeftIcon /> Previous
    </NavCommandButton>
  ) : (
    <NavCommandButton href=""> </NavCommandButton>
  );

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
      <div className="articlePreviousNext">
        {prevButton}
        {nextButton}
      </div>
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
