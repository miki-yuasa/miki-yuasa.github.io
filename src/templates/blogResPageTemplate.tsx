import React from "react";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";

import { BlogPageTemplate } from "./blogPageTemplate";
import {
  BlogTagArticleListQuery,
  SitePageContext,
} from "../../@types/graphql-types";
import { BlogListArticles } from "../components/blog/blogListArticles";
import { TagIcon, FolderIcon } from "../components/icons/infoIcons";
import { BlogSidePanes } from "../components/blog/blogSidePanes";
import { Article } from "../../@types";

export const BlogResPageTemplate = (props: {
  data: BlogTagArticleListQuery;
  pageContext: SitePageContext;
}) => {
  const tagName = props.pageContext.slug;

  const articles: Article[] = props.data.allMarkdownRemark.edges;

  const articleList = articles.map(({ node }) => {
    const frontmatter = node.frontmatter;
    return <BlogListArticles frontmatter={frontmatter!} />;
  });

  const iconClass = mergeStyles({
    fontSize: "1.2rem",
    margin: "0px 15px 0px 0",
  });

  const icon = ~tagName?.indexOf("/")! ? (
    <TagIcon iconClass={iconClass} />
  ) : (
    <FolderIcon iconClass={iconClass} />
  );

  const body = (
    <>
      <h3>
        {icon}
        {tagName}
      </h3>
      <section>
        <b>{articles.length}</b> articles are found.
      </section>
      {articleList}
    </>
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
