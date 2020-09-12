import React from "react";
import { FontIcon, mergeStyles } from "@fluentui/react";

import { Article } from "../../../@types";
import { BlogListArticles } from "./blogListArticles";

export const BlogResultBody = (props: {
  iconName: string;
  resultName: string;
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

  const body = (
    <>
      <h3>
        {icon}
        {props.resultName}
      </h3>
      <section>
        <b>{props.articles.length}</b> articles are found.
      </section>
      {articleList}
    </>
  );

  return body;
};
