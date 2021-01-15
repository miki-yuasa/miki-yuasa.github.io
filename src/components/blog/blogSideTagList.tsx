import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { sepCatTag, groupTags, getFormatedTagList } from "./articlesInfoProcess";
import { BlogSidePaneTitle } from "./blogSidePaneTitle";
import { BlogTagListQuery } from "../../../@types/graphql-types";
import { CountedItemObj } from "../../../@types";

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
