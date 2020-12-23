import React from "react";
import { FontIcon, mergeStyles } from "@fluentui/react";

import { Article } from "../../../@types";
import { BlogListArticles } from "./blogListArticles";

export const BlogResultBody = (props: {
  iconName: string;
  resultHeader: JSX.Element;
  articles: Article[];
}) => {
  const articleList = props.articles.map(({ node }) => {
    const frontmatter = node.frontmatter;
    return <BlogListArticles frontmatter={frontmatter!} />;
  });

  const iconClass = mergeStyles({
    fontSize: "1.2rem",
    margin: "0px 15px 0px 0",
  });

  const icon = <FontIcon iconName={props.iconName} className={iconClass} />;

  const articles: number = props.articles.length;

  const articleText: string = articles == 1
    ? 'article was'
    : 'articles were';

  const body = (
    <>
      <h3>
        {icon}
        {props.resultHeader}
      </h3>
      <section>
        <b>{props.articles.length}</b> {articleText} found.
      </section>
      {articleList}
    </>
  );

  return body;
};
