import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { sepCategTag, getFormattedList, group } from "./articlesInfoProcess";
import { BlogTagListQuery } from "../../../@types/graphql-types";

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

  const categTagListTemp: string[] = [];

  articles.forEach((article) => {
    const categTags = article.node.frontmatter?.tags!;
    categTags.forEach((categTag) => {
      categTagListTemp.push(categTag!);
    });
  });

  // delete duplicate categTags
  const categTagSet = new Set(categTagListTemp);
  const categTagList = Array.from(categTagSet);

  // create an object array of sets of category and tags.
  const categTagObjListTemp: InObj[] = [];

  categTagList.forEach((categTag) => {
    const { key, item }: { key: string; item: string } = sepCategTag(categTag);
    categTagObjListTemp.push({ key: key, item: item });
    return categTagObjListTemp;
  });

  const inObjArray = group(categTagObjListTemp!);
  const tagged: boolean = true;

  return (
    <div className="articleSidePaneItem">
      <b>Category/Tag</b>
      {getFormattedList({ inObjArray, tagged })}
    </div>
  );
};
