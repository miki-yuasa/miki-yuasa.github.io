import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { CountedItemObj } from "../../../@types";
import { BlogTagListQuery } from "../../../@types/graphql-types";
import { getFormatedTagList, groupTags, sepCatTag } from "./articlesInfoProcess";
import { BlogSidePaneTitle } from "./blogSidePaneTitle";


export const BlogSideTagList = () => {
  const data: BlogTagListQuery = useStaticQuery(graphql`
    query BlogTagList {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  const catTagGroups = data.allMdx.group;

  const catTagGroupObj: CountedItemObj[] = catTagGroups.map(catTagGroup => {
    const { fieldValue, totalCount } = catTagGroup;
    const { key, item } = sepCatTag(fieldValue!);
    return { key, item, totalCount };
  });

  return (
    <BlogSidePaneTitle
      title="Category / Tag"
      children={getFormatedTagList(groupTags(catTagGroupObj))} />
  );
};
