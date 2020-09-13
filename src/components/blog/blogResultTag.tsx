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
import { Article, CrumbItem } from "../../../@types";
import { BlogBreadCrumb } from "./blogBreadCrumb";

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

  const isTag = ~tagName?.indexOf("/")!;
  const resultHeader = isTag ? (
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

  const itemsFirst: CrumbItem[] = [
    { text: "Landing Page", href: "/" },
    { text: "Blog Top", href: "/blog/blog-top" },
    { text: "Tags" },
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

  const title = isTag ? `tag: ${tagName}` : `category: ${tagName}`;

  const description = isTag
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
