import React from "react";
import { Link } from "gatsby";
import { DefaultPalette } from "office-ui-fabric-react";

import { BlogPageTemplate } from "../../templates/blogPageTemplate";
import {
  BlogTagArticleListQuery,
  SitePageContext,
} from "../../../@types/graphql-types";
import { BlogSidePanes } from "./blogSidePanes";
import { BlogResultBody } from "./blogResultBody";
import { Article } from "../../../@types";

export const BlogResPageTemplate = (props: {
  data: BlogTagArticleListQuery;
  pageContext: SitePageContext;
}) => {
  const tagName = props.pageContext.slug;

  const articles: Article[] = props.data.allMarkdownRemark.edges;

  const iconName: string = "tagSolid";

  const resultLinkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: DefaultPalette.neutralDark,
  };

  const resultHeader = ~tagName?.indexOf("/")! ? (
    <>
      <Link
        to={`/blog/tags/${tagName?.split("/")[0].toLowerCase()}`}
        style={resultLinkStyle}
      >
        {tagName?.split("/")[0]}
      </Link>
      {" / "}
      <Link to={`/blog/tags/${tagName?.toLowerCase()}`} style={resultLinkStyle}>
        {tagName?.split("/")[1]}
      </Link>
    </>
  ) : (
    <Link to={`/blog/tags/${tagName?.toLowerCase()}`} style={resultLinkStyle}>
      {tagName}
    </Link>
  );

  const body = (
    <BlogResultBody
      iconName={iconName}
      resultHeader={resultHeader}
      articles={articles}
    />
  );

  const title = ~tagName?.indexOf("/")!
    ? `tag: ${tagName}`
    : `category: ${tagName}`;

  const description = ~tagName?.indexOf("/")!
    ? `List of articles including ${tagName} tag.`
    : `List of articles under ${tagName} category.`;

  return (
    <BlogPageTemplate
      title={title}
      description={description}
      body={body}
      side={<BlogSidePanes />}
    />
  );
};
