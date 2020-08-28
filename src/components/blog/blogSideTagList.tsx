import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { sepCatTag, getFormattedList, group } from "./articlesInfoProcess";
import { BlogTagListQuery } from "../../../@types/graphql-types";
import { InObj } from "../../../@types";

export const BlogSideTagList = () => {
  const data: BlogTagListQuery = useStaticQuery(graphql`
    query BlogTagList {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `);

  const articles = data.allMarkdownRemark.edges;

  const catTagListTemp: string[] = [];

  articles.forEach((article) => {
    const catTags = article.node.frontmatter?.tags!;
    catTags.forEach((catTag) => {
      catTagListTemp.push(catTag!);
    });
  });

  // delete duplicate catTags
  const catTagSet = new Set(catTagListTemp);
  const catTagList = Array.from(catTagSet);

  // create an object array of sets of catory and tags.
  const catTagObjListTemp: InObj[] = [];

  catTagList.forEach((catTag) => {
    const { key, item }: { key: string; item: string } = sepCatTag(catTag);
    catTagObjListTemp.push({ key: key, item: item });
    return catTagObjListTemp;
  });

  const inObjArray = group(catTagObjListTemp!);
  const tagged: boolean = true;

  return (
    <div className="articleSidePaneItem">
      <b>Category/Tag</b>
      {getFormattedList({ inObjArray, tagged })}
    </div>
  );
};
