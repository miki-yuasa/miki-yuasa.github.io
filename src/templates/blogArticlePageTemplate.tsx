import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";

import {
  BlogArticleBySlugQuery,
  SitePageContext,
} from "../../@types/graphql-types";
import { BlogPageTemplate } from "./blogPageTemplate";
import { HashTags } from "../components/blog/blogArticleInfo";
import { CrumbItem } from "../../@types";
import { BlogBreadCrumb } from "../components/blog/blogBreadCrumb";
import { BlogSidePanes } from "../components/blog/blogSidePanes";
import { BlogMediaShareButton } from "../components/buttons/blogMediaShareButtons";
import { BlogArticleNav } from "../components/navs/blogArticleNav";
import { CommentHosting } from "../components/comment/commentHosting";

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

  const itemsWithHref: CrumbItem[] = [
    { text: "Landing Page", href: "/" },
    { text: "Blog Top", href: "/blog/blog-top" },
    { text: "Articles" },
    { text: frontmatter?.title! },
  ];

  const body = (
    <>
      <p>
        <BlogBreadCrumb crumbItems={itemsWithHref} />
      </p>
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
      <h3>{frontmatter?.date}</h3>
      <p>
        <HashTags tags={frontmatter?.tags!} />
      </p>
      <div dangerouslySetInnerHTML={{ __html: html! }} />
      <BlogMediaShareButton data={data} />
      <BlogArticleNav pageContext={pageContext} />
      <br />
      <CommentHosting data={data} />
    </>
  );

  const lang = frontmatter?.language?.toLocaleLowerCase().substr(0, 2);

  return (
    <BlogPageTemplate
      title={frontmatter?.title}
      description={frontmatter?.description}
      lang={lang}
      body={body}
      side={<BlogSidePanes />}
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
