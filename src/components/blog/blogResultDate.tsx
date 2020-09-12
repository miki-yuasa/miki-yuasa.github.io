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

export const BlogResDatePageTemplate = (props: {
  data: BlogTagArticleListQuery;
  pageContext: SitePageContext;
}) => {
  const year: string = props.pageContext.displayYear;

  const resName =
    props.pageContext.displayMonth !== undefined
      ? year + "/" + props.pageContext.displayMonth
      : year;

  const resultLinkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: DefaultPalette.neutralDark,
  };

  const resultHeader =
    props.pageContext.displayMonth !== undefined ? (
      <>
        <Link to={`/blog/archives/${year}`} style={resultLinkStyle}>
          {year}
        </Link>
        {" / "}
        <Link
          to={`/blog/archives/${year}/${props.pageContext.displayMonth}`}
          style={resultLinkStyle}
        >
          {props.pageContext.displayMonth}
        </Link>
      </>
    ) : (
      <Link to={`/blog/archives/${year}`} style={resultLinkStyle}>
        {year}
      </Link>
    );

  const articles: Article[] = props.data.allMarkdownRemark.edges;

  const iconName: string = "Calendar";

  const body = (
    <BlogResultBody
      iconName={iconName}
      resultHeader={resultHeader}
      articles={articles}
    />
  );

  const title =
    props.pageContext.displayMonth !== undefined
      ? `month: ${resName}`
      : `year: ${resName}`;

  const description =
    props.pageContext.displayMonth !== undefined
      ? `List of articles in ${resName}.`
      : `List of articles in ${resName}.`;

  return (
    <BlogPageTemplate
      title={title}
      description={description}
      body={body}
      side={<BlogSidePanes />}
    />
  );
};
