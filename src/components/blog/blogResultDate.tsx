import React from "react";
import { Article, CrumbItem } from "../../../@types";
import {
  BlogTagArticleListQuery,
  SitePageContext
} from "../../../@types/graphql-types";
import { BlogPageTemplate } from "../../templates/blogPageTemplate";
import { BlogBreadCrumb } from "./blogBreadCrumb";
import { BlogResultBody } from "./blogResultBody";


export const BlogResDatePageTemplate = (props: {
  data: BlogTagArticleListQuery;
  pageContext: SitePageContext;
}) => {
  const year: string = props.pageContext.displayYear;

  const isMonth: boolean = props.pageContext.displayMonth !== undefined;

  const resName = isMonth ? year + "/" + props.pageContext.displayMonth : year;

  const resultLinkStyle = "neutralDark";

  const resultHeader = isMonth ? (
    <>
      <a href={`/blog/archives/${year}`} className={resultLinkStyle}>
        {year}
      </a>
      {" / "}
      <a
        href={`/blog/archives/${year}/${props.pageContext.displayMonth}`}
        className={resultLinkStyle}
      >
        {props.pageContext.displayMonth}
      </a>
    </>
  ) : (
      <a href={`/blog/archives/${year}`} className={resultLinkStyle}>
        {year}
      </a>
    );

  const articles: Article[] = props.data.allMdx.edges;

  const iconName: string = "Calendar";

  const itemsFirst: CrumbItem[] = [
    { text: "Home", href: "/" },
    { text: "Blog", href: "/blog" },
    { text: "Archives", href: "#archives" },
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

  const title = isMonth ? `Month: ${resName}` : `Year: ${resName}`;

  const description = isMonth
    ? `List of articles in ${resName}.`
    : `List of articles in ${resName}.`;

  return (
    <BlogPageTemplate
      title={title}
      description={description}
      body={body}
    />
  );
};
