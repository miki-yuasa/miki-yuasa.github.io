import React from "react";

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

  const iconName: string = ~tagName?.indexOf("/")!
    ? "tagSolid"
    : "FabricFolder";

  const body = (
    <BlogResultBody
      iconName={iconName}
      resultName={tagName!}
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
