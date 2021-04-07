import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getSrc } from "gatsby-plugin-image"

import {
  BlogArticleBySlugQuery,
  SitePageContext,
} from "../../@types/graphql-types";
import { BlogPageTemplate } from "./blogPageTemplate";
import { HashTags } from "../components/blog/blogArticleInfo";
import { CrumbItem } from "../../@types";
import { BlogBreadCrumb } from "../components/blog/blogBreadCrumb";
import { BlogTocPane, BlogTocCenter } from "../components/navs/blogTocPane"
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
  const { mdx } = data; // data.mdx holds your post data

  const frontmatter = mdx?.frontmatter;

  const html = mdx?.body;

  const itemsWithHref: CrumbItem[] = [
    { text: "Home", href: "/" },
    { text: "Blog", href: "/blog" },
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
        <GatsbyImage image={frontmatter?.image?.childImageSharp?.gatsbyImageData!} alt="altsub" />
      </div>
      <p> </p>
      <h1 className="h1BlogTitle">{frontmatter?.title}</h1>
      <h3>{frontmatter?.date}</h3>
      <p>
        <HashTags tags={frontmatter?.tags!} />
      </p>
      <BlogTocCenter data={data} />
      <br />
      <MDXRenderer>{html!}</MDXRenderer>
      <BlogMediaShareButton data={data} />
      <BlogArticleNav pageContext={pageContext} />
      <br />
      <CommentHosting data={data} />
    </>
  );

  const lang = frontmatter?.language!;

  return (
    <BlogPageTemplate
      title={frontmatter?.title}
      description={frontmatter?.description}
      lang={lang}
      body={body}
      side={<> <BlogTocPane data={data} /></>}
      image={getSrc(frontmatter?.image?.childImageSharp!)}
    />
  );
};

export default blogArticleTemplate;

export const pageQuery = graphql`
  query BlogArticleBySlug($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      tableOfContents,
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
            gatsbyImageData(layout:CONSTRAINED, width:760, height:450, placeholder:TRACED_SVG)
          }
        }
      }
    }
  }
`;
