import React from "react";

import { BlogPageTemplate } from "../../templates/blogPageTemplate";
import {
  BlogTagArticleListQuery,
  SitePageContext,
} from "../../../@types/graphql-types";
import { BlogResultBody } from "./blogResultBody";
import { Article, CrumbItem } from "../../../@types";
import { BlogBreadCrumb } from "./blogBreadCrumb";

export const BlogResPageTemplate = (props: {
  data: BlogTagArticleListQuery;
  pageContext: SitePageContext;
}) => {
  const tagName = props.pageContext.slug;

  const articles: Article[] = props.data.allMdx.edges;

  const iconName: string = "tagSolid";

  const resultLinkStyle = "neutralDark";

  const isTag = ~tagName?.indexOf("/")!;
  const resultHeader = isTag ? (
    <>
      <a
        className={resultLinkStyle}
        href={`/blog/tags/${tagName?.split("/")[0].toLowerCase()}`}>
        {tagName?.split("/")[0]}
      </a>
      {" / "}
      <a
        className={resultLinkStyle}
        href={`/blog/tags/${tagName?.toLowerCase()}`} >
        {tagName?.split("/")[1]}
      </a>
    </>
  ) : (
      <a
        className={resultLinkStyle}
        href={`/blog/tags/${tagName?.toLowerCase()}`}>
        {tagName}
      </a>
    );

  const itemsFirst: CrumbItem[] = [
    { text: "Home", href: "/" },
    { text: "Blog", href: "/blog" },
    { text: "Tags", href: "#tags" },
  ];

  const itemsWithHref: CrumbItem[] = isTag
    ? [
      ...itemsFirst,
      {
        text: tagName?.split("/")[0]!,
        href: `/blog/tags/${tagName?.split("/")[0].toLowerCase()}`,
      },
      { text: tagName?.split("/")[1]! },
    ]
    : [...itemsFirst, { text: tagName! }];

  const body = (
    <>
      <p>
        <BlogBreadCrumb crumbItems={itemsWithHref} />
      </p>
      <BlogResultBody
        iconName={iconName}
        resultHeader={resultHeader}
        articles={articles}
      />
    </>
  );

  const title = isTag ? `Tag: ${tagName}` : `Category: ${tagName}`;

  const description = isTag
    ? `List of articles including ${tagName} tag.`
    : `List of articles under ${tagName} category.`;

  return (
    <BlogPageTemplate
      title={title}
      description={description}
      body={body}
    />
  );
};
