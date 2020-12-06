import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { getFormattedList, group } from "./articlesInfoProcess";
import { BlogArchiveListQuery } from "../../../@types/graphql-types";
import { itemObj } from "../../../@types";

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

  const yearMonObjListTemp: itemObj[] = articles.map((article) => {
    const dateStr: string[] = article.node.frontmatter?.date.split("-");
    return {
      key: dateStr[0],
      item: dateStr[1],
    };
  });

  const itemObjArray = group(Array.from(new Map(yearMonObjListTemp.map(yearMonObj => [`${yearMonObj.key}${String.fromCharCode(31)}${yearMonObj.item}`,yearMonObj])).values()));
  const tagged: boolean = false;

  return (
    <div className="articleSidePaneItem">
      <b>Archives</b>
      {getFormattedList({ itemObjArray, tagged })}
    </div>
  );
};
