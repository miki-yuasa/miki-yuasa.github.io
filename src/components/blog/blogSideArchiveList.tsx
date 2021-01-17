import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { itemObj } from "../../../@types";
import { BlogArchiveListQuery } from "../../../@types/graphql-types";
import { getFormattedList, group } from "./articlesInfoProcess";
import { BlogSidePaneTitle } from "./blogSidePaneTitle";


export const BlogSideArchiveList = () => {
  const data: BlogArchiveListQuery = useStaticQuery(graphql`
    query BlogArchiveList {
      allMdx(
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

  const articles = data.allMdx.edges;

  const yearMonObjListTemp: itemObj[] = articles.map((article) => {
    const dateStr: string[] = article.node.frontmatter?.date.split("-");
    return {
      key: dateStr[0],
      item: dateStr[1],
    };
  });

  const itemObjArray = group(Array.from(new Map(yearMonObjListTemp.map(yearMonObj => [`${yearMonObj.key}${String.fromCharCode(31)}${yearMonObj.item}`, yearMonObj])).values()));

  return (
    <BlogSidePaneTitle
      title="Archive"
      children={getFormattedList({ itemObjArray })} />
  );
};
