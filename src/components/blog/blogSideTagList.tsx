import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { sepCategTag } from "./sepCategTag";
import { BlogTagListQuery } from "../../../@types/graphql-types";

export const blogSideTagList = () => {
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
  type CategTagObjTemp = {
    category: string;
    tags: string;
  };
  type CategTagObj = {
    category: string;
    tags: string[];
  };

  const categorizedObjListTemp: CategTagObjTemp[] = [];
  categTagList.forEach((categTag) => {
    const { category, tag }: { category: string; tag: string } = sepCategTag(
      categTag
    );
    categorizedObjListTemp.push({ category: category, tags: tag });
  });

  const categorizedObjList: CategTagObj[] = [];
  categorizedObjListTemp.forEach((categorizedObjTemp) => {
    const ind: number = categorizedObjList.findIndex(
      (element) => element.category === categorizedObjTemp.category
    );
    if (ind !== -1) {
      categorizedObjList[ind].tags.concat(categorizedObjTemp.tags);
    } else {
      categorizedObjList.push({
        category: categorizedObjTemp.category,
        tags: [categorizedObjTemp.tags],
      });
    }
  });
};
