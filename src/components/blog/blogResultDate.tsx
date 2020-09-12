import React from "react";

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
  const resName =
    props.pageContext.displayMonth !== undefined
      ? props.pageContext.displayYear + "/" + props.pageContext.displayMonth
      : props.pageContext.displayYear;

  const articles: Article[] = props.data.allMarkdownRemark.edges;

  const iconName: string =
    props.pageContext.displayMonth !== undefined ? "Calendar" : "FabricFolder";

  const body = (
    <BlogResultBody
      iconName={iconName}
      resultName={resName!}
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
