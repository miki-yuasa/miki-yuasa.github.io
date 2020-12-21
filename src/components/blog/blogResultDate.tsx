import React from "react";
import { Link } from "gatsby";
import { DefaultPalette } from "@fluentui/react";

import { BlogPageTemplate } from "../../templates/blogPageTemplate";
import {
  BlogTagArticleListQuery,
  SitePageContext,
} from "../../../@types/graphql-types";
import { BlogSidePanes } from "./blogSidePanes";
import { BlogResultBody } from "./blogResultBody";
import { Article, CrumbItem } from "../../../@types";
import { BlogBreadCrumb } from "./blogBreadCrumb";

export const BlogResDatePageTemplate = (props: {
  data: BlogTagArticleListQuery;
  pageContext: SitePageContext;
}) => {
  const year: string = props.pageContext.displayYear;

  const isMonth: boolean = props.pageContext.displayMonth !== undefined;

  const resName = isMonth ? year + "/" + props.pageContext.displayMonth : year;

  const resultLinkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: DefaultPalette.neutralDark,
  };

  const resultHeader = isMonth ? (
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

  const itemsFirst: CrumbItem[] = [
    { text: "Landing Page", href: "/" },
    { text: "Blog Top", href: "/blog/blog-top" },
    { text: "Archives" },
  ];

  const itemsWithHref: CrumbItem[] = isMonth
    ? [
      ...itemsFirst,
      {
        text: year,
        href: `/blog/archives/${year}`,
      },
      { text: props.pageContext.displayMonth! },
    ]
    : [...itemsFirst, { text: year }];

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

  const title = isMonth ? `month: ${resName}` : `year: ${resName}`;

  const description = isMonth
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
