import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import {
  Stack,
  IStackStyles,
  IStackItemStyles,
  IStackTokens,
} from "@fluentui/react";

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
import { HashTags } from "../components/blog/blogArticleInfo";
import { CrumbItem } from "../../@types";
import { BlogBreadCrumb } from "../components/blog/blogBreadCrumb";
import { BlogSidePanes} from "../components/blog/blogSidePanes"

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
    <> </>
  );

  const prevButton = prevFrontmatter ? (
    <NavCommandButton href={prevFrontmatter.slug!}>
      <ChevronLeftIcon /> Previous
    </NavCommandButton>
  ) : (
    <> </>
  );

  const blogTopButton = (
    <NavCommandButton href="/blog/blog-top">Blog Top</NavCommandButton>
  );

  const stackStyles: IStackStyles = {
    root: {
      overflow: "hidden",
      width: `100%`,
    },
  };

  const stackItemStyles: IStackItemStyles = {
    root: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      overflow: "hidden",
    },
  };

  const nonShrinkingStackItemStylesButtons: IStackItemStyles = {
    root: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      overflow: "hidden",
      width: 80,
    },
  };

  const stackTokens: IStackTokens = {
    childrenGap: 0,
    padding: 0,
  };

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
      <Stack horizontal styles={stackStyles} tokens={stackTokens}>
        <Stack.Item disableShrink styles={nonShrinkingStackItemStylesButtons}>
          {prevButton}
        </Stack.Item>
        <Stack.Item grow styles={stackItemStyles}>
          {" "}
        </Stack.Item>
        <Stack.Item disableShrink styles={nonShrinkingStackItemStylesButtons}>
          {blogTopButton}
        </Stack.Item>
        <Stack.Item grow styles={stackItemStyles}>
          {" "}
        </Stack.Item>
        <Stack.Item disableShrink styles={nonShrinkingStackItemStylesButtons}>
          {nextButton}
        </Stack.Item>
      </Stack>
    </>
  );
  const lang = frontmatter?.language?.toLocaleLowerCase().substr(0, 2);
  return (
    <BlogPageTemplate
      title={frontmatter?.title}
      description={frontmatter?.description}
      lang={lang}
      body={body}
      side={<BlogSidePanes/>}
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
