import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { getFormattedList, group } from "./articlesInfoProcess";
import { BlogArchiveListQuery } from "../../../@types/graphql-types";

export const BlogSideArchiveList = () => {
  const data: BlogArchiveListQuery = useStaticQuery(graphql`
    query BlogArchiveList {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "YYYY-MM-DD")
            }
          }
        }
      }
    }
  `);

  const articles = data.allMarkdownRemark.edges;

  const yearMonObjListTemp: InObj[] = [];

  articles.forEach((article) => {
    const dateStr: string[] = article.node.frontmatter?.date.split("-");
    yearMonObjListTemp.push({
      key: dateStr[0],
      item: dateStr[1],
    });
  });

  const inObjArray = group(yearMonObjListTemp!);
  const tagged: boolean = false;

  return (
    <div className="articleSidePaneItem">
      <b>Archives</b>
      {getFormattedList({ inObjArray, tagged })}
    </div>
  );
};
